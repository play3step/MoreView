import basicApi from '..';

export const getProjectList = async (memberId) => {
  try {
    const response = await basicApi.get(`api/project/${memberId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postFile = async (file) => {
  const formData = FormData();
  formData.append('file', file);
  try {
    const response = await basicApi.post(`file`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postProject = async (title, file) => {
  try {
    const data = {
      name: title,
      thumbnailUrl: file,
      memberId: 8,
    };
    const response = await basicApi.post('api/project', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
