/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */

import React from 'react'
import ReactDOM from 'react-dom'

import { Hero, Icon, Section, SectionHeader, SectionText, Color } from '../lib/my-awesome-library'

const st = Section.SectionTypography

const Home = () => {
  return (
    <div>
        <Hero title="A DESIGN SYSTEMS CONFERENCE"
            text="MARCH 14th – 15th, 2018 IN HELSINKI, FINLAND"
            action="Event overview"
            background='/assets/dsconf-wide.jpg'
            onAction={() => console.log("Hello")}/>
      <div>
        <Section>
          <SectionHeader>Hello!</SectionHeader>
          <SectionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</SectionText>
        </Section>
      </div>
    </div>
  )
}

export default Home
