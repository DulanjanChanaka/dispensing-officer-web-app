import React, { useState } from 'react';
import { getFirestore, collection, addDoc, doc } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import "../Admin.css"
import Sidebar from './Sidebar';
import AddEventAdminTable from './AddEventAdminTable';


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

const EventAdd = () => {
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [date, setDate] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'event'), {
        description,
        link,
        date,

      });
      console.log('Document written with ID: ', docRef.id);
      // Reset form fields
      setDescription ("");
      setLink("");
      setDate("")

    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <>
    <Sidebar/>
    <div className='slideadd'>
      <h3>Add to Event section</h3>
      <br/>
      <div className='form'>
    <form onSubmit={handleSubmit}>
    <label>
        Date :
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)}  />
      </label>
      <br />
      <label>
        Event Name :
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}  />
      </label>
      <br />
      <label>
        Link :
        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
      </label>
      <br />
      <br />
      <button type="submit" className='btn-sub'>Submit</button>
    </form>
    </div>
    <br/>
    </div>
    <div>
    
    </div>
    <AddEventAdminTable/>
    </>
    
  );
};

export default EventAdd;

