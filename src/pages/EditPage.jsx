import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import EditHeader from '../components/EditPage/EditHeader';
import PreviewSlide from '../components/EditPage/PreviewSlide/PreviewSlide';
import Edit2d from '../components/EditPage/PageData/Edit2d';
import { editState, interactiveState } from '../store/recoil';
import ShapeItem from '../components/EditPage/ItemListBox/2D/ShapeItem';
import Edit3d from '../components/EditPage/PageData/Edit3d';
import ImageItem from '../components/EditPage/ItemListBox/2D/ImageItem';
import ObjectSearch from '../components/EditPage/ItemListBox/3D/ObjectSearch';
import useEditorState from '../hooks/EditPage/useEditorState';
import useItemValue from '../hooks/EditPage/useItemValue';
import useImageHandlers from '../hooks/EditPage/Handlers/useImageHandlers';
import useTextHandlers from '../hooks/EditPage/Handlers/useTextHandlers';
import useShapeHandlers from '../hooks/EditPage/Handlers/useShapeHandlers';
import useKeyboardNavigation from '../hooks/EditPage/useKeyboardNavigation';
import useDeleteItem from '../hooks/EditPage/useDeleteItem';
import useHistory from '../hooks/EditPage/Handlers/useHistory';

function EditPage() {
  const {
    selectedId,
    setSelectedId,
    pageRendering,
    setPageRendering,
    pageValue,
    setPageValue,
  } = useEditorState();

  const {
    objectValue,
    shapeValue,
    setShapeValue,
    textValue,
    setTextValue,
    imgValue,
    setImgValue,
  } = useItemValue();

  const isEditing = useRecoilValue(editState);
  const [menu, setMenu] = useRecoilState(interactiveState);
  const menuRef = useRef();

  const fullScreenHandle = useFullScreenHandle();
  const isFullScreen = fullScreenHandle.active;

  const toggleFullScreen = () => {
    fullScreenHandle.enter();
  };

  const checkDeselect = (e) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setSelectedId(null);
    }
  };

  const { handleImgTransform, handleImgDragEnd } = useImageHandlers(
    imgValue,
    setImgValue,
    pageRendering,
  );

  const { handleTextDragEnd, handleTextChange } = useTextHandlers(
    setTextValue,
    pageRendering,
  );

  const addSlide = (type) => {
    setPageValue((oldPageData) => {
      const newId = oldPageData.length > 0 ? oldPageData.length : 0;
      const newPage = { id: newId, type };
      return [...oldPageData, newPage];
    });
  };

  const { handleDragEnd, onLineUpdate } = useShapeHandlers(
    shapeValue,
    pageRendering,
    setShapeValue,
  );

  useDeleteItem(
    isEditing,
    selectedId,
    shapeValue,
    textValue,
    imgValue,
    pageRendering,
    setShapeValue,
    setTextValue,
    setImgValue,
    setSelectedId,
  );

  const { redo, undo } = useHistory(
    shapeValue,
    setShapeValue,
    textValue,
    setTextValue,
    imgValue,
    setImgValue,
  );

  useKeyboardNavigation(
    isEditing,
    pageRendering,
    pageValue,
    setPageRendering,
    redo,
    undo,
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(0);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setMenu, menuRef]);

  return (
    <EditContainer>
      <EditHeader
        pageValue={pageValue[pageRendering]}
        setMenu={setMenu}
        fullScreen={toggleFullScreen}
        redo={redo}
        undo={undo}
      />
      <PreviewSlide
        textValue={textValue}
        shapeValue={shapeValue}
        imgValue={imgValue}
        addSlide={addSlide}
      />
      <CanvasContainer>
        <FullScreen handle={fullScreenHandle}>
          <div
            style={{
              ...(isFullScreen
                ? {
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }
                : {}),
            }}
          >
            {pageValue.map((page) => {
              if (page.id === pageRendering) {
                return page.type === '2d' ? (
                  <Edit2d
                    key={page.id}
                    pageRendering={pageRendering}
                    textValue={textValue}
                    shapeValue={shapeValue}
                    imgValue={imgValue}
                    handleTextChange={handleTextChange}
                    handleDragEnd={handleDragEnd}
                    handleTextDragEnd={handleTextDragEnd}
                    handleImgDragEnd={handleImgDragEnd}
                    checkDeselect={checkDeselect}
                    selectedId={selectedId}
                    selectShape={setSelectedId}
                    onLineUpdate={onLineUpdate}
                    pageSize={0.733}
                    handleImgTransform={handleImgTransform}
                  />
                ) : (
                  <Canvas
                    backgroundColor="#FFFFFF" // 여기에 배경색을 직접 지정합니다.
                    key={page.id}
                    style={{
                      width: '72.91666666666666vw',
                      height: '81.48148148148148vh',
                    }}
                  >
                    <Edit3d objecturl={objectValue[pageRendering]?.[0]} />
                  </Canvas>
                );
              }
              return null;
            })}
          </div>
        </FullScreen>
      </CanvasContainer>
      <ItemListPosition>
        {menu === 1 && <ShapeItem menuRef={menuRef} />}
        {menu === 2 && <ImageItem menuRef={menuRef} />}
        {menu === 3 && <ObjectSearch menuRef={menuRef} />}
      </ItemListPosition>
    </EditContainer>
  );
}

export default EditPage;

const EditContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: absolute;
`;

const CanvasContainer = styled.div`
  position: absolute;
  z-index: 0;
  left: 20.5%;
  top: 14%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const ItemListPosition = styled.div`
  position: absolute;
  left: 40%;
  top: 8%;
`;
