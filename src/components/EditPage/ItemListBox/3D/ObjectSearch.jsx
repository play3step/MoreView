import React from 'react';
import styled from 'styled-components';
import useObject from '../../../../hooks/AddItem/useObject';

function updateGltfReferences(gltfContent, urls, textures) {
  const gltfJson = JSON.parse(gltfContent);

  if (gltfJson.buffers) {
    gltfJson.buffers.forEach((buffer) => {
      if (buffer.uri && urls.bin) {
        buffer.uri = urls.bin;
      }
    });
  }

  if (gltfJson.images) {
    gltfJson.images.forEach((image) => {
      const imageName = image.uri.split('/').pop();
      if (textures[imageName]) {
        image.uri = textures[imageName];
      }
    });
  }

  const updatedGltfContent = JSON.stringify(gltfJson);
  const gltfBlob = new Blob([updatedGltfContent], { type: 'model/gltf+json' });
  return URL.createObjectURL(gltfBlob);
}
function ObjectSearch({ menuRef }) {
  const { addObject } = useObject();

  const handleFileChange = async (event) => {
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
      urls: {},
      textures: {},
    };

    // 이미지 파일을 별도로 처리하기 위해 임시 저장소 준비
    const tempTextureFiles = [];

    const fileReadPromises = Array.from(files).map((file) => {
      const fileName = file.name;
      const extension = fileName.split('.').pop().toLowerCase();
      return new Promise((resolve, reject) => {
        if (
          extension === 'obj' ||
          extension === 'mtl' ||
          extension === 'bin' ||
          extension === 'gltf'
        ) {
          if (extension === 'obj' || extension === 'gltf') {
            filesData.type = extension;
          }
          const blobUrl = URL.createObjectURL(file);
          filesData.urls[extension] = blobUrl;
          filesData[extension] = blobUrl;

          if (extension === 'gltf') {
            // GLTF 파일의 경우 내용을 읽어서 나중에 처리
            const reader = new FileReader();
            reader.onload = (e) => {
              filesData.gltfContent = e.target.result;
              resolve();
            };
            reader.onerror = reject;
            reader.readAsText(file);
          } else {
            resolve();
          }
        } else if (['jpeg', 'jpg', 'png'].includes(extension)) {
          // 텍스처 이미지 파일 처리
          tempTextureFiles.push(file);
          resolve();
        } else {
          resolve();
        }
      });
    });

    await Promise.all(fileReadPromises);

    // 이미지 파일들에 대한 Blob URL 생성 및 저장
    tempTextureFiles.forEach((file) => {
      const blobUrl = URL.createObjectURL(file);
      filesData.textures[file.name] = blobUrl;
    });

    // GLTF 파일 내 참조 업데이트 로직 호출
    if (filesData.gltfContent) {
      const updatedGltfBlobUrl = updateGltfReferences(
        filesData.gltfContent,
        filesData.urls,
        filesData.textures,
      );
      filesData.urls.gltf = updatedGltfBlobUrl; // 업데이트된 GLTF Blob URL 사용
    }

    addObject(
      filesData.obj,
      filesData.mtl,
      filesData.bin,
      filesData.urls.gltf,
      filesData.type,
      filesData.urls,
    );
  };

  return (
    <ItemContainer ref={menuRef}>
      <input
        type="file"
        onChange={handleFileChange}
        multiple
        accept=".gltf,.bin,.obj,.mtl,.jpeg,.jpg,.png"
      />
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
