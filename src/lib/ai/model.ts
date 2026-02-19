import { createGroq } from '@ai-sdk/groq';
import { openai } from '@ai-sdk/openai';

/**
 * Text generation model: uses Groq (free tier) by default.
 * Get a free API key at https://console.groq.com
 * Set GROQ_API_KEY in .env to enable the text generator.
 *
 * Optional: set OPENAI_API_KEY to use OpenAI instead (e.g. gpt-4o-mini).
 */
export function getTextModel() {
  const groqKey = process.env.GROQ_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY;

  if (groqKey) {
    if (!groqKey.trim()) {
      throw new Error('GROQ_API_KEY is empty. Please check your .env file.');
    }
    try {
      const groq = createGroq({ apiKey: groqKey.trim() });
      return groq('llama-3.1-8b-instant');
    } catch (err) {
      console.error('Failed to create Groq model:', err);
      throw new Error(`Failed to initialize Groq: ${err instanceof Error ? err.message : String(err)}`);
    }
  }
  
  if (openaiKey) {
    if (!openaiKey.trim()) {
      throw new Error('OPENAI_API_KEY is empty. Please check your .env file.');
    }
    return openai('gpt-4o-mini', { structuredOutputs: true });
  }
  
  throw new Error(
    'Missing API key. Add GROQ_API_KEY (free at https://console.groq.com) or OPENAI_API_KEY to .env'
  );
}
