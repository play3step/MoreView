import { ReactComponent as Comment } from '../../../assets/svgIcon/commentIcon.svg';
import { ReactComponent as Creation } from '../../../assets/svgIcon/creationIcon.svg';
import { ReactComponent as Image } from '../../../assets/svgIcon/imageIcon.svg';
import { ReactComponent as Note } from '../../../assets/svgIcon/noteIcon.svg';
import { ReactComponent as Play } from '../../../assets/svgIcon/playIcon.svg';
import { ReactComponent as Redo } from '../../../assets/svgIcon/redoIcon.svg';
import { ReactComponent as Shape } from '../../../assets/svgIcon/shapeIcon.svg';
import { ReactComponent as Search } from '../../../assets/svgIcon/search3DIcon.svg';
import { ReactComponent as Text } from '../../../assets/svgIcon/textIcon.svg';
import { ReactComponent as Undo } from '../../../assets/svgIcon/undoIcon.svg';

const ICONS = {
  Comment,
  Creation,
  Image,
  Note,
  Play,
  Redo,
  Shape,
  Search,
  Text,
  Undo,
};

function SvgIcon({ type }) {
  const Icon = ICONS[type];
  if (!Icon) {
    return null;
  }
  return <Icon width="1.875vw" height="3.3333333333333335vh" />;
}

export default SvgIcon;
