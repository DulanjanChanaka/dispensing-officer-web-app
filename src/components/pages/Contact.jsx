import React from 'react'
import { ContactList } from './ContactList'
import "./Contact.css"
const Contact = () => {

  return (
    <div className='contact-list'>
      <ul>
        <label>President</label>
        <li>Udeni Dasanayake</li>
        <label>Secretary</label>
        <li>M.M.S Bandara</li>
        <label>Treasurer</label>
        <li>S.M.P.S. Kumara</li>
        <label>Chief Organizer</label>
        <li>H.M. Lalith Herath</li>
        <label>Admin</label>
        <li><a href='/login'>wikum Madushanka</a></li>
      </ul>
    <div></div>

    </div>
  )
}

export default Contact
