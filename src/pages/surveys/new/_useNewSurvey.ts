import { useState } from 'react'

interface Field {
  question: string
  options: string[]
}

interface NewSurveyMethods {
  title: string;
  fields: Field[]
  actualFieldIndex: number
  setActualFieldIndex: (arg: number) => void
  setTitle: (arg: string) => void
  addField: () => void
  removeField: () => void
  addOption: () => void 
  removeOption: (index: number) => void
  setOption: (optionInd: number, value: string) => void
  setQuestion: (value: string) => void 
}

export default function useNewSurvey(): NewSurveyMethods {
  const [ title, setTitle ] = useState("")
  const [ fieldIndex, setFieldIndex ] = useState(0)
  const [ fields, setFields ] = useState<Field[]>([{
    question: '',
    options: ['']
  }])

  const addField = () => {
    if (fields.length < 10)
      setFields(fields.concat({ question: '', options: [''] }))
  }

  const removeField = () => {
    setFields(fields.filter((_, ind) => ind !== fieldIndex))
  }

  const addOption = () => {
    setFields(fields.map((f, i) => {
      if (i === fieldIndex) {
        return {
          ...f,
          options: f.options.length < 5 ? f.options.concat(['']) : f.options
        }
      } else {
        return f
      }
    }))
  }

  const removeOption = (index: number) => {
    setFields(fields.map((field, find) => {
      if (fieldIndex === find) {
        return {
          ...field,
          options: field.options.filter((_, oind) => oind !== index)
        }
      } else {
        return field
      }
    }))
  }

  const setOption = (optionInd: number, value: string) => {
    const field = fields[fieldIndex]
    field.options[optionInd] = value

    setFields(fields.map((f, i) => i === fieldIndex ? field : f))
  }

  const setQuestion = (value: string) => {
    const field = fields[fieldIndex]
    field.question = value

    setFields(fields.map((f, i) => i === fieldIndex ? field : f))
  }

  return {
    title,
    setTitle,
    fields,
    actualFieldIndex: fieldIndex,
    setActualFieldIndex: setFieldIndex,
    addField,
    addOption,
    removeField,
    removeOption,
    setQuestion,
    setOption
  }
}