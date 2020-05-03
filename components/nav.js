import React, { useContext } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import LanguageContext from './Contexts/Language'

const links = [{ href: 'https://github.com/PichuPerez', label: 'GitHub' }].map(
  (link) => {
    link.key = `nav-link-${link.href}-${link.label}`
    return link
  }
)
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 10px;
`
const Language = styled.div`
  font-size: 16px;
  height: 20px;
  font-weight: 600;
  margin-left: 10px;
  border: 1px solid white;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
`
const LanguageContainer = styled.div`
  display: flex;
`
const Nav = () => {
  const { language, setLanguage } = useContext(LanguageContext)

  return (
    <nav>
      <Main>
        <div>
          <LanguageContainer>
            <Language onClick={() => setLanguage('ESP')}>
              {' '}
              {language === 'ENG' ? 'SPANISH |' : 'ESPAÑOL |'}
            </Language>
            <Language onClick={() => setLanguage('ENG')}>
              {language === 'ENG' ? 'ENGLISH' : 'INGLÉS'}
            </Language>
          </LanguageContainer>
        </div>

        {links.map(({ key, href, label }) => (
          <div key={key}>
            <a href={href} target="_blank">
              {label}
            </a>
          </div>
        ))}
      </Main>

      <style jsx>{`
        :global(body) {
          margin: 0;
          color: purple;
          text-align: center;
          font-family: 'Raleway', sans-serif;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #a299a8;
          text-decoration: none;
          font-size: 15px;
          font-weight: bold;
        }
      `}</style>
    </nav>
  )
}

export default Nav
