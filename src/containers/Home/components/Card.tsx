import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  CardBody,
  CardHeader,
  Card as ChakraCard,
  Heading,
  Stack,
  StackDivider,
} from '@chakra-ui/react'

const Card = ({ data }: { data: any }) => {
  return (
    <ChakraCard w={'100%'}>
      <CardHeader>
        <Heading size="md">{`${data.name} ${data.number}권 | ${data.date}`}</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
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
                <AccordionPanel pb={4}>{data.content}</AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Stack>
      </CardBody>
    </ChakraCard>
  )
}

export default Card
