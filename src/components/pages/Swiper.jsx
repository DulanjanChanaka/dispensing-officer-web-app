import React, { useState, useEffect } from 'react';
import { getFirestore, collection,  } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import { getDocs } from 'firebase/firestore/lite';
//import firebase from 'firebase/compat/app';
//import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
//import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Swiper.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// Initialize Firebase
const firebaseConfig = {
  // Your Firebase config details
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

const SwiperComponent = () => {
  const [swiperImages, setSwiperImages] = useState([]);
  //const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    // Fetch swiper images from Firestore
    const fetchSwiperImages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'swiperImages'));
        const images = querySnapshot.docs.map((doc) => doc.data().imageUrl);
        setSwiperImages(images);
      } catch (error) {
        console.log('Error fetching swiper images: ', error);
      }
    };

    fetchSwiperImages();
  }, []);




  return (
  
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {swiperImages.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={index} className="swiper-image"/>
        </SwiperSlide>
      ))}

      </Swiper>
    </>


  );
};

export default SwiperComponent;

