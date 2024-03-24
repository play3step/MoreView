import styled from 'styled-components';
import useObject from '../../../../hooks/AddItem/useObject';

function ObjectSearch({ menuRef }) {
  const { addObject } = useObject();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      addObject(reader.result);
    };
  };
  return (
    <ItemContainer ref={menuRef}>
      <input type="file" onChange={handleFileChange} accept=".obj" />
    </ItemContainer>
  );
}

export default ObjectSearch;

const ItemContainer = styled.div`
  width: 21.458333333333332vw;
  height: 12.592592592592592vh;
  padding: 1.4583333333333333vw;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.2395833333333335vw;
  background-color: #ffffff;
`;
