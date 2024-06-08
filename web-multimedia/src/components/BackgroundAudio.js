import React, { useEffect } from 'react';

const BackgroundAudio = () => {
  useEffect(() => {
    const audio = new Audio('/videos/Interstellar Main Theme  Hans Zimmer.mp3');
    audio.loop = true;
    
    const playAudio = () => {
      if (audio.readyState >= 2) {
        audio.play().catch(error => {
          console.error('Failed to play audio:', error);
        });
      } else {
        audio.addEventListener('canplaythrough', () => {
          audio.play().catch(error => {
            console.error('Failed to play audio:', error);
          });
        });
      }
    };

    playAudio();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return null; // No need to render anything for this component
};

export default BackgroundAudio;