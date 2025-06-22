import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, id, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id={id} className={`${className} ${inView ? 'fade-in-section' : 'opacity-0'}`}>
      {children}
    </section>
  );
};

export default AnimatedSection; 