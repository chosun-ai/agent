import {
  Button,
  Center,
  HStack,
  Input,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'

import useHome from './hooks/useHome'

function Home() {
  const {
    handleSearch,
    CATEGORY_LIST,
    setSelectedCategory,
    selectedCategory,
    data,
    isLoading,
    setQuery,
  } = useHome()

  console.log('data : ', data)

  return (
    <Center
      h={'100%'}
      borderRadius={'8px'}
      flexDir={'column'}
      gap={'20px'}
      maxW={'500px'}
      mx={'auto'}
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
      <HStack w={'100%'}>
        <Input w={'100%'} onChange={(e) => setQuery(e.target.value)} />
        <Button onClick={handleSearch}>키워드 검색</Button>
      </HStack>
    </Center>
  )
}
export default Home
