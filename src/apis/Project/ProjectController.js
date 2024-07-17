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

export const postProject = async () => {
  try {
    const response = await basicApi.get(`api/project`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
