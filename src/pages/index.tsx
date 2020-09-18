import { Heading, Button } from '@chakra-ui/core'

import Layout from 'components/Layout'

const Home: React.FC = () => {
  return (
    <Layout>
      <Heading as="h1" size="2xl">Bem vindo ao Survey Shock</Heading>
      <Button variantColor="red">OI</Button>
    </Layout>
  )
}

export default Home