import { ChatPromptTemplate } from '@langchain/core/prompts'

import { z } from 'zod'

import { model } from '@/agent/helper'

const MISSING_FIELDS = 'name, hair_color, height_in_meters'
const personSchema = z.object({
  name: z.optional(z.string()).describe('The name of the person'),
  hair_color: z
    .optional(z.string())
    .describe("The color of the person's hair if known"),
  height_in_meters: z
    .optional(z.string())
    .describe('Height measured in meters'),
})

export const getPerson = async (userMessage: string) => {
  const structured_llm = model.withStructuredOutput(personSchema)
  const parsePrompt = ChatPromptTemplate.fromTemplate(PARSE_RESPONSE_PROMPT)
  const prompt = await parsePrompt.invoke({
    userMessage: userMessage,
    missingFields: MISSING_FIELDS,
  })
  return await structured_llm.invoke(prompt)
}

export const PARSE_RESPONSE_PROMPT = `사용자의 응답에서 다음 정보를 추출해 주세요:
응답: {userMessage}
찾아야 할 정보: {missingFields}

다음과 같은 다양한 형식도 허용됩니다:
- 이름: "홍길동", "길동", "홍. 길동" 등
- 머리색: "검정", "갈색", "금발", "빨강" 등
- 키(미터): "1.75", "1.75m", "175cm" 등

JSON 형식으로 출력해 주세요. 예시:
{{
  "name": "홍길동",
  "hair_color": "검정",
  "height_in_meters": "1.75"
}}

- 사용자가 응답에서 제공하지 않은 데이터는 수집하지 마세요.
- 찾을 수 없는 정보는 반드시 제외해 주세요.`
