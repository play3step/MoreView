import { useEffect } from 'react';

const useKeyDown = (movement, modelRef) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'w':
          movement.current.forward = 1;
          break;
        case 's':
          movement.current.forward = -1;
          break;
        case 'a':
          movement.current.right = 1;
          break;
        case 'd':
          movement.current.right = -1;
          break;
        case 'Shift':
          movement.current.up = -1;
          break;
        case 'Control':
          movement.current.up = 1;
          break;
        case 'r':
          if (modelRef.current) {
            modelRef.current.position.set(0, 0, -1);
          }
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (event) => {
      switch (event.key) {
        case 'w':
        case 's':
          movement.current.forward = 0;
          break;
        case 'a':
        case 'd':
          movement.current.right = 0;
          break;
        case 'Shift':
        case 'Control':
          movement.current.up = 0;
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
};

export default useKeyDown;
