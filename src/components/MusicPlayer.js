import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Sincroniza el estado con el audio real
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  // Autoplay tras la primera interacción del usuario
  useEffect(() => {
    const playOnFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play();
      }
      window.removeEventListener('click', playOnFirstInteraction);
      window.removeEventListener('keydown', playOnFirstInteraction);
    };
    window.addEventListener('click', playOnFirstInteraction);
    window.addEventListener('keydown', playOnFirstInteraction);
    return () => {
      window.removeEventListener('click', playOnFirstInteraction);
      window.removeEventListener('keydown', playOnFirstInteraction);
    };
  }, []);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} src="/relaxing-music.mp3" loop />
      <button
        onClick={togglePlayPause}
        className="bg-white/80 border border-primary-dark text-primary-dark rounded-full p-4 shadow-2xl hover:bg-primary transition-colors flex items-center justify-center"
        style={{ boxShadow: '0 4px 24px 0 rgba(80, 60, 160, 0.15)' }}
        aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default MusicPlayer; 