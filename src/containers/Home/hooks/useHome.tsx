import { useState } from 'react'

import { useForm } from 'react-hook-form'

import { useGetSearchQuery } from '@/apis/search/SearchApi.query'

const useHome = () => {
  const [query, setQuery] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const { data, isLoading } = useGetSearchQuery({
    variables: {
      q: query,
    },
  })

  const { handleSubmit, register } = useForm({
    defaultValues: {
      q: '',
    },
  })

  const onSubmit = (data: any) => {
    console.log('onSubmit data : ', data)
    setQuery(data.q)
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    CATEGORY_LIST,
    setSelectedCategory,
    selectedCategory,
    data,
    isLoading,
    setQuery,
  }
}

export default useHome

const CATEGORY_LIST = [
  {
    title: '전체',
    value: null,
  },
  {
    title: '1대 태조',
    value: '태조실록',
  },
  {
    title: '2대 정종',
    value: '정종실록',
  },
  {
    title: '3대 태종',
    value: '태종실록',
  },
  {
    title: '4대 세종',
    value: '세종실록',
  },
  {
    title: '5대 문종',
    value: '문종실록',
  },
  {
    title: '6대 단종',
    value: '단종실록',
  },
  {
    title: '7대 세조',
    value: '세조실록',
  },
]
