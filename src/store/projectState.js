import { atom } from 'recoil';

export const ProjectList = atom({
  key: 'ProjectList',
  default: [],
});

export const ProjectState = atom({
  key: 'ProjectState',
  default: {},
});
