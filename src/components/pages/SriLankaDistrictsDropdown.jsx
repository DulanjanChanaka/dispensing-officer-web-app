import React, { useState } from 'react';

const SriLankaDistrictsDropdown = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const districts = [
    "Ampara", "Anuradhapura", "Badulla", "Batticaloa", "Colombo", "Galle", "Gampaha", "Hambantota",
    "Jaffna", "Kalutara", "Kandy", "Kegalle", "Kilinochchi", "Kurunegala", "Mannar", "Matale", "Matara",
    "Monaragala", "Mullaitivu", "Nuwara Eliya", "Polonnaruwa", "Puttalam", "Ratnapura", "Trincomalee", "Vavuniya"
  ];

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  return (
    <div>
      <h1>Select a District </h1>
      <select value={selectedDistrict} onChange={handleDistrictChange}>
        <option value="">-- Select District --</option>
        {districts.map((district) => (
          <option key={district} value={district}>
            {district}
          </option>
        ))}
      </select>
      <p>Selected District: {selectedDistrict}</p>
    </div>
  );
};

export default SriLankaDistrictsDropdown;
