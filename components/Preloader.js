import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import styles from './Preloader.module.css';

export default function Preloader({ onComplete }) {
  const preloaderRef = useRef(null);
  const textRef = useRef(null);
  const logoRef = useRef(null);
  const slideUpRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const logo = logoRef.current;
    const slideUp = slideUpRef.current;
    const preloader = preloaderRef.current;

    // Split text into individual letters
    const letters = text.textContent.split('');
    text.innerHTML = '';
    
    letters.forEach((letter) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.className = styles.letter;
      text.appendChild(span);
    });

    const letterElements = text.querySelectorAll('span');

    // Create GSAP timeline
    const tl = gsap.timeline({
      delay: 1,
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    // Animate logo and letters appearing one by one smoothly
    tl.fromTo(
      logo,
      {
        opacity: 0,
        scale: 0.8
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out'
      }
    );

    tl.fromTo(
      letterElements,
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 0.6,
        stagger: 0.22,
        ease: 'power2.inOut'
      },
      '-=0.3'
    );

    // Hold for a moment
    tl.to({}, { duration: 1.2 });

    // Text and logo expand and move up much faster (finishes well before slider)
    tl.to(
      [text, logo],
      {
        scale: 2,
        y: -500,
        duration: 1.2,
        ease: 'power2.in'
      },
      'slideAnimation'
    );

    // Slide up white section from bottom (slower than text)
    tl.fromTo(
      slideUp,
      {
        yPercent: 100
      },
      {
        yPercent: 0,
        duration: 2.5,
        ease: 'power1.inOut'
      },
      'slideAnimation'
    );

    // Fade out entire preloader after slide completes
    tl.to(preloader, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        preloader.style.display = 'none';
      }
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className={styles.preloader}>
      <div className={styles.content}>
        <div ref={logoRef} className={styles.logoContainer}>
          <Image 
            src="/logo.png" 
            alt="ParkPro Logo" 
            width={80} 
            height={80}
            priority
          />
        </div>
        <h1 ref={textRef} className={styles.text}>
          PARKPRO
        </h1>
      </div>
      <div ref={slideUpRef} className={styles.slideUp}></div>
    </div>
  );
}
