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
