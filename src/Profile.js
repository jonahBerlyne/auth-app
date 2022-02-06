import React, { useState, useEffect } from 'react';
import { useAuth, upload } from "./firebase";

export default function Profile() {

 const currentUser = useAuth();
 const [photo, setPhoto] = useState(null);
 const [loading, setLoading] = useState(false);
 const [refresh, setRefresh] = useState(false);
 const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");

 function handleChange(e) {
  e.preventDefault();
  if (e.target.files[0]) setPhoto(e.target.files[0]);
 }

 function handleClick() {
  upload(photo, currentUser, setLoading);
  setRefresh(!refresh);
 }

 useEffect(() => {
  if (currentUser?.photoURL) setPhotoURL(currentUser.photoURL);
 }, [currentUser]);

 return (
  <div className="field">
   <input type="file" onChange={handleChange}/>
   <button disabled={loading || !photo} onClick={handleClick}>Upload</button>
   <img src={photoURL} alt="avatar" className="avatar"/>
  </div>
 );
}