import { atom } from 'recoil';

const initialImgUrl = [
  { url: '/logoImg/logo1.png' },
  { url: '/logoImg/logo2.png' },
  { url: '/logoImg/logo3.png' },
  { url: '/logoImg/logo4.png' },
];

export const imageState = atom({
  key: 'imageState',
  default: initialImgUrl,
});

export const objectState = atom({
  key: 'objectState',
  default: {},
});
