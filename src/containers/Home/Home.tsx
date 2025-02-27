import {
  Button,
  Flex,
  HStack,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'

import Card from './components/Card'
import useHome from './hooks/useHome'

function Home() {
  const {
    onSubmit,
    CATEGORY_LIST,
    setSelectedCategory,
    selectedCategory,
    data,
    isLoading,
    register,
    handleSubmit,
  } = useHome()

  console.log('data : ', data)

  return (
    <Flex
      h={'100%'}
      borderRadius={'8px'}
      flexDir={'column'}
      gap={'20px'}
      maxW={'500px'}
      mx={'auto'}
      pt={'40px'}
    >
      <Text
        color={'primary.3'}
        textStyle={'pre-heading-01'}
        textAlign={'center'}
      >
        조선왕조실록 검색
      </Text>
      <SimpleGrid columns={6} spacing={'6px'}>
        {CATEGORY_LIST.map((item) => {
          const isSelected = selectedCategory === item.value
          return (
            <Button
              key={item.value}
              variant={isSelected ? 'solid-primary' : 'outline-primary'}
              borderRadius={'full'}
              cursor={'pointer'}
              p={'10px'}
              size={'sm'}
              onClick={() => setSelectedCategory(item.value)}
            >
              <Text>{item.title}</Text>
            </Button>
          )
        })}
      </SimpleGrid>
      <HStack w={'100%'} as={'form'} onSubmit={handleSubmit(onSubmit)}>
        <Input w={'100%'} {...register('query')} />
        <Button type={'submit'} isLoading={isLoading}>
          키워드 검색
        </Button>
      </HStack>
      <Text textStyle={'pre-body-03'} textAlign={'left'} w={'100%'}>
        검색 결과 : {data ? data.result.length : 0}
      </Text>
      <VStack alignItems={'flex-start'} w={'100%'} spacing={'10px'}>
        {data?.result?.map((item: any) => {
          return <Card key={item.id} data={item} />
        })}
      </VStack>
    </Flex>
  )
}
export default Home
