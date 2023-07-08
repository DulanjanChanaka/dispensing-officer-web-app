import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getFirestore, deleteDoc, collection, onSnapshot, doc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import "./regusertable.css"

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

const UserInfoTable = () => {
    const [rows, setRows] = useState([]);
  
    useEffect(() => {
      const fetchdata = onSnapshot(collection(db, 'users'), (snapshot) => {
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
         
          const docRef = doc(db, 'users', row.id);
      
          
          await deleteDoc(docRef);
      
          console.log('Row deleted successfully:', row);
        } catch (error) {
          console.error('Error deleting row:', error);
        }
      };
      
  
    const columns = [
      { field: 'name', headerName: 'Name', width: 200, resizable: true , className:"column"},
      { field: 'gender', headerName: 'Gender', width: 80, resizable: true ,className:"column"},
      { field: 'address', headerName: 'Address', width: 300, resizable: true , className:"column"},
      { field: 'district', headerName: 'District', width: 100, resizable: true , className:"column"},
      { field: 'station', headerName: 'Work Station', width: 300, resizable: true , className:"column"},
      { field: 'workdistrict', headerName: 'Work District', width: 100, resizable: true , className:"column"},
      { field: 'birthday', headerName: 'Birthday', width: 100, resizable: true , className:"column"},
      { field: 'nicno', headerName: 'NIC No', width: 120, resizable: true , className:"column"},
      { field: 'cno', headerName: 'Contact No', width: 120, resizable: true , className:"column"},
      { field: 'firstap', headerName: 'First Appoinment Date', width: 160, resizable: true , className:"column"},
      { field: 'cgrade', headerName: 'Current Grade', width: 100, resizable: true , className:"column"},
      { field: 'adcd', headerName: 'Appoinment Date Of Current Grade', width: 250, resizable: true , className:"column"},
      { field: 'arephamacist', headerName: 'Are You External Pharmacist', width: 200, resizable: true , className:"column"},
      { field: 'regyearph', headerName: 'Ex.Pharm Register Year', width: 200, resizable: true , className:"column"},
      { field: 'cbsalary', headerName: 'Current Basic Salary', width: 200, resizable: true , className:"column"},


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
          <DataGrid className="table-data" rows={rows} columns={columns} pageSize={10} />
        </div>
      </div>
    );
  };
  
  export default UserInfoTable ;