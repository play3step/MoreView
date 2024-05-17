import { atom } from 'recoil';

export const LodingState = atom({
  key: 'LodingState',
  default: false,
});

export const CreateModalState = atom({
  key: 'CreateModalState',
  default: false,
});

export const SearchModalState = atom({
  key: 'SearchModalState',
  default: false,
});
