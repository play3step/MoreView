import styled from 'styled-components';
import { ReactComponent as Make2DIcon } from '../../../assets/svgIcon/MiddleIcon/make2DIcon.svg';
import { ReactComponent as Make3DIcon } from '../../../assets/svgIcon/MiddleIcon/make3DIcon.svg';

const ICONS = [
  { id: '2D', type: Make2DIcon, text: '2D' },
  { id: '3D', type: Make3DIcon, text: '3D' },
];

function SvgMiddleIcon({ type }) {
  const Icon = ICONS.find((icon) => icon.id === type);
  if (!Icon) {
    return null;
  }
  const IconComponent = Icon.type;
  return (
    <IconBox>
      <IconComponent
        width="3.3333333333333335vw"
        height="5.9259259259259265vh"
      />
      <IconText>{Icon.text}</IconText>
    </IconBox>
  );
}

export default SvgMiddleIcon;
const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    filter: invert(43%) sepia(89%) saturate(3053%) hue-rotate(210deg)
      brightness(102%) contrast(91%);
  }
`;
const IconText = styled.p`
  font-size: 0.6vw;
  margin-top: 0.3vw;
  /* &:hover {
    color: #4d7df3;
  } */
`;
