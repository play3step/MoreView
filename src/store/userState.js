import { atom } from 'recoil';

export const userInfo = atom({
  key: 'userInfo',
  default: {
    memberId: '',
    token: '',
    name: '',
    email: '',
  },
});
export const friendList = atom({
  key: 'friendList',
  default: [],
});

export const requestsList = atom({
  key: 'requestsList',
  default: [],
});
