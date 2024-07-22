import basicApi from '../index';

export const loginController = async (email, password) => {
  try {
    const response = await basicApi.post(
      'api/login',
      {
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const signUp = async () => {
  try {
    const response = await basicApi.get(`/api/sign-in`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const userData = async () => {
  try {
    const response = await basicApi.get('/get');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
