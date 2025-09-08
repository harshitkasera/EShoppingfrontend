import React, { useState } from "react";
import axios from "axios";

const AddProduct = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    desc: "",
    rating: "",
    price: "",
  });
  const [file, setFile] = useState(null);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle file change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select an image!");
      return;
    }

    const data = new FormData();
    data.append("file", file);
    data.append("name", formData.name);
    data.append("category", formData.category);
    data.append("desc", formData.desc);
    data.append("rating", formData.rating);
    data.append("price", formData.price);

    try {
      const res = await axios.post("https://eshopping-1.onrender.com/add", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Product added successfully!");
      setFormData({ name: "", category: "", desc: "", rating: "", price: "" });
      setFile(null);

      if (onSuccess) onSuccess(); // refresh parent list (ViewProduct)
    } catch (error) {
      console.error("Add product failed:", error);
      alert("Something went wrong while adding product.");
    }
  };

  return (
    <div className="form-container">
      <div className="add-box">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <label>Description:</label>
        <input
          type="text"
          name="desc"
          value={formData.desc}
          onChange={handleChange}
          required
        />
        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          required
        />
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <label>Image:</label>
        <input type="file" onChange={handleFileChange} accept="image/*" required />
        <button type="submit">Add Product</button>
      </form>
    </div>
    </div>
  );
};

export default AddProduct;
