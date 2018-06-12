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
        <BroughtToYouBy />
    </div>
  )
}

export default Home
