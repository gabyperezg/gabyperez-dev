import React from 'react'
import styled from 'styled-components'
import skillImg from '../pages/'

const MySkills = styled.p`
  padding-top: 80px;
  font-size: 40px;
  text-align: center;
`
const SkillImg = styled.div`
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.img});
`

const Intro = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <SkillImg img="/jessy-smith-zFOm6KzA-7g-unsplash.jpg">
          <MySkills>My Skills</MySkills>
          Photo by Jessy Smith on Unsplash
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1116997/javascript.svg"
            class="js-logo"
            alt="JS Logo"
          ></img>
        </SkillImg>
      </div>
    </div>
  )
}

export default Intro
