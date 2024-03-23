import styled from 'styled-components';
import { ReactComponent as Circle } from '../../../assets/svgIcon/shape/circleIcon.svg';
import { ReactComponent as Line } from '../../../assets/svgIcon/shape/lineIcon.svg';
import { ReactComponent as Rectangle } from '../../../assets/svgIcon/shape/rectangleIcon.svg';

const ICONS = [
  { id: 'Circle', type: Circle, text: 'Circle' },
  { id: 'Line', type: Line, text: '3D Line' },
  { id: 'Rectangle', type: Rectangle, text: 'Rectangle' },
];

function SvgLargeIcon({ type, onClick }) {
  const Icon = ICONS.find((icon) => icon.id === type);
  if (!Icon) {
    return null;
  }
  const IconComponent = Icon.type;
  return (
    <IconBox onClick={() => onClick(`${type}`)}>
      <IconComponent
        width="4.166666666666666vw"
        height="7.4074074074074066vh"
      />
      {/* <IconText>{Icon.text}</IconText> */}
    </IconBox>
  );
}

export default SvgLargeIcon;
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
// const IconText = styled.p`
//   font-size: 0.6vw;
//   margin-top: 0.3vw;
//   &:hover {
//     color: #4d7df3;
//   }
// `;
