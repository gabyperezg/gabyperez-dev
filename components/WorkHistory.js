import React, { useContext } from 'react'
import LanguageContext from '../components/Contexts/Language'
import styled from 'styled-components'

const Experience = styled.div`
  padding-top: 30px;
  font-size: 80px;
  text-align: center;
`
const PrixzLogo = styled.img`
  padding: 10px;
  object-fit: content;
`
const Timeline = styled.div`
  padding-top: 40px;
  height: 130vh;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
  &:after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: purple;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }
  @media screen and (max-width: 600px) {
    &:after {
      left: 31px;
    }
  }
`

/* Container around content */
const Container = styled.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  &:after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -11px;
    background-color: white;
    border: 4px solid purple;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    &:before {
      left: 60px;
      border: medium solid white;
      border-width: 10px 10px 10px 0;
      border-color: transparent white transparent transparent;
    }
  }
`
const LeftContainer = styled(Container)`
  left: -75px;
  &:before {
    content: ' ';
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid white;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent #a299a840;
    @media screen and (max-width: 600px) {
      &:after {
        left: 15px;
      }
    }
  }
`
const RightContainer = styled(Container)`
  left: 50%;
  &:before {
    content: ' ';
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent #a299a840 transparent transparent;
  }
  &:after {
    left: -16px;
  }
  @media screen and (max-width: 600px) {
    left: 0%;
    &:after {
      left: 15px;
    }
  }
`

const Content = styled.div`
  padding: 20px 30px;
  background-color: #a299a840;
  position: relative;
  border-radius: 6px;
`

const ContentText = styled.p`
  font-size: 18px;
`
const LogoPrixz = styled.img`
  height: 40px;
`
const LogoStylindex = styled.img`
  height: 30px;
`
const LogoPrepared = styled.img`
  height: 50px;
`
const ContainerLogoPrepared = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  color: black;
`
const PreparedText = styled.p`
  color: #475568;
  font-size: 25px;
  margin-left: 5px;
  margin-top: 10px;
  font-family: Open Sans, sans-serif;
`
const WorkHistory = () => {
  const { language } = useContext(LanguageContext)
  const title = language === 'ENG' ? 'Experience' : 'Experiencia Laboral'
  const linkText = language === 'ENG' ? 'See Project' : 'Ver Proyecto'
  return (
    <>
      <Experience>{title}</Experience>
      <Timeline>
        <LeftContainer>
          <Content>
            <h2>Front End Developer @ </h2>
            <ContainerLogoPrepared>
              <LogoPrepared src="/preparedLogo.png" />
              <PreparedText> THE PREPARED</PreparedText>
            </ContainerLogoPrepared>
            <ContentText>
              {language === 'ESP' &&
                'Trabajando en React dentro de un sitio en Wordpress. Desarrolle un CMS en React para el análisis de datos de kits. Desarrolle una aplicación para crear y editar kits en React siguiendo los diseños de UI/UX.'}
              {language === 'ENG' &&
                'Working with React embedded in a Wordpress site. Created a CMS in React for kits data analysis. Created the kit builder app in React following the UI/UX style guidelines.'}
            </ContentText>
            <a href="https://theprepared.com/" target="_blank">
              {linkText}
            </a>
          </Content>
        </LeftContainer>
        <RightContainer>
          <Content>
            <h2>Front End Developer @ </h2>
            <LogoStylindex src="/stylindexLogo.svg" />
            <ContentText>
              {language === 'ESP' &&
                'Trabaje con React y Apollo para crear nuevas funcionalidades dentro del sitio y el CMS. Genere un sistema de notificaciones para el cliente. Añadí una funcionalidad de scroll para el contenido visual. Mejoré el diseño visual de la secion de notas.'}
              {language === 'ENG' &&
                'Worked with React and Apollo to create new features within the site and CMS. Created toast notifications. Added a scrollable feature to media content. Improved visual design for artis notes module.'}
            </ContentText>
            <a href="https://stylindex.com/" target="_blank">
              {linkText}
            </a>
          </Content>
        </RightContainer>
        <LeftContainer>
          <Content>
            <h2>Fullstack Developer @ </h2>
            <LogoPrixz src="/logoPrixz.png" />
            <ContentText>
              {language === 'ESP' &&
                'Trabaje con tecnologias como Vue, Node, Express,Hapi, React y Apollo dentro de un e-commerce de productos farmaceuticos. Desarrollé una API en Express para un sistema de envios entre sucursales. Eliminé bugs y estabilicé el modulo de facturación desde el front hasta el back end.'}
              {language === 'ENG' &&
                'Worked with technologies like Vue, Node, Express,Hapi, React and Apollo to support an e-commerce for pharmaceutical products. Created an API for a delivery service between branch offices. Debugged and stabilizeed the invoice module front to back.'}
            </ContentText>
            <a href="http://old.prixz.com/" target="_blank">
              {linkText}
            </a>
          </Content>
        </LeftContainer>
      </Timeline>
    </>
  )
}

export default WorkHistory
