import { atom } from 'recoil';

export const itemState = atom({
  key: 'itemState',
  default: 0,
});

export const toolState = atom({
  key: 'toolState',
  default: { toolType: '', state: false },
});
