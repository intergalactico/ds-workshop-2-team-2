/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */

import React from 'react'

import { Hero, Navigation, Button } from '../lib/my-awesome-library'

import BroughtToYouBy from './BroughtToYouBy';

const Home = () => {
  return (
    <div>
        <Navigation logo="/assets/dsconf-logo-small.png">
            <Button href="#">Hello 1</Button>
            <Button href="#">Hello 2</Button>
            <Button href="#">Hello 3</Button>
        </Navigation>
        <Hero title="A DESIGN SYSTEMS CONFERENCE"
            text="MARCH 14th – 15th, 2018 IN HELSINKI, FINLAND"
            action="Event overview"
            background='/assets/dsconf-wide.jpg'
            onAction={() => console.log("Hello")}/>
      <div>
      <div>
        <Section backgroundColor='black'>
          <SectionHeader color='white'>A two-day conference with one day of keynotes & one day of workshops.</SectionHeader>
          <SectionText color='white'>DSCONF aims to bring people together to exchange ideas, solutions, inspiration, and learn how to build digital products better and more efficiently with Design Systems.
An event for digital product designers, builders, business owners and organizations who want to learn how to build design systems and why they are needed in the future. We are at a crossroads whereby making the right decisions, you will gain a significant business advantage and ensure the best possible user experience for your digital products and services.
Sounds good? Make sure you familiarize yourself with our code of conduct.</SectionText>
        </Section>
      </div>
        <Section>
          <SectionHeader>Hello!</SectionHeader>
          <SectionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</SectionText>
        </Section>
        <BroughtToYouBy />
    </div>
  )
}

export default Home
