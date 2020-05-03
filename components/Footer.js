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
const Language = styled.div`
  font-size: 16px;
  height: 20px;
  font-weight: 600;
  margin-left: 10px;
  border: 1px solid white;
  border-radius: 4px;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`
const LanguageContainer = styled.div`
  display: flex;
  margin-top: 10px;
`
const Footer = () => {
  const [time, setTime] = useState(moment().format('LTS'))
  const { language, setLanguage } = useContext(LanguageContext)
  setInterval(() => {
    setTime(moment().format('LTS'))
  }, 1000)

  return (
    <Main>
      <LanguageContainer>
        <Language onClick={() => setLanguage('ESP')}>
          {' '}
          {language === 'ENG' ? 'SPANISH' : 'ESPAÑOL'}
        </Language>
        <Language onClick={() => setLanguage('ENG')}>
          {language === 'ENG' ? 'ENGLISH' : 'INGLÉS'}
        </Language>
      </LanguageContainer>
      <p>© Copyright gabyperez.dev</p>
      <p>
        {language === 'ENG' ? 'Local time:' : 'Hora Local:'} <Time>{time}</Time>
      </p>
    </Main>
  )
}

export default Footer
