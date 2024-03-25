import FriendBox from '../components/myPage/FriendBox';
import GltfLoader from '../components/myPage/GltfLoader';
// import Load3dObject from '../components/myPage/Load3dObject';
import AddProject from '../components/myPage/atom/AddProject';

function MyPage() {
  return (
    <div
      style={{
        flexDirection: 'column',
      }}
    >
      {/* <Load3dObject /> */}
      <GltfLoader />

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
