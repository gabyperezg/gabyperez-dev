import React from 'react'
import styled from 'styled-components'

const Bio = styled.p`
  color: #8b719c;
  margin: 0;
  padding: 80px;
  text-align: center;
`
const BioImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const Intro = () => {
  return (
    <div className="row mt-5">
      <div className="col-md-12 col-lg-6">
        <BioImg src="/bioImage.JPG" alt="my image"></BioImg>
      </div>
      <div className="col-md-12 col-lg-6 justify-content-center">
        <Bio>
          {`I'm a fullstack developer from Mexico 🇲🇽. I had a 5 year long career in the beer🍺 industry as a brewer. My curiosity 🤓 for technology led me to learn how to </code>💻 and i love it. `}
        </Bio>
      </div>
    </div>
  )
}

export default Intro
