import React from "react";
import "./index.css";
const profileData = [
  {
    nama: "Samuel Arya Permana",
    nim: "21120121130050",
    fotoUrl:"https://avatars.githubusercontent.com/u/116475964?v=4"
      
  },
  {
    nama: "zidane romandhon putra ",
    nim: "21120121140115",
    fotoUrl:"https://avatars.githubusercontent.com/u/116475964?v=4"  
  },
  {
    nama: "Rafly an nindra fitrah pratama",
    nim: "21120121120002",
    fotoUrl:"https://avatars.githubusercontent.com/u/116475964?v=4"  
  },
  {
    nama: "Siti Isyaroh",
    nim: "21120121120007",
    fotoUrl:"https://avatars.githubusercontent.com/u/116475964?v=4"  
  },
];

function ProfilePage() {
  return (
    <div>
      <h1>Profil</h1>
      <div className="profile-cards">
        {profileData.map((data, index) => (
          <div className="profile-card" key={index}>
            <img src={data.fotoUrl} alt={data.nama} />
            <h3>{data.nama}</h3>
            <p>NIM: {data.nim}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfilePage;
