import { getTextModel } from '@/lib/ai/model';
import { PROMPT } from '@/lib/ai/prompts';
import { errorHandler, getMostRecentUserMessage } from '@/lib/utils';
import { createIdGenerator, streamText, type LanguageModelV1 } from 'ai';

export const maxDuration = 50;

export async function POST(req: Request) {
  try {
    let model;
    try {
      model = getTextModel();
      console.log('Model initialized successfully');
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Missing API key for text generation.';
      console.error('Failed to get model:', err);
      return new Response(
        JSON.stringify({
          error: message,
          hint: 'Add GROQ_API_KEY (free at https://console.groq.com) to .env and restart the dev server',
        }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { messages } = await req.json();
    console.log('Received messages:', messages?.length || 0);

    const userMessage = getMostRecentUserMessage(messages);

    if (!userMessage) {
      return new Response('No user message found', {
        status: 404,
      });
    }

    const result = streamText({
      model: model as LanguageModelV1,
      system: PROMPT,
      messages,
      experimental_generateMessageId: createIdGenerator({
        prefix: 'msgs',
      }),
    });

    return result.toDataStreamResponse({
      getErrorMessage:
        process.env.NODE_ENV === 'development' ? errorHandler : undefined,
    });
  } catch (error) {
    console.error('Chat API error:', error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Text generation failed. Please try again.';
    return new Response(
      JSON.stringify({
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined,
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
