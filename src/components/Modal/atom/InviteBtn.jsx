import styled from 'styled-components';

function InviteBtn() {
  return <InviteButton>초대</InviteButton>;
}

export default InviteBtn;

const InviteButton = styled.button`
  width: 4.166666666666666vw;
  height: 3.148148148148148vh;
  background-color: #4b70e7;
  border: none;
  border-radius: 8px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
