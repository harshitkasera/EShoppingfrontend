import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewProduct = () => {
  const [products, setProducts] = useState([])
  const [productData, setProductData] = useState({
    img: "",
    name: "",
    rating: "",
    price: "",
    desc: "",
    category: ""
  })
  const [editId, setEditId] = useState(null)
  const [formVisible, setFormVisible] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await axios.get('http://localhost:9800/get')
    setProducts(res.data)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setProductData(prev => ({ ...prev, [name]: value }))
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9800/delete/${id}`)
      getData()
    } catch (error) {
      console.error("Delete failed:", error)
    }
  }

  const handleUpdateClick = (item) => {
    setProductData({
      name: item.name,
      img: item.img,
      desc: item.desc,
      rating: item.rating,
      price: item.price,
      category: item.category
    })
    setEditId(item._id)
    setFormVisible(true)
  }

  const handleUpdateSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:9800/update/${editId}`, productData)
    getData()
    setFormVisible(false)
    setEditId(null)
    setProductData({ name: "", img: "", rating: "", desc: "", price: "", category: "" })
    alert("Product updated successfully!")
  }

  return (
    <div className='body'>
      <h1>Products</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Desc</th>
            <th>Rating</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item, index) => (
            <tr key={item._id || index}>
              <td>{item._id}</td>
              <td>
                <img
                  src={`http://localhost:9800/upload/${item.img}`}
                  alt={item.name}
                  width="100"
                />
                {console.log(`http://localhost:9800/upload/${item.img}`)}
              </td>
              <td>{item.name}</td>
              <td>{item.desc}</td>
              <td>{item.rating}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>
                <button className='v-btn' onClick={() => handleUpdateClick(item)}>Update</button>
                <button className='v-btn-d' onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {formVisible && (
        <div className="form-container">
          <form onSubmit={handleUpdateSubmit}>
          <h2 className='v-hh'>Update Product</h2>
            <label>Name:</label>
            <input type="text" name="name" value={productData.name} onChange={handleChange} required />

            <label>Price:</label>
            <input type="number" name="price" value={productData.price} onChange={handleChange} required />

            <label>Rating:</label>
            <input type="number" name="rating" value={productData.rating} onChange={handleChange} required />

            <label>Description:</label>
            <input type="text" name="desc" value={productData.desc} onChange={handleChange} required />

            <label>Category:</label>
            <input type="text" name="category" value={productData.category} onChange={handleChange} required />

            <label>Image URL:</label>
            <input type="text" name="img" value={productData.img} onChange={handleChange} required />

            <button type="submit">Update</button>
            <button type="button" onClick={() => setFormVisible(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default ViewProduct
