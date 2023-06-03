import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import "../Admin.css"
import Sidebar from './Sidebar';
import AddSlideAdminTable from './AddSlideAdminTable';


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

const AddSlide = () => {
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'swiperImages'), {
        description,
        imageUrl,

      });
      console.log('Document written with ID: ', docRef.id);
      // Reset form fields
      setDescription ("");
      setImageUrl("");

    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <>
    <Sidebar/>
    <h1 className='adminhead'>Wellcome To Admin Panel</h1>
    <div className='slideadd'>
      <h3>Image Add To Slider</h3>
      <br/>
      <div className='form'>
        <div className='form'>
    <form onSubmit={handleSubmit}>
      <label>
        Description :
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}  />
      </label>
      <br />
      <label>
        Image Url :
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      </label>
      <br />
      <br />
      <button type="submit" className='btn-sub'>Submit</button>
    </form>
    </div>
    </div>
    <br/>
    
    </div>
    
     <AddSlideAdminTable/>
    </>
    
  );
};

export default AddSlide;

