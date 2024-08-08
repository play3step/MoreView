import basicApi from '..';

// 친구 목록
export const getFriends = async (memberId, page = 0, size = 3) => {
  try {
    const response = await basicApi.get(`api/friends/${memberId}`, {
      params: {
        page,
        size,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 요청받은 목록
export const requestedFriend = async (memberId, page = 0, size = 3) => {
  try {
    const response = await basicApi.get(`api/friend/requested/${memberId}`, {
      params: {
        page,
        size,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 수락
export const acceptFriend = async (memberId, friendEmail) => {
  const data = {
    memberId,
    friendEmail,
  };
  try {
    const response = await basicApi.post(`api/friend/accept`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 거절
export const rejectFriend = async (memberId, friendEmail) => {
  const data = {
    memberId,
    friendEmail,
  };
  try {
    const response = await basicApi.post(`api/friend/reject`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
