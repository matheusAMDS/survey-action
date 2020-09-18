import { Box, Flex, Button, Stack } from '@chakra-ui/core'

const Layout: React.FC = ({ children }) => {
  return (
    <Flex flexDirection="row" flexWrap="nowrap">
      <Stack w={280} minH="100vh" bg="red.500">
        <Button variant="ghost">
          Surveys
        </Button>
        <Button variant="ghost">
          Surveys
        </Button>
      </Stack>
      <Flex
        as="main"
        minH="100vh"
        p={4}
        w="full"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bg="gray.100"
      >
        {children}
      </Flex>
    </Flex>
  )
}

export default Layout