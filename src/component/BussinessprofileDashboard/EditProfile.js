
import React, { useState } from 'react';
import axios from 'axios';
import './EditProfile.css';

function EditProfile() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [aadharCard, setAadharCard] = useState(null);
  const [panCard, setPanCard] = useState(null);
  const [companyDocument, setCompanyDocument] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone_number', phoneNumber);
    formData.append('email', email);
    formData.append('company_name', companyName);
    formData.append('aadhar_card', aadharCard);
    formData.append('pan_card', panCard);
    formData.append('company_document', companyDocument);

    try {
      const response = await axios.post(
        'http://139.59.26.221:8000/api/adsapi/businessProfile',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(response);
      resetForm(); 
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    setName('');
    setPhoneNumber('');
    setEmail('');
    setCompanyName('');
    setAadharCard(null);
    setPanCard(null);
    setCompanyDocument(null);
  };

  

  return (
    <form onSubmit={handleSubmit} className="business-profile-form">
    <center><h3>Edit Profile</h3></center>
     <label>
        Name:
        <input type="text" 
         value={name} 
         onChange={(event) => {
           const regex = /^[a-zA-Z ]*$/;
           const input = event.target.value;
           if (regex.test(input)) { 
             setName(input);
           }
         }}
         required 
          />
      </label>

      
      <label>
        Phone Number:
        <input type="tel" 
         value={phoneNumber} 
         onChange={(event) => {
           const regex = /^[0-9\b]+$/;
           const input = event.target.value;
           if (regex.test(input) && input.length <= 10) { 
             setPhoneNumber(input);
           }
         }}
         minLength={10} maxLength={10} 
         required
        />
      </label>


      <label>
      Email:
        <input type="email" 
         value={email} 
         onChange={(event) => setEmail(event.target.value)}
       
        />
      </label>

      <label>
        Company Name:
        <input type="text" value={companyName} onChange={(event) => setCompanyName(event.target.value)} required />
      </label>
      <label>
        Aadhar Card:
       <input type="file" onChange={(event) => setAadharCard(event.target.files[0])} required />
      </label>
      <label>
        PAN Card:
      <input type="file" onChange={(event) => setPanCard(event.target.files[0])} required />
      </label>
      <label>
        Company Document:
        <input type="file" onChange={(event) => setCompanyDocument(event.target.files[0])} required />
      </label>
      <button type="submit" className='btnhead'>Submit</button>
    </form>
  );
}

export default EditProfile;
