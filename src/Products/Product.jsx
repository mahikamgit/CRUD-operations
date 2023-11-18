import React, { useState } from "react";

const Product = () => {
  const [productData, setProductData] = useState([]);
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [editProductId, setEditProductId] = useState("");
  const [editedProductName, setEditedProductName] = useState("");
  const [editedProductPrice, setEditedProductPrice] = useState("");

  const addProduct = () => {
    if (productId && productName && productPrice) {
      setProductData((prevProductData) => [
        ...prevProductData,
        {
          id: productId,
          name: productName,
          price: productPrice,
        },
      ]);
      setProductId("");
      setProductName("");
      setProductPrice("");
    }
  };

  const editProduct = (product) => {
    setEditProductId(product.id);
    setEditedProductName(product.name);
    setEditedProductPrice(product.price);
  };

  const updateProduct = () => {
    if (editedProductName && editedProductPrice) {
      setProductData((prevProductData) =>
        prevProductData.map((product) =>
          product.id === editProductId
            ? {
                ...product,
                name: editedProductName,
                price: editedProductPrice,
              }
            : product
        )
      );
      setEditProductId("");
      setEditedProductName("");
      setEditedProductPrice("");
    }
  };

  const deleteProduct = (productId) => {
    setProductData((prevProductData) =>
      prevProductData.filter((product) => product.id !== productId)
    );
  };

  return (
    <div className="container">
      <h2>Enter Productid</h2>
      <input
        type="text"
        placeholder="Productid"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <br />
      <h2>Enter Productname</h2>
      <input
        type="text"
        placeholder="Productname"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <br />
      <h2>Enter Productprice</h2>
      <input
        type="text"
        placeholder="Productprice"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <br />
      <input type="button" value="submit" onClick={addProduct} />
      <h2>Products List</h2>
      <table border={5}>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                {editProductId === product.id ? (
                  <input
                    type="text"
                    value={editedProductName}
                    onChange={(e) => setEditedProductName(e.target.value)}
                  />
                ) : (
                  product.name
                )}
              </td>
              <td>
                {editProductId === product.id ? (
                  <input
                    type="text"
                    value={editedProductPrice}
                    onChange={(e) => setEditedProductPrice(e.target.value)}
                  />
                ) : (
                  product.price
                )}
              </td>
              <td>
                {editProductId === product.id ? (
                  <button onClick={updateProduct}>Update</button>
                ) : (
                  <button onClick={() => editProduct(product)}>Edit</button>
                )}
              </td>
              <td>
                <button onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
