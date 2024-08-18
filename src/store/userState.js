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
export const user = atom({
  key: 'user',
  default: {},
});
