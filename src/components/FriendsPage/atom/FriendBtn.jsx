import styled from 'styled-components';

function FriendBtn({ text, onClick }) {
  return (
    <FriendButton onClick={onClick} text={text}>
      {text}
    </FriendButton>
  );
}

export default FriendBtn;
const FriendButton = styled.button`
  width: 4.375vw;
  height: 3.888888888888889vh;
  background-color: ${(props) => (props.text === 'Accept' ? 'black' : 'white')};
  color: ${(props) => (props.text === 'Accept' ? 'white' : 'black')};
  border: black 1px solid;
  border-radius: 4px;
  cursor: pointer;
`;
