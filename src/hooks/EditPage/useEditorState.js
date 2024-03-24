import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { pageData, pageState } from '../../store/recoil';

const useEditorState = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [pageRendering, setPageRendering] = useRecoilState(pageState);
  const [pageValue, setPageValue] = useRecoilState(pageData);

  return {
    selectedId,
    setSelectedId,
    pageRendering,
    setPageRendering,
    pageValue,
    setPageValue,
  };
};

export default useEditorState;
