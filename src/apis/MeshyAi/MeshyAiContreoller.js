import axios from 'axios';

export const postTextCreate = async (text) => {
  try {
    const response = await axios.post(
      'http://localhost:8000/meshy/text-to-3d',
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

export const postImgCreate = async (text) => {
  try {
    const response = await axios.post('http://localhost:8000/api/text-to-3d', {
      prompt: text,
    });
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
