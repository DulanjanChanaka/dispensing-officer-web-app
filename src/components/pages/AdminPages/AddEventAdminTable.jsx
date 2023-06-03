import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getFirestore, deleteDoc, collection, onSnapshot, doc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import "../Admin.css"


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

initializeApp(firebaseConfig);
const db = getFirestore();

const AddEventAdminTable = () => {
    const [rows, setRows] = useState([]);
  
    useEffect(() => {
      const fetchdata = onSnapshot(collection(db, 'event'), (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRows(data);
      });
  
      return () => {
        fetchdata();
      };
    }, []);
  

      
      const handleDelete = async (row) => {
        try {
          
          const docRef = doc(db, 'event', row.id);
      
          
          await deleteDoc(docRef);
      
          console.log('Row deleted successfully:', row);
        } catch (error) {
          console.error('Error deleting row:', error);
        }
      };
      
  
    const columns = [
      { field: 'date', headerName: 'Date', width: 200 },
      { field: 'description', headerName: 'Description', width: 450 },
      { field: 'link', headerName: 'Link', width: 450 },


      {
        field: 'delete',
        headerName: 'Delete',
        width: 100,
        renderCell: (params) => (
          <button onClick={() => handleDelete(params.row)}>Delete</button>
        ),
      },
    ];
  
    return (
      <div className='container'>
        <div className='table'>
          <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
      </div>
    );
  };
  
  export default AddEventAdminTable;