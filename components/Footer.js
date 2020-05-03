import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import LanguageContext from './Contexts/Language'

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  background-color: #2e012e;
  padding: 10px;
`
const Time = styled.span`
  font-size: 20px;
  font-weight: 600;
`

const Footer = () => {
  const [time, setTime] = useState(moment().format('LTS'))
  const { language } = useContext(LanguageContext)

  setInterval(() => {
    setTime(moment().format('LTS'))
  }, 1000)

  return (
    <Main>
      <p>© Copyright gabyperez.dev</p>
      <p>
        {language === 'ENG' ? 'Local time:' : 'Hora Local:'} <Time>{time}</Time>
      </p>
    </Main>
  )
}

export default Footer
