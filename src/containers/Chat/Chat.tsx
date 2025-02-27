import { Box, Button, ChakraProps, Flex, Image, Text } from '@chakra-ui/react'

interface ChatProps {
  styles?: {
    container?: ChakraProps
  }
}

function Chat({ styles }: ChatProps) {
  return (
    <Box {...styles?.container}>
      <Text>Chat</Text>
    </Box>
  )
}

export default Chat
