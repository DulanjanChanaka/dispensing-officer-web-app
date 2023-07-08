import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import "./UserInfo.css"

// Your web app's Firebase configuration
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

const UserInfo = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');
  const [station, setStation] = useState('');
  const [workdistrict, setWorkdistrict] = useState('');
  const [birthday, setBirthday] = useState('');
  const [nicno, setNicno] = useState('');
  const [cno, setCno] = useState('');
  const [firstap, setFirstap] = useState('');
  const [cgrade, setCgrade] = useState('');
  const [adcd, setAdcd] = useState('');
  const [arephamacist, setArephamacist] = useState('');
  const [regyearph, setRegyearph] = useState('');
  const [cbsalary, setCbsalary] = useState('');
 

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'users'), {
        name,
        gender,
        address,
        district,
        station,
        workdistrict,
        birthday,
        nicno,
        cno,
        firstap,
        cgrade,
        adcd,
        arephamacist,
        regyearph,
        cbsalary,

      });
      console.log('Document written with ID: ', docRef.id);
      // Reset form fields
      setName('');
      setGender('')
      setAddress('')
      setDistrict('')
      setStation('')
      setWorkdistrict('')
      setBirthday('')
      setNicno('')
      setCno('')
      setFirstap('')
      setCgrade('')
      setAdcd('')
      setArephamacist('')
      setRegyearph('')
      setCbsalary('')
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <>
    <div className='enterfield'>
    <form onSubmit={handleSubmit}>

      <h2 className='info-sin'>ඔබගේ තොරතුරු ලබා දෙන්න </h2>
      <div lable-input>

      <label >Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}  />
    
      
      <label>Gender:</label>
        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
     
      
      <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
    
      
      <label>District:</label>
        <input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} />
    
      
      <label> Work Station:</label>
        <input type="text" value={station} onChange={(e) => setStation(e.target.value)} />
      
      
      <label>Work District:</label>
        <input type="text" value={workdistrict} onChange={(e) => setWorkdistrict(e.target.value)} />
    
      
      <label>Birthday:</label>
        <input type="text" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
    
      
      <label>NIC No:</label>
        <input type="text" value={nicno} onChange={(e) => setNicno(e.target.value)} />
    
      
      <label>Contact No:</label>
        <input type="text" value={cno} onChange={(e) => setCno(e.target.value)} />
    
      
      <label>First Appoinment Date:</label>
        <input type="text" value={firstap} onChange={(e) => setFirstap(e.target.value)} />
    
      
      <label>Current Grade:</label>
        <input type="text" value={cgrade} onChange={(e) => setCgrade(e.target.value)} />
    
      
      <label>Appoinment Date Of Current Grade</label>
        <input type="text" value={adcd} onChange={(e) => setAdcd(e.target.value)} />
      
      
      <label>Are You External Pharmacist:</label>
        <input type="text" value={arephamacist} onChange={(e) => setArephamacist(e.target.value)} />
      
      
      <label>Ex.Pharm Register Year:</label>
        <input type="text" value={regyearph} onChange={(e) => setRegyearph(e.target.value)} />
      
      
      <label>Current Basic Salary:</label>
        <input type="text" value={cbsalary} onChange={(e) => setCbsalary(e.target.value)} />
      
      
      <button type="submit">Submit</button>
      </div>
    </form>
    
    </div>
    </>
    
  );
};

export default UserInfo;
