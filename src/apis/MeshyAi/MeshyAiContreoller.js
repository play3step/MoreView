import axios from 'axios';

export const postTextCreate = async (text) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/meshy/text-to-3d`,
      {
        prompt: text,
        userId: 1,
      },
    );
    return response.data.result;
  } catch (error) {
    console.error('Error creating 3D model:', error);
    throw error;
  }
};

export const postImgCreate = async (imgUrl) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/meshy/image-to-3d`,
      {
        imgUrl,
        userId: 1,
      },
    );
    return response.data.result;
  } catch (error) {
    console.error('Error creating 3D model:', error);
    throw error;
  }
};

export const getMeshList = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/meshy/objects/1`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching mesh list:', error);
    throw error;
  }
};

export const uploadImg = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};
