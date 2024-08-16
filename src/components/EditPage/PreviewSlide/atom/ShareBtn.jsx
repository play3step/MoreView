import styled from 'styled-components';

function ShareBtn({ setShareModal }) {
  return <ShareButton onClick={() => setShareModal(true)}>Share</ShareButton>;
}

export default ShareBtn;

const ShareButton = styled.button`
  width: 5.3125vw;
  height: 4.62962962962963vh;
  background-color: #e2eef8;
  color: #4d7df3;
  border: 1px solid;
  border-radius: 12px;
`;
