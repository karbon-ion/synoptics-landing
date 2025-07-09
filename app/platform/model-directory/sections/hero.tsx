'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react';

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(1024);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section style={{
      position: 'relative',
      paddingTop: windowWidth < 640 ? '40px' : windowWidth < 768 ? '64px' : windowWidth < 1024 ? '80px' : '96px',
      paddingBottom: windowWidth < 640 ? '40px' : windowWidth < 768 ? '64px' : windowWidth < 1024 ? '80px' : '96px',
      overflow: 'hidden'
    }}>
      <Image
        src="/model-hub/bg.png"
        alt="Background"
        fill
        className="object-cover z-0"
        quality={100}
      />
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10,
        padding: windowWidth < 1024 ? '0 24px' : '0 32px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: windowWidth < 768 ? 'column' : 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: windowWidth < 1024 ? '40px' : '64px'
        }}>
          <div style={{
            width: windowWidth < 768 ? '100%' : '41.666667%',
            paddingTop: windowWidth < 768 ? '32px' : '64px',
            paddingLeft: windowWidth < 768 ? '0' : '64px'
          }}>
            <h1 style={{
              fontFamily: 'Syne',
              fontWeight: 700,
              fontSize: windowWidth < 640 ? '32px' : windowWidth < 768 ? '36px' : windowWidth < 1024 ? '42px' : '48px',
              lineHeight: windowWidth < 768 ? '1.3' : '66px',
              letterSpacing: '0%',
              color: '#323E50',
              marginBottom: '1rem',
              overflow: 'visible',
              width: windowWidth < 768 ? '100%' : '150%',
              position: 'relative',
              zIndex: 20
            }}>
              Find the Best Model for {windowWidth < 640 ? ' ' : <br />}
              Each Enterprise Task
            </h1>
            <p style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: windowWidth < 640 ? '14px' : '16px',
              lineHeight: windowWidth < 640 ? '24px' : '30px',
              letterSpacing: '2%',
              color: '#323E50',
              marginBottom: windowWidth < 640 ? '1.5rem' : '2rem',
              maxWidth: windowWidth < 768 ? '100%' : '90%'
            }}>
             Deploy top-performing LLMs from Azure Open AI, Google Vertex, xAI, and Deepseek within a secure enterprise environment. 
            </p>
            <Link href="/contact-us" style={{
              backgroundColor: '#5662F6',
              color: 'white',
              fontWeight: 500,
              padding: windowWidth < 640 ? '8px 16px' : '12px 24px',
              borderRadius: '9999px',
              display: 'inline-flex',
              alignItems: 'center',
              fontSize: windowWidth < 640 ? '14px' : '16px',
              transition: 'background-color 0.3s'
            }}>
              Get a Demo
            </Link>
          </div>
          <div style={{
            width: windowWidth < 768 ? '100%' : '58.333333%',
            display: 'flex',
            justifyContent: windowWidth < 768 ? 'center' : 'flex-end',
            marginTop: windowWidth < 768 ? '32px' : '0'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              justifyContent: windowWidth < 768 ? 'center' : 'flex-end'
            }}>
              <Image
                src="/model-hub/hero-img.png"
                alt="Model Hub Hero"
                width={800}
                height={600}
                style={{ 
                  objectFit: 'contain',
                  marginTop: '1rem',
                  marginBottom: '-2rem',
                  width: '100%',
                  maxWidth: windowWidth < 640 ? '90%' : windowWidth < 768 ? '80%' : '100%'
                }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
