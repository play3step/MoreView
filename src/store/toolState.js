import { atom } from 'recoil';

export const itemState = atom({
  key: 'itemState',
  default: 0,
});

export const toolState = atom({
  key: 'toolState',
  default: { toolType: '', state: false },
});

export const objectSizeState = atom({
  key: 'objectSizeState',
  default: {
    size: 0.25,
    light: 5,
  },
});

export const meshyLoadingState = atom({
  key: 'meshyLodingState',
  default: false,
});
