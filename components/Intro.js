import React from 'react'
import styled from 'styled-components'

const Bio = styled.p`
  color: #8b719c;
  margin: 0;
  padding: 40px;
  text-align: center;
  font-size: 26px;
`

const Parallax = styled.div`
  background-image: url('bioImage.JPG');
  min-height: 600px;
  margin-top: -10px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const ReactIcon = styled.img`
  height: 30px;
  width: 45px;
  margin-bottom: -5px;
`
const Intro = () => {
  return (
    <>
      <Parallax />
      <Bio>
        {`I'm a fullstack developer from Mexico 🇲🇽. I had a 5 year long career in the beer 🍺 industry as a brewer. My curiosity  🤓  for technology led me to learn how to <Code/>  💻 and i love it  ❤️. I've been working full time as a developer since 2019, always in a remote position. I like working in the front end and back end but lately i've been working as a Front End Developer with React`}
        <ReactIcon src="/512px-React-icon.svg.png" />.
      </Bio>
    </>
  )
}

export default Intro
