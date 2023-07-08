import "./transfer.css";
import { useState, useEffect } from "react";
import React from 'react';
import { getFirestore, collection, query, where ,getDocs} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyC_4EODAyfpE3or-K13z10PUxDVULld1Yw",
  authDomain: "ncd-app-9fa4c.firebaseapp.com",
  databaseURL: "https://ncd-app-9fa4c-default-rtdb.firebaseio.com",
  projectId: "ncd-app-9fa4c",
  storageBucket: "ncd-app-9fa4c.appspot.com",
  messagingSenderId: "625802272807",
  appId: "1:625802272807:web:d1d39a22b47ece13e06e02"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Transfer() {
  
  const [districtContent, setDistrictContent] = useState([]);

  const [selectedDistrict, setSelectedDistrict] = useState('');

  const districts = [
    "Ampara", "Anuradhapura", "Badulla", "Batticaloa", "Colombo", "Galle", "Gampaha", "Hambantota",
    "Jaffna", "Kalutara", "Kandy", "Kegalle", "Kilinochchi", "Kurunegala", "Mannar", "Matale", "Matara",
    "Monaragala", "Mullaitivu", "Nuwara Eliya", "Polonnaruwa", "Puttalam", "Ratnapura", "Trincomalee", "Vavuniya"
  ];

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };



  useEffect(() => {
    const fetchDistrictContent = async () => {
      const q = query(collection(db, 'transfer'), where('district', '==', selectedDistrict));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        cno: doc.data().cno,
        ydistrict: doc.data().ydistrict,
      }));
      setDistrictContent(data);
    };
    

    if (selectedDistrict !== "") {
      fetchDistrictContent();
    }
  }, [selectedDistrict]);



  return (
    <div className="main">
      <button className='btn-add'>
        <a href='/addtransfer'>Add</a>
      </button>
      
      <div className="search">
      <h1>Select a District </h1>
      <p>ඔබට සුහද මාරුවක් ලබා ගැනීමට අවශ්‍ය දිස්ත්‍රිකය </p>
      <select value={selectedDistrict} onChange={handleDistrictChange}>
        <option value="">-- Select District --</option>
        {districts.map((district) => (
          <option key={district} value={district}>
            {district}
          </option>
        ))}
      </select>
      <p className="sldistric-name">Selected District: {selectedDistrict}</p>
    </div>

    <div>
    <table className="table-data">
      <thead>
        <tr>
          <th>Name</th>
          <th>Contact No</th>
          <th>Current District</th>
        </tr>
      </thead>
      <tbody>
        {districtContent.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.cno}</td>
            <td>{item.ydistrict}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>

    </div>
  );
}

export default Transfer;
