import { atom } from 'recoil';

export const itemState = atom({
  key: 'itemState',
  default: 0,
});

export const toolState = atom({
  key: 'toolState',
  default: { toolType: '', state: false },
});

export const textPropertiesState = atom({
  key: 'textPropertiesState',
  default: {
    fontSize: 20,
    color: '#000000',
  },
});

export const objectSizeState = atom({
  key: 'objectSizeState',
  default: {
    size: 0.25,
  },
});
