import { Navbar } from "./components/Navbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile-container">
        <h1>Profile</h1>
        <div>
          <strong>Nama:</strong> Dimas Bimo Prasetyo
        </div>
        <div>
          <strong>Kelas:</strong> 12 RPL
        </div>
        <div>
          <strong>Sekolah:</strong> SMK TUNAS BANGSA
        </div>
        <div>
          <strong>Hobi:</strong> Balapan, Bermain Game, Memancing
        </div>
      </div>
    </>
  );
};

export default Profile;