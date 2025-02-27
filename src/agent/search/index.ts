import { json } from '@toktokhan-dev/node'

import { FILE_LIST } from './constant'

const search = async (
  query: string,
  category: string,
  startDate: string,
  endDate: string,
) => {
  console.log('@@@ START SEARCH ACTION @@@')
  // category가 없으면 모든 파일을, 있으면 해당 category 파일만 선택
  const files =
    category ?
      [FILE_LIST.find((item) => item.value === category)?.file].filter(Boolean)
    : FILE_LIST.map((item) => item.file)

  console.log('category : ', category)
  console.log(FILE_LIST.map((item) => item.file))
  // 모든 파일의 데이터를 병렬로 가져오기
  const allData = await Promise.all(
    files.map((file) => {
      try {
        return json<any>(String(file))
      } catch (error) {
        return [] // 에러 발생 시 빈 배열 반환
      }
    }),
  )
  const result = allData.reduce((acc, curr) => [...acc, ...curr], [])
  console.log('files : ', files)
  console.log('allData : ', allData)
  console.log('result : ', result)

  // query로 검색 결과 필터링
  const filteredResult =
    query ?
      result.filter((item: any) =>
        item.title.toLowerCase().includes(query.toLowerCase()),
      )
    : result

  // 모든 데이터를 하나의 배열로 합치기
  return filteredResult
}

export default search
