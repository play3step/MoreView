import styled from 'styled-components';
import useObject from '../../../../hooks/AddItem/useObject';

function ObjectSearch({ menuRef }) {
  const { addObject } = useObject();

  const handleFileChange = (event) => {
    const { files } = event.target;
    if (!files) {
      return;
    }

    const filesData = {
      obj: null,
      mtl: null,
      bin: null,
      gltf: null,
      type: null,
    };

    const fileReadPromises = Array.from(files).map(
      (file) =>
        new Promise((resolve, reject) => {
          const fileName = file.name;
          const extension = fileName.split('.').pop().toLowerCase();
          const reader = new FileReader();

          reader.onload = () => {
            if (
              extension === 'obj' ||
              extension === 'mtl' ||
              extension === 'bin' ||
              extension === 'gltf'
            ) {
              if (extension === 'obj' || extension === 'gltf') {
                filesData.type = extension;
              }
              filesData[extension] = reader.result;
            }
            resolve();
          };

          reader.onerror = reject;

          reader.readAsDataURL(file);
        }),
    );

    Promise.all(fileReadPromises)
      .then(() => {
        addObject(
          filesData.obj,
          filesData.mtl,
          filesData.bin,
          filesData.gltf,
          filesData.type,
        );
      })
      .catch((error) => {
        console.error('Error reading files: ', error);
      });
  };

  return (
    <ItemContainer ref={menuRef}>
      <input type="file" onChange={handleFileChange} multiple />
    </ItemContainer>
  );
}

export default ObjectSearch;

const ItemContainer = styled.div`
  width: 21.458333333333332vw;
  height: 12.592592592592592vh;
  padding: 1.4583333333333333vw;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.2395833333333335vw;
  background-color: #ffffff;
`;
