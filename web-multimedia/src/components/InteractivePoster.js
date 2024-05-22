import React, { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

const InteractivePoster = ({ image }) => {
  const pixiContainer = useRef(null);
  const appRef = useRef(null);
  const loader = new PIXI.Loader();

  useEffect(() => {
    // Initialize the PixiJS Application
    const app = new PIXI.Application();
    appRef.current = app;
    // Append the view (canvas) to the DOM
    pixiContainer.current.appendChild(app.view);

    // Function to load the texture
    const loadTexture = (url) => {
      loader.add(url).load(() => {
        const texture = loader.resources[url].texture;
        const sprite = new PIXI.Sprite(texture);
        sprite.interactive = true;
        sprite.buttonMode = true;

        sprite.on('pointerover', () => {
          sprite.scale.set(1.1);
        });
        sprite.on('pointerout', () => {
          sprite.scale.set(1);
        });

        sprite.anchor.set(0.5);
        sprite.x = app.screen.width / 2;
        sprite.y = app.screen.height / 2;

        app.stage.addChild(sprite);
      });
    };

    // Load the image if provided
    if (image) {
      loadTexture(image);
    }

    // Cleanup on unmount
    return () => {
      app.destroy(true, true);
      loader.destroy();
    };
  }, [image]);

  return <div ref={pixiContainer}></div>;
};

export default InteractivePoster;