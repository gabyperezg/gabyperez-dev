import React, { useState } from 'react'
import styled from 'styled-components'

const Title = styled.div`
  color: #6c388f;
  margin-top: -30px;
`
const H1 = styled.h1`
  margin-bottom: 0;
`
const H2 = styled.h2`
  margin-top: 0px;
`
const TypedMessage = (props) => {
  const helloWorld = 'Hello World!      '
  const myName = "I'm Gaby Perez"
  const [worldLength, setWorldLength] = useState(0)
  const [nameLength, setNameLength] = useState(0)

  setTimeout(() => {
    if (worldLength < helloWorld.length) {
      let newLength = worldLength + 1
      setWorldLength(newLength)
    } else {
      setWorldLength(0)
      typeName
    }
  }, 400)

  const typeName = setTimeout(() => {
    if (nameLength < myName.length) {
      let newLength = nameLength + 1
      setNameLength(newLength)
    } else {
    }
  }, 400)

  const typeHelloWorld = helloWorld.slice(0, worldLength)
  const typeMyName = myName.slice(0, nameLength)

  return (
    <Title>
      <H1>🌎{typeHelloWorld}</H1>
      <H2>{typeMyName}</H2>
    </Title>
  )
}

export default TypedMessage
