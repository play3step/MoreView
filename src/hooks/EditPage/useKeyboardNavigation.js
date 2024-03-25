import { useEffect } from 'react';

const useKeyboardNavigation = (
  isEditing,
  pageRendering,
  pageValue,
  setPageRendering,
  undo,
  redo,
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
      if (e.metaKey || e.ctrlKey) {
        if (e.key === 'z') {
          if (e.shiftKey) {
            undo();
          } else {
            redo();
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyEvent);
    return () => {
      window.removeEventListener('keydown', handleKeyEvent);
    };
  }, [isEditing, pageRendering, undo]);
};

export default useKeyboardNavigation;
