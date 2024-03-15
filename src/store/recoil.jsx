import { atom } from 'recoil';

export const interactiveState = atom({
  key: 'interactiveState',
  default: 0,
});

export const pageState = atom({
  key: 'pagestate',
  default: 0,
});

export const pageData = atom({
  key: 'pageData',
  default: [
    { id: 0, type: '2d' },
    { id: 1, type: '3d' },
    { id: 2, type: '2d' },
    { id: 3, type: '2d' },
  ],
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

export const textList = atom({
  key: 'textList',
  default: {},
});

export const imageList = atom({
  key: 'imageList',
  default: {},
});

export const editState = atom({
  key: 'editState',
  default: false,
});

export const object3dState = atom({
  key: 'object3dState',
  default: {},
});
