import React from 'react';
import Particles from '@/components/Particles';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedWork from '@/components/FeaturedWork';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

import ClickSpark from '@/components/ClickSpark';

const Index = () => {
  return (
    <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={20} sparkCount={10} duration={400}>
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Galaxy Background - Fixed Background Layer */}
        <Particles
          particleCount={300}
          particleSpread={15}
          speed={0.15}
          particleColors={['#ffffff', '#00f2ff', '#7000ff']}
          moveParticlesOnHover={false}
          particleHoverFactor={2}
          alphaParticles={true}
          particleBaseSize={80}
          sizeRandomness={0.5}
          cameraDistance={25}
          className="bg-space-black"
        />

        {/* Foreground Content Layer */}
        <div className="relative z-10">
          <Navigation />
          <main>
            <Hero />
            <FeaturedWork />
            <About />
            <Skills />
            <Contact />
          </main>
        </div>
      </div>
    </ClickSpark>
  );
};

export default Index;