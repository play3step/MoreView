import { atom } from 'recoil';

export const interactiveState = atom({
  key: 'interactiveState',
  default: 0,
});

export const pageState = atom({
  key: 'pagestate',
  default: 0,
});

export const shapeList = atom({
  key: 'shapeList',
  default: {},
});

export const userState = atom({
  key: 'userState',
  default: { username: '', email: '' },
});

export const isLoggedInState = atom({
  key: 'isLoggedInState',
  default: false,
});
