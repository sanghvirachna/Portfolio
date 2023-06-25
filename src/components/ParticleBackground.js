import Moon from '../assets/moon.png';
import React, { useCallback, useEffect, useState } from 'react';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleBackground = () => {
  const [moonLoaded, setMoonLoaded] = useState(false);

  useEffect(() => {
    const moonImage = new Image();
    moonImage.src = Moon;
    moonImage.onload = () => {
      setMoonLoaded(true);
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    // Load the full tsparticles package bundle
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Access the container when particles are loaded (optional)
    console.log(container);
  }, []);

  return (
    <div style={{ position: 'absolute', width: '100%' }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#1b212b',
            },
          },
          fpsLimit: 120,
          interactivity: {
            // interactivity options...
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              enable: false,
            },
            collisions: {
              enable: true,
            },
            move: {
              enable: false, // Enable particle movement
              speed: 2, // Adjust the speed as needed
            },
            number: {
              value:350,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: ['circle', 'star'],
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
      {moonLoaded && (
        <img
          src={Moon} // Replace with the path to your moon image
          alt="Moon"
          style={{
            position: 'absolute',
            top: '-200px', // Start position above the screen
            right: '20%', // Adjust the position of the moon image
            width: '200px', // Adjust the size of the moon image
            height: '200px', // Adjust the size of the moon image
            zIndex: 1,
            opacity:0.6,
            transition: 'top 1s ease', // Transition animation
          }}
          onLoad={() => {
            // Animate the moon sliding into position
            setTimeout(() => {
              document.getElementById('moon').style.top = '100px'; // Adjust the final position of the moon image
            }, 100);
          }}
          id="moon"
        />
      )}
    </div>
  );
};

export default ParticleBackground;
