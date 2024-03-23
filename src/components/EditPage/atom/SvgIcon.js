import styled from 'styled-components';
import { ReactComponent as Comment } from '../../../assets/svgIcon/SmallIcon/commentIcon.svg';
import { ReactComponent as Creation } from '../../../assets/svgIcon/SmallIcon/creationIcon.svg';
import { ReactComponent as Image } from '../../../assets/svgIcon/SmallIcon/imageIcon.svg';
import { ReactComponent as Note } from '../../../assets/svgIcon/SmallIcon/noteIcon.svg';
import { ReactComponent as Play } from '../../../assets/svgIcon/SmallIcon/playIcon.svg';
import { ReactComponent as Redo } from '../../../assets/svgIcon/SmallIcon/redoIcon.svg';
import { ReactComponent as Shape } from '../../../assets/svgIcon/SmallIcon/shapeIcon.svg';
import { ReactComponent as Search } from '../../../assets/svgIcon/SmallIcon/search3DIcon.svg';
import { ReactComponent as Text } from '../../../assets/svgIcon/SmallIcon/textIcon.svg';
import { ReactComponent as Undo } from '../../../assets/svgIcon/SmallIcon/undoIcon.svg';

const ICONS = [
  { id: 'Comment', type: Comment, text: 'Comment' },
  { id: 'Creation', type: Creation, text: '3D Creation' },
  { id: 'Image', type: Image, text: 'Image' },
  { id: 'Note', type: Note, text: 'Note' },
  { id: 'Play', type: Play, text: 'Play' },
  { id: 'Redo', type: Redo, text: 'Redo' },
  { id: 'Shape', type: Shape, text: 'Shape' },
  { id: 'Search', type: Search, text: '3D Search' },
  { id: 'Text', type: Text, text: 'Text' },
  { id: 'Undo', type: Undo, text: 'Undo' },
];

function SvgIcon({ type, onClick }) {
  const Icon = ICONS.find((icon) => icon.id === type);

  if (!Icon) {
    return null;
  }
  const IconComponent = Icon.type;
  return (
    <IconBox onClick={onClick}>
      <IconComponent width="1.875vw" height="3.3333333333333335vh" />
      <IconText>{Icon.text}</IconText>
    </IconBox>
  );
}
export default SvgIcon;

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
  &:hover {
    color: #4d7df3;
  }
`;
