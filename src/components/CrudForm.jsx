import React, { useState, useEffect } from 'react';

const CrudForm = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState({ Name: '', Age: '', Email: '' });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ Name: '', Age: '', Email: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 bg-gray-200 rounded">
      <div className="mb-2">
        <label className="block mb-1">Name</label>
        <input
          type="text"
          name="Name"
          value={formData.Name}
          onChange={handleChange}
          className="w-full p-2 border"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Age</label>
        <input
          type="number"
          name="Age"
          value={formData.Age}
          onChange={handleChange}
          className="w-full p-2 border"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
          className="w-full p-2 border"
          required
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
        {initialData ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default CrudForm;
