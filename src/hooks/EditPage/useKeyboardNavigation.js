import { useEffect } from 'react';

function useKeyboardNavigation(
  pageRendering,
  setPageRendering,
  pageValueLength,
  isEditing,
) {
  useEffect(() => {
    function handleKeyEvent(e) {
      if (isEditing) {
        return;
      }
      if (e.key === 'ArrowLeft' && pageRendering > 0) {
        setPageRendering(pageRendering - 1);
      } else if (
        e.key === 'ArrowRight' &&
        pageRendering < pageValueLength - 1
      ) {
        setPageRendering(pageRendering + 1);
      }
    }

    window.addEventListener('keydown', handleKeyEvent);
    return () => {
      window.removeEventListener('keydown', handleKeyEvent);
    };
  }, [pageRendering, setPageRendering, pageValueLength, isEditing]);
}

export default useKeyboardNavigation;
