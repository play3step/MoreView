import FriendBox from '../components/myPage/FriendBox';
import TestObject from '../components/myPage/TestObject';

import AddProject from '../components/myPage/atom/AddProject';

function MyPage() {
  return (
    <div
      style={{
        flexDirection: 'column',
      }}
    >
      <TestObject />
      <div
        style={{
          display: 'flex',
          marginLeft: '6.25vw',
          marginTop: '3.2407407407407405vh',
        }}
      >
        <AddProject />
        <FriendBox />
      </div>
    </div>
  );
}

export default MyPage;
