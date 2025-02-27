import { getTagging } from './classification'
import { getPerson } from './extractions'

export const message = {
  userInfo: getPerson,
  fortuneTelling: getTagging,
}
