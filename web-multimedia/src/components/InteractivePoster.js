import React, { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

const InteractivePoster = ({ image }) => {
  const pixiContainerRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    if (!pixiContainerRef.current) return;

    console.log('Creating PIXI application');

    try {
      // Create PIXI application
      appRef.current = new PIXI.Application({
        view: pixiContainerRef.current,
        width: 300, // Set width as needed
        height: 450, // Set height as needed
        backgroundColor: 0x1099bb, // Set background color here
      });

      console.log('PIXI Application created:', appRef.current);

      if (!image) {
        console.error('No image provided');
        return;
      }

      console.log('Creating texture and sprite');

      const texture = PIXI.Texture.from(image);
      console.log('Texture created:', texture);

      const sprite = new PIXI.Sprite(texture);
      console.log('Sprite created:', sprite);

      // Set sprite properties
      sprite.width = appRef.current.screen.width;
      sprite.height = appRef.current.screen.height;

      // Add sprite to the PIXI application stage
      appRef.current.stage.addChild(sprite);

      console.log('PIXI application created');

      // Cleanup function to destroy PIXI application when component unmounts
      return () => {
        console.log('Destroying PIXI application');
        appRef.current.destroy(true, { children: true });
      };
    } catch (error) {
      console.error('Error creating PIXI application:', error);
    }
  }, [image]);

  return <div ref={pixiContainerRef}></div>;
};

export default InteractivePoster;
