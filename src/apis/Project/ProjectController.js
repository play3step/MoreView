import basicApi from '..';

export const getProjectList = async (memberId, page = 0) => {
  try {
    const response = await basicApi.get(`api/project/member/${memberId}`, {
      params: {
        page,
      },
    });

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

export const postProject = async (title, memberId) => {
  try {
    const data = {
      name: title,
      thumbnailUrl: '111',
      memberId,
    };
    const response = await basicApi.post('api/project', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    getProjectList(1);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
