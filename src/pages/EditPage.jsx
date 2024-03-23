import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import EditHeader from '../components/EditPage/EditHeader';
import PreviewSlide from '../components/EditPage/PreviewSlide/PreviewSlide';
import Edit2d from '../components/EditPage/PageData/Edit2d';
import {
  editState,
  imageList,
  pageData,
  pageState,
  shapeList,
  textList,
} from '../store/recoil';
import ShapeItem from '../components/EditPage/ItemListBox/ShapeItem';

function EditPage() {
  const [selectedId, selectShape] = useState(null);
  const [pageRendering, setPageRendering] = useRecoilState(pageState);

  const [pageValue, setPageValue] = useRecoilState(pageData);

  const [shapeValue, setShapeValue] = useRecoilState(shapeList);
  const [textValue, setTextValue] = useRecoilState(textList);
  const [imgValue, setImgValue] = useRecoilState(imageList);
  const isEditing = useRecoilValue(editState);

  const checkDeselect = (e) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };
  const handleDragEnd = (shapeId, newAttrs) => {
    const currentPageShapes = shapeValue[pageRendering]
      ? [...shapeValue[pageRendering]]
      : [];
    const updatedShapes = currentPageShapes.map((shape) => {
      if (shape.id === shapeId) {
        return { ...shape, ...newAttrs };
      }
      return shape;
    });
    setShapeValue({ ...shapeValue, [pageRendering]: updatedShapes });
  };
  const handleImgTransform = (id, newAttrs) => {
    const updatedImgValue = imgValue[pageRendering].map((img) => {
      if (img.id === id) {
        return { ...img, ...newAttrs };
      }
      return img;
    });

    setImgValue({
      ...imgValue,
      [pageRendering]: updatedImgValue,
    });
  };
  const handleTextDragEnd = (textId, newAttrs) => {
    setTextValue((prevTextValue) => ({
      ...prevTextValue,
      [pageRendering]: prevTextValue[pageRendering].map((item) =>
        item.id === textId ? { ...item, ...newAttrs } : item,
      ),
    }));
  };
  const handleTextChange = (textId, newText) => {
    setTextValue((prevTextValue) => ({
      ...prevTextValue,
      [pageRendering]: prevTextValue[pageRendering].map((item) =>
        item.id === textId ? { ...item, text: newText } : item,
      ),
    }));
  };

  const handleImgDragEnd = (imageId, newImage) => {
    setImgValue((prevImgValue) => ({
      ...prevImgValue,
      [pageRendering]: prevImgValue[pageRendering].map((item) =>
        item.id === imageId ? { ...item, ...newImage } : item,
      ),
    }));
  };
  const addSlide = (type) => {
    setPageValue((oldPageData) => {
      const newId = oldPageData.length > 0 ? oldPageData.length : 0;
      const newPage = { id: newId, type };
      return [...oldPageData, newPage];
    });
  };

  const onLineUpdate = (shapeId, newPoints) => {
    const currentPageShapes = Array.isArray(shapeValue[pageRendering])
      ? shapeValue[pageRendering]
      : [];

    const updatedShapes = currentPageShapes.map((shape) => {
      if (shape.id === shapeId) {
        return { ...shape, points: newPoints };
      }
      return shape;
    });

    setShapeValue({ ...shapeValue, [pageRendering]: updatedShapes });
  };

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
    };
    window.addEventListener('keydown', handleKeyEvent);
    return () => {
      window.removeEventListener('keydown', handleKeyEvent);
    };
  }, [isEditing, pageRendering]);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        !isEditing &&
        (e.key === 'Backspace' || e.key === 'Delete') &&
        selectedId
      ) {
        e.preventDefault();

        const deleteObject = (prev, id) => {
          const currentPageObjects = prev[pageRendering] || [];
          const filteredObjects = currentPageObjects.filter(
            (object) => object.id !== id,
          );
          return { ...prev, [pageRendering]: filteredObjects };
        };

        if (
          shapeValue[pageRendering]?.some((object) => object.id === selectedId)
        ) {
          setShapeValue((prev) => deleteObject(prev, selectedId));
        } else if (
          textValue[pageRendering]?.some((object) => object.id === selectedId)
        ) {
          setTextValue((prev) => deleteObject(prev, selectedId));
        } else if (
          imgValue[pageRendering]?.some((object) => object.id === selectedId)
        ) {
          setImgValue((prev) => deleteObject(prev, selectedId));
        }

        selectShape(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    isEditing,
    selectedId,
    shapeValue,
    textValue,
    imgValue,
    pageRendering,
    setShapeValue,
    setTextValue,
    setImgValue,
    selectShape,
  ]);
  return (
    <EditContainer>
      <EditHeader />
      <PreviewSlide
        textValue={textValue}
        shapeValue={shapeValue}
        imgValue={imgValue}
        addSlide={addSlide}
      />
      <CanvasContainer>
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
                selectShape={selectShape}
                onLineUpdate={onLineUpdate}
                pageSize={0.733}
                handleImgTransform={handleImgTransform}
              />
            ) : null;
          }
          return null;
        })}
      </CanvasContainer>
      <ItemListPosition>
        <ShapeItem />
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
