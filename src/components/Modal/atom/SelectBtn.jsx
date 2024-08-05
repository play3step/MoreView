import styled from 'styled-components';

function SelectBtn({ text, onClick }) {
  return (
    <SelectButton onClick={onClick} text={text}>
      {text}
    </SelectButton>
  );
}

export default SelectBtn;

const SelectButton = styled.button`
  width: 13.85vw;
  height: 5.37vh;
  border-radius: 8px;
  color: ${(props) =>
    props.text === 'Text' || props.text === '생성하기' ? 'white' : 'black'};
  border: ${(props) =>
    props.text === 'Text' || props.text === '생성하기'
      ? 'none'
      : '1px solid #E3E8F0'};
  background-color: ${(props) =>
    props.text === 'Text' || props.text === '생성하기' ? '#4B70E7' : '#FFFFFF'};
`;
