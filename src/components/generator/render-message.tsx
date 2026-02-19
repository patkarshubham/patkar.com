'use client';

import type { UseChatHelpers } from '@ai-sdk/react';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { useStickToBottom } from 'use-stick-to-bottom';
import AiResponse from './text/ai-response';
import UserMessage from './text/user-message';

type PropsType = {
  useChat: UseChatHelpers & {
    addToolResult: ({
      toolCallId,
      result,
    }: {
      toolCallId: string;
      result: unknown;
    }) => void;
  };
  isThinking: boolean;
};

export function RenderMessage({ useChat, isThinking }: PropsType) {
  const { messages, setMessages, reload, error } = useChat;
  const { contentRef, scrollRef } = useStickToBottom();

  useEffect(() => {
    if (!error) return;
    
    const errorMessage = error.message || String(error);
    console.error('RenderMessage error:', error);
    
    if (
      errorMessage.includes('Incorrect API') ||
      errorMessage.includes('Missing API key') ||
      errorMessage.includes('503') ||
      errorMessage.includes('API key')
    ) {
      toast.error('Text generation unavailable', {
        description:
          'Add GROQ_API_KEY to .env (free key at console.groq.com) or OPENAI_API_KEY, then restart the dev server.',
      });
    } else if (errorMessage.includes('401') || errorMessage.includes('Unauthorized')) {
      toast.error('Invalid API key', {
        description: 'Please check your GROQ_API_KEY in .env and restart the dev server.',
      });
    } else if (errorMessage.includes('429') || errorMessage.includes('rate limit')) {
      toast.error('Rate limit exceeded', {
        description: 'Please wait a moment and try again.',
      });
    } else {
      toast.error('Something went wrong', {
        description: errorMessage || 'An unexpected error occurred. Check the console for details.',
      });
    }
  }, [error]);

  return (
    <div
      className="flex-[1_1_0] overflow-y-auto custom-scrollbar px-5 pt-12 pb-6 md:px-12"
      ref={scrollRef}
    >
      <div
        className="text-gray-800 dark:text-white/90 space-y-6 max-w-none prose dark:prose-invert"
        ref={contentRef}
      >
        {messages.map((message, messageIdx) => {
          return (
            <div key={message.id}>
              {message.parts.map((part, i) => {
                if (part.type === 'text') {
                  if (message.role === 'user') {
                    return (
                      <UserMessage
                        key={`${message.id}-${i}`}
                        message={part.text}
                        showActions={
                          // showActions is true only for the last user message
                          messages.length - 1 === messageIdx ||
                          // if ai responded it should be second to last
                          messages.length - 2 === messageIdx
                        }
                        onEdit={async (newMessage) => {
                          setMessages((prev) => {
                            return prev.map((prevMsg) => {
                              if (prevMsg.id !== message.id) return prevMsg;

                              return {
                                ...prevMsg,
                                parts: prevMsg.parts?.map((part) => ({
                                  ...part,
                                  text: newMessage,
                                })),
                              };
                            });
                          });

                          reload();
                        }}
                      />
                    );
                  }

                  return (
                    <AiResponse
                      key={`${message.id}-${i}`}
                      response={part.text}
                    />
                  );
                }
              })}
            </div>
          );
        })}

        {isThinking && (
          <div className="text-gray-500 font-medium">
            💭 Model is thinking...
          </div>
        )}
      </div>
    </div>
  );
}
