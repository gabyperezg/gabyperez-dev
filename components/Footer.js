import React, { useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  background-color: #2e012e;
  padding: 10px;
`
const Time = styled.span`
  fonst-size: 20px;
  font-weight: 400;
`

const Footer = () => {
  const [time, setTime] = useState(moment().format('LTS'))

  setInterval(() => {
    setTime(moment().format('LTS'))
  }, 1000)

  return (
    <Main>
      <p>Language:</p>
      <p>© Copyright gabyperez.dev</p>
      <p>
        Local Time: <Time>{time}</Time>
      </p>
    </Main>
  )
}

export default Footer
