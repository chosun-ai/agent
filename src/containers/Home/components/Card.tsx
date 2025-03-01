import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  CardBody,
  CardHeader,
  Card as ChakraCard,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react'

const Card = ({ data }: { data: any }) => {
  return (
    <ChakraCard w={'100%'}>
      <CardHeader>
        <Heading size="md">{`${data.name} ${data.number}권 | ${data.date}`}</Heading>
      </CardHeader>
      <CardBody pt={'0px'}>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Text textStyle={'pre-body-05'}>카테고리 : {data.category}</Text>
            <Flex gap={'6px'} my={'10px'}>
              {data.keywords.map((item: any) => {
                return <Badge key={item}>{item}</Badge>
              })}
            </Flex>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {data.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} whiteSpace={'pre-line'}>
                  {data.content}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Stack>
      </CardBody>
    </ChakraCard>
  )
}

export default Card
