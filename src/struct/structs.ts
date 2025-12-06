export const modelsList = [
    {
        name: 'openai:text-embedding-3-large',
        value: 'openai:text-embedding-3-large'
    },
    {
        name: 'cohere:embed-multilingual-v3.0',
        value: 'cohere:embed-multilingual-v3.0'
    },
    {
        name: 'cohere:embed-multilingual-light-v3.0',
        value: 'cohere:embed-multilingual-light-v3.0'
    },
    {
        name: 'google:text-embedding-004',
        value: 'google:text-embedding-004'
    }
]

export const modelsLangbaseList = [
  // OpenAI
  { name: 'gpt-5.1-chat-latest', value: 'openai:gpt-5.1-chat-latest' },
  { name: 'gpt-5.1', value: 'openai:gpt-5.1-2025-11-13' },
  { name: 'gpt-5', value: 'openai:gpt-5-2025-08-07' },
  { name: 'gpt-5-chat', value: 'openai:gpt-5-chat-latest' },
  { name: 'gpt-5-mini', value: 'openai:gpt-5-mini-2025-08-07' },
  { name: 'gpt-5-nano', value: 'openai:gpt-5-nano-2025-08-07' },
  { name: 'o3', value: 'openai:o3' },
  { name: 'o4-mini', value: 'openai:o4-mini' },
  { name: 'o3-mini', value: 'openai:o3-mini' },
  { name: 'o1', value: 'openai:o1' },
  { name: 'o1-preview', value: 'openai:o1-preview' },
  { name: 'o1-mini', value: 'openai:o1-mini' },
  { name: 'gpt-4.1', value: 'openai:gpt-4.1' },
  { name: 'gpt-4.1-mini', value: 'openai:gpt-4.1-mini' },
  { name: 'gpt-4.1-nano', value: 'openai:gpt-4.1-nano' },
  { name: 'gpt-4o', value: 'openai:gpt-4o' },
  { name: 'chatgpt-4o-latest', value: 'openai:chatgpt-4o-latest' },
  { name: 'gpt-4o-2024-08-06', value: 'openai:gpt-4o-2024-08-06' },
  { name: 'gpt-4o-mini', value: 'openai:gpt-4o-mini' },
  { name: 'gpt-4-turbo', value: 'openai:gpt-4-turbo' },
  { name: 'gpt-4-turbo-preview', value: 'openai:gpt-4-turbo-preview' },
  { name: 'gpt-4-0125-preview', value: 'openai:gpt-4-0125-preview' },
  { name: 'gpt-4-1106-preview', value: 'openai:gpt-4-1106-preview' },
  { name: 'gpt-4', value: 'openai:gpt-4' },
  { name: 'gpt-4-0613', value: 'openai:gpt-4-0613' },
  { name: 'gpt-4-32k', value: 'openai:gpt-4-32k' },
  { name: 'gpt-3.5-turbo-0125', value: 'openai:gpt-3.5-turbo-0125' },
  { name: 'gpt-3.5-turbo-1106', value: 'openai:gpt-3.5-turbo-1106' },
  { name: 'gpt-3.5-turbo', value: 'openai:gpt-3.5-turbo' },
  { name: 'gpt-3.5-turbo-16k', value: 'openai:gpt-3.5-turbo-16k' },

  // Anthropic
  { name: 'claude-haiku-4.5', value: 'anthropic:claude-haiku-4-5-20251001' },
  { name: 'claude-opus-4-20250514', value: 'anthropic:claude-opus-4-20250514' },
  { name: 'claude-sonnet-4-20250514', value: 'anthropic:claude-sonnet-4-20250514' },
  { name: 'claude-3.7-sonnet-latest', value: 'anthropic:claude-3-7-sonnet-latest' },
  { name: 'claude-3.7-sonnet-20250219', value: 'anthropic:claude-3-7-sonnet-20250219' },
  { name: 'claude-3.5-sonnet-latest', value: 'anthropic:claude-3-5-sonnet-latest' },
  { name: 'claude-3.5-sonnet-20240620', value: 'anthropic:claude-3-5-sonnet-20240620' },
  { name: 'claude-3-5-haiku-20241022', value: 'anthropic:claude-3-5-haiku-20241022' },
  { name: 'claude-3.5-sonnet-20240620', value: 'anthropic:claude-3-5-sonnet-20240620' },
  { name: 'claude-3-opus', value: 'anthropic:claude-3-opus-20240229' },
  { name: 'claude-3-sonnet', value: 'anthropic:claude-3-sonnet-20240229' },
  { name: 'claude-3-haiku', value: 'anthropic:claude-3-haiku-20240307' },

  // Google AI
  { name: 'gemini-2.5-pro', value: 'google:gemini-2.5-pro' },
  { name: 'gemini-2.5-flash', value: 'google:gemini-2.5-flash' },
  { name: 'gemini-2.5-flash-lite-preview-06-17', value: 'google:gemini-2.5-flash-lite-preview-06-17' },
  { name: 'gemini-2.5-pro-preview-06-05', value: 'google:gemini-2.5-pro-preview-06-05' },
  { name: 'gemini-2.5-pro-preview-05-06', value: 'google:gemini-2.5-pro-preview-05-06' },
  { name: 'gemini-2.5-flash-preview-05-20', value: 'google:gemini-2.5-flash-preview-05-20' },
  { name: 'gemini-2.5-flash-preview-04-17', value: 'google:gemini-2.5-flash-preview-04-17' },
  { name: 'gemini-2.5-pro-preview-03-25', value: 'google:gemini-2.5-pro-preview-03-25' },
  { name: 'gemini-2.0-flash', value: 'google:gemini-2.0-flash' },
  { name: 'gemini-2.0-flash-lite', value: 'google:gemini-2.0-flash-lite' },
  { name: 'gemini-1.5-pro', value: 'google:gemini-1.5-pro-latest' },
  { name: 'gemini-1.5-flash', value: 'google:gemini-1.5-flash-latest' },
  { name: 'gemini-1.5-flash-8b', value: 'google:gemini-1.5-flash-8b-latest' },
  { name: 'gemini-1.0-pro', value: 'google:gemini-pro' },

  // OpenRouter
  { name: 'openrouter:anthropic/claude-3.7-sonnet', value: 'openrouter:anthropic/claude-3.7-sonnet' },
  { name: 'openrouter:xai/grok-4', value: 'openrouter:xai/grok-4' },
  { name: 'openrouter:anthropic/claude-3.7-sonnet:thinking', value: 'openrouter:anthropic/claude-3.7-sonnet:thinking' },
  { name: 'openrouter:mistralai/magistral-medium-2506:thinking', value: 'openrouter:mistralai/magistral-medium-2506:thinking' },
  { name: 'openrouter:openai/o1-pro', value: 'openrouter:openai/o1-pro' },
  { name: 'openrouter:anthropic/claude-3.5-sonnet', value: 'openrouter:anthropic/claude-3.5-sonnet' },
  { name: 'openrouter:xai/grok-3-beta', value: 'openrouter:xai/grok-3-beta' },
  { name: 'openrouter:xai/grok-3-mini-beta', value: 'openrouter:xai/grok-3-mini-beta' },
  { name: 'openrouter:cohere/command-a', value: 'openrouter:cohere/command-a' },
  { name: 'openrouter:perplexity/sonar-deep-research', value: 'openrouter:perplexity/sonar-deep-research' },
  { name: 'openrouter:deepseek/deepseek-r1:free', value: 'openrouter:deepseek/deepseek-r1:free' },
  { name: 'openrouter:deepseek-chat-v3-0324:free', value: 'openrouter:deepseek-chat-v3-0324:free' },
  { name: 'openrouter:deepseek-chat-v3-0324', value: 'openrouter:deepseek-chat-v3-0324' },
  { name: 'openrouter:google/gemini-2.0-flash-001', value: 'openrouter:google/gemini-2.0-flash-001' },
  { name: 'openrouter:google/gemma-3-27b-it:free', value: 'openrouter:google/gemma-3-27b-it:free' },
  { name: 'openrouter:mistralai/mistral-nemo', value: 'openrouter:mistralai/mistral-nemo' },

  // Together AI
  { name: 'together:moonshotai/Kimi-K2-Instruct', value: 'together:moonshotai/Kimi-K2-Instruct' },
  { name: 'together:meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8', value: 'together:meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8' },
  { name: 'together:meta-llama/Llama-4-Scout-17B-16E-Instruct', value: 'together:meta-llama/Llama-4-Scout-17B-16E-Instruct' },
  { name: 'together:meta-llama/Llama-3.3-70B-Instruct-Turbo', value: 'together:meta-llama/Llama-3.3-70B-Instruct-Turbo' },
  { name: 'together:meta-llama/Llama-3.2-90B-Vision-Instruct-Turbo', value: 'together:meta-llama/Llama-3.2-90B-Vision-Instruct-Turbo' },
  { name: 'together:meta-llama/Llama-3.2-11B-Vision-Instruct-Turbo', value: 'together:meta-llama/Llama-3.2-11B-Vision-Instruct-Turbo' },
  { name: 'together:Qwen/Qwen2.5-VL-72B-Instruct', value: 'together:Qwen/Qwen2.5-VL-72B-Instruct' },
  { name: 'together:deepseek-ai/DeepSeek-V3', value: 'together:deepseek-ai/DeepSeek-V3' },
  { name: 'together:meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo', value: 'together:meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo' },
  { name: 'together:Qwen/Qwen2.5-72B-Instruct-Turbo', value: 'together:Qwen/Qwen2.5-72B-Instruct-Turbo' },
  { name: 'together:meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo', value: 'together:meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo' },
  { name: 'together:meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo', value: 'together:meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo' },
  { name: 'together:meta-llama/Llama-3-70b-chat-hf', value: 'together:meta-llama/Llama-3-70b-chat-hf' },
  { name: 'together:meta-llama/Llama-3-8b-chat-hf', value: 'together:meta-llama/Llama-3-8b-chat-hf' },
  { name: 'together:meta-llama/Llama-2-13b-chat-hf', value: 'together:meta-llama/Llama-2-13b-chat-hf' },
  { name: 'together:google/gemma-2b-it', value: 'together:google/gemma-2b-it' },
  { name: 'together:mistralai/Mistral-7B-Instruct-v0.1', value: 'together:mistralai/Mistral-7B-Instruct-v0.1' },
  { name: 'together:mistralai/Mistral-7B-Instruct-v0.2', value: 'together:mistralai/Mistral-7B-Instruct-v0.2' },
  { name: 'together:mistralai/Mixtral-8x7B-Instruct-v0.1', value: 'together:mistralai/Mixtral-8x7B-Instruct-v0.1' },
  { name: 'together:mistralai/Mixtral-8x22B-Instruct-v0.1', value: 'together:mistralai/Mixtral-8x22B-Instruct-v0.1' },
  { name: 'together:databricks/dbrx-instruct', value: 'together:databricks/dbrx-instruct' },

  // Mistral AI (direct provider)
  { name: 'mistral:mistral-large-latest', value: 'mistral:mistral-large-latest' },
  { name: 'mistral:pixtral-large-latest', value: 'mistral:pixtral-large-latest' },
  { name: 'mistral:pixtral-12b', value: 'mistral:pixtral-12b' },
  { name: 'mistral:open-mistral-nemo', value: 'mistral:open-mistral-nemo' },
  { name: 'mistral:codestral-latest', value: 'mistral:codestral-latest' },

  // Deepseek (direct provider)
  { name: 'deepseek:deepseek-reasoner', value: 'deepseek:deepseek-reasoner' },
  { name: 'deepseek:deepseek-chat', value: 'deepseek:deepseek-chat' },

  // xAI
  { name: 'xai:grok-code-fast-1', value: 'xai:grok-code-fast-1' },
  { name: 'xai:grok-4-fast-reasoning', value: 'xai:grok-4-fast-reasoning' },
  { name: 'xai:grok-4-fast-non-reasoning', value: 'xai:grok-4-fast-non-reasoning' },
  { name: 'xai:grok-4', value: 'xai:grok-4' },
  { name: 'xai:grok-3-beta', value: 'xai:grok-3-beta' },
  { name: 'xai:grok-3-fast-beta', value: 'xai:grok-3-fast-beta' },
  { name: 'xai:grok-3-mini-beta', value: 'xai:grok-3-mini-beta' },
  { name: 'xai:grok-3-mini-fast-beta', value: 'xai:grok-3-mini-fast-beta' },
  { name: 'xai:grok-2-1212', value: 'xai:grok-2-1212' },
  { name: 'xai:grok-2-vision-1212', value: 'xai:grok-2-vision-1212' },
  { name: 'xai:grok-beta', value: 'xai:grok-beta' },

  // Perplexity
  { name: 'perplexity:sonar-pro', value: 'perplexity:sonar-pro' },
  { name: 'perplexity:sonar', value: 'perplexity:sonar' }
];
