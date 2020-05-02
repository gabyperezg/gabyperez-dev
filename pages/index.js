import Link from 'next/link'
import Nav from '../components/nav'
import TypedHeader from '../components/TypedHeader'
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import WorkHistory from '../components/WorkHistory'

const Index = () => (
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Raleway&display=swap"
      rel="stylesheet"
    ></link>
    <Nav />
    <TypedHeader message="Hello World!      " />
    <Intro />
    <Skills />
    <WorkHistory />
  </div>
)

export default Index
