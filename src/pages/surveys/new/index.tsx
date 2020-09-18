import { Heading, Button, Stack, Box, Input, Flex, CloseButton, Divider, IconButton } from '@chakra-ui/core'

import Layout from 'components/Layout'
import useNewSurvey from './_useNewSurvey'

const NewSurvey = () => {
  const {
    actualFieldIndex,
    addField,
    addOption,
    fields,
    removeField,
    removeOption,
    setActualFieldIndex,
    setOption,
    setQuestion,
    setTitle,
    title
  } = useNewSurvey()

  console.log(fields)

  return (
    <Layout>
      <Flex 
        w="full" maxW="2xl" 
        justifyContent="space-around" 
        alignItems="center"
      >
        <Heading my={4} as="h2" size="xl">Novo Survey</Heading>
        <Box>
          <Button variantColor="green" mx={2}>
            Salvar
          </Button>
          <Button variantColor="red" mx={2}>
            Cancelar
          </Button>
        </Box>
      </Flex>

      <Box w="full" maxW="3xl" p={2} my={4}>
        <Input 
          placeholder="Título"
          variant="flushed"
          value={title}
          onChange={e => setTitle(e.target.value)} 
        />
        <Stack isInline w="full" flexWrap="wrap">
          {fields.map((_, index) => (
            <Button 
              m={2} 
              onClick={() => setActualFieldIndex(index)} 
              bg={index === actualFieldIndex ? 'white' : 'red.500'}
              color={index === actualFieldIndex ? 'red.500' : 'white'}
            >
              {index + 1}
            </Button>
          ))}
          <IconButton 
            icon="add"
            onClick={addField}
            variantColor="red"
            aria-label="add-field"
            m={2}
          />
          <IconButton 
            icon="delete" 
            onClick={removeField}
            variantColor="red"
            aria-label="remove-field"
            m={2}
          />
        </Stack>
      </Box>
      <Divider borderColor="black" />

      <Box w="full" h="full" maxW="3xl">
        <Input 
          mb={6}
          placeholder={`Questão ${actualFieldIndex + 1}`}
          value={fields[actualFieldIndex]?.question}
          onChange={e => setQuestion(e.target.value)}
        />
        { fields[actualFieldIndex]?.options.map((option, optionIndex) => (
          <Flex>
            <Input
              mb={2}
              key={optionIndex}
              flexGrow={1}
              value={option}
              placeholder={`Opção ${optionIndex + 1}`}
              onChange={e => setOption(optionIndex, e.target.value)}
            />
            <CloseButton onClick={() => removeOption(optionIndex)}/>
          </Flex>
        ))}
        <Button onClick={addOption}>
          Add
        </Button>
      </Box>
    </Layout>
  )
}

export default NewSurvey