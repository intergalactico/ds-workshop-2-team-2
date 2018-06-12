/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */

import React from 'react'

import { Hero, Navigation, Button, Section, SectionHeader, SectionText } from '../lib/my-awesome-library'

import BroughtToYouBy from './BroughtToYouBy';

const Home = () => {
  return (
    <div>
      <Navigation logo="/assets/dsconf-logo-small.png" fixed>
          <Button href="#">Home</Button>
          <Button href="#">About</Button>
          <Button href="#">Event overview</Button>
      </Navigation>

      <Hero title="A DESIGN SYSTEMS CONFERENCE"
          text="MARCH 14th – 15th, 2018 IN HELSINKI, FINLAND"
          action="Event overview"
          background='/assets/dsconf-wide.jpg'
          onAction={() => console.log("Hello")}/>

      <Section backgroundColor='black'>
        <SectionHeader color='white'>A two-day conference with one day of keynotes & one day of workshops.</SectionHeader>
        <SectionText color='white'>DSCONF aims to bring people together to exchange ideas, solutions, inspiration, and learn how to build digital products better and more efficiently with Design Systems.
  An event for digital product designers, builders, business owners and organizations who want to learn how to build design systems and why they are needed in the future. We are at a crossroads whereby making the right decisions, you will gain a significant business advantage and ensure the best possible user experience for your digital products and services.
  Sounds good? Make sure you familiarize yourself with our code of conduct.</SectionText>
      </Section>

      <BroughtToYouBy />
    </div>
  )
}

export default Home
