import { useEffect } from 'react';

const useKeyboardNavigation = (
  isEditing,
  pageRendering,
  pageValue,
  setPageRendering,
  undo,
) => {
  useEffect(() => {
    const handleKeyEvent = (e) => {
      if (isEditing) {
        return;
      }
      if (e.key === 'ArrowLeft' && pageRendering > 0) {
        setPageRendering(pageRendering - 1);
      } else if (
        e.key === 'ArrowRight' &&
        pageValue.length - 1 > pageRendering
      ) {
        setPageRendering(pageRendering + 1);
      }
      if (e.metaKey && e.key === 'z') {
        undo();
      }
    };
    window.addEventListener('keydown', handleKeyEvent);
    return () => {
      window.removeEventListener('keydown', handleKeyEvent);
    };
  }, [isEditing, pageRendering, undo]);
};

export default useKeyboardNavigation;
