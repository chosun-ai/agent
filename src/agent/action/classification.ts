import { ChatPromptTemplate } from '@langchain/core/prompts'

import { z } from 'zod'

import { model } from '@/agent/helper'

const classificationSchema = z.object({
  sentiment: z
    .enum(['happy', 'neutral', 'sad'])
    .describe('The sentiment of the text'),
  language: z
    .enum(['spanish', 'english', 'french', 'german', 'italian'])
    .describe('The language the text is written in'),
})

// Name is optional, but gives the models more clues as to what your schema represents
const llmWihStructuredOutput = model.withStructuredOutput(
  classificationSchema,
  {
    name: 'extractor',
  },
)

export const getTagging = async (userMessage: string) => {
  const taggingPrompt = ChatPromptTemplate.fromTemplate(TAGGING_PROMPT)
  const prompt = await taggingPrompt.invoke({
    userMessage: userMessage,
  })
  return await llmWihStructuredOutput.invoke(prompt)
}

export const TAGGING_PROMPT = `다음 응답에서 원하는 정보를 추출하세요.

'Classification' 함수에서 언급된 속성들만 추출하세요.

응답: {userMessage}`
