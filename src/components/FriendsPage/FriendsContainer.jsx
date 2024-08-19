import styled from 'styled-components';
import FriendBox from './FriendItem';

function FriendsContainer({ friendList }) {
  return (
    <RequestContainer>
      <p>Friends</p>
      {friendList?.map((data, index) => (
        <FriendBox data={data} key={index} />
      ))}
    </RequestContainer>
  );
}

export default FriendsContainer;

const RequestContainer = styled.div`
  width: 100%;
  height: 32.4vh;
  display: flex;
  flex-direction: column;
  gap: 2.22vh;
`;
