import "./addtransfer.css"
import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
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


function AddTransfer() {

  const [ydistrict, setYdistrict] = useState('');
  const [name, setName] = useState('');
  const [cno, setCno] = useState('');
  const [district, setDistrict] = useState('');


  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'transfer'), {
        ydistrict,
        name,
        cno,
        district,

      });
      console.log('Document written with ID: ', docRef.id);
      // Reset form fields
      setYdistrict('');
      setName('')
      setCno('')
      setDistrict('')

    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };


 // const [selectedDistrict, setSelectedDistrict] = useState('');

  const districts = [
    "Ampara", "Anuradhapura", "Badulla", "Batticaloa", "Colombo", "Galle", "Gampaha", "Hambantota",
    "Jaffna", "Kalutara", "Kandy", "Kegalle", "Kilinochchi", "Kurunegala", "Mannar", "Matale", "Matara",
    "Monaragala", "Mullaitivu", "Nuwara Eliya", "Polonnaruwa", "Puttalam", "Ratnapura", "Trincomalee", "Vavuniya"
  ];

  // const handleDistrictChange = (event) => {
  //   setSelectedDistrict(event.target.value);
  // };
  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };



  return (
    <div>
       <form onSubmit={handleSubmit}>
       <div className='main-container'>
        <label>Your District : </label>
        <input type="text" value={ydistrict} onChange={(e) => setYdistrict(e.target.value)} placeholder='enter your district'></input>
        <label>Your Name : </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='enter your name'></input>
        <label>Your Contact no : </label>
        <input type="text" value={cno} onChange={(e) => setCno(e.target.value)} placeholder='enter your contact no'></input>
        <label>Your Target Dristrict : </label>
        <select value={district} onChange={handleDistrictChange}>
        <option value="">-- Select District --</option>
        {districts.map((district) => (
          <option key={district} value={district}>
            {district}
          </option>
        ))}
      </select>
        <button>Submit</button>
        </div>
       </form>
    </div>
  )
}

export default AddTransfer