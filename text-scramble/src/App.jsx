import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import React from 'react'
import Section from './assets/Section';
import { ScrambleTextPlugin, TextPlugin } from 'gsap/all';

const App = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother,TextPlugin,ScrambleTextPlugin);

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true, 
    })
  }, [])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Section />
        <div className='h-screen'>

        </div>
      </div>
    </div>
  )
}

export default App