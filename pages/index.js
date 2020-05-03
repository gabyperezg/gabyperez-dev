import Link from 'next/link'
import React, { useState } from 'react'
import Nav from '../components/nav'
import TypedHeader from '../components/TypedHeader'
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import WorkHistory from '../components/WorkHistory'
import Footer from '../components/Footer'
import LanguageContext from '../components/Contexts/Language'
import ThemeContext from '../components/Contexts/Theme'

const Index = () => {
  const [language, setLanguage] = useState('ENG')

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Raleway&display=swap"
        rel="stylesheet"
      />
      <ThemeContext.Provider>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <Nav />
          <TypedHeader message="Hello World!" />
          <Intro />
          <Skills />
          <WorkHistory />
          <Footer />
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

export default Index
