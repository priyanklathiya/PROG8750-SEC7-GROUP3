import React, { useState, useEffect } from 'react';
import axios from "axios";

function AddUpdateProduct() {
  
    const [formErrors, setFormErrors] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailed, setIsFailed] = useState(false);
    const [sku, setSku] = useState("");
    const [price, setPrice] = useState("");
    const [gender, setGender] = useState("");
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [brandId, setBrandId] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [imagePath1, setImagePath1] = useState("");
    const [imagePath2, setImagePath2] = useState("");
    const [imagePath3, setImagePath3] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [brands, setBrands] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState('');
    const [category, setCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        // Fetch brand data from your Node.js server using Axios
        axios.get('http://localhost:8080/api/brands/getAllBrand') 
            .then((response) => {
                if (response.data) {
                    setBrands(response.data.allbrand);
                }
            })
            .catch((error) => {
                console.error('Error fetching brands: ', error);
            });
        
        axios.get('http://localhost:8080/api/category/getAllCategory') 
            .then((response) => {
                if (response.data) {
                    setCategory(response.data.allCategory);
                }
            })
            .catch((error) => {
                console.error('Error fetching brands: ', error);
            });
    }, []);

    const HandleSubmitEvent = (e) => {
        e.preventDefault();
        const formErrors = {
            sku: !sku,
            price: !price,
            productName: !productName,
            productDescription: !productDescription,
            quantity: !quantity,
            gender: !gender,
            selectedCategory: !selectedCategory,
            selectedBrand: !selectedBrand,
            imagePath1: !imagePath1
        };
            
        setIsSuccess(false);
        setIsFailed(false);
        setFormErrors({ ...formErrors });
        if (Object.values(formErrors).some((v) => v)) return;


        const formData = new FormData();
        formData.append("sku", sku);
        formData.append("productName", productName);
        formData.append("productDescription", productDescription);
        formData.append("quantity", quantity);
        formData.append("gender", gender);
        formData.append("price", price);
        formData.append("brandId", selectedBrand);
        formData.append("categoryId", selectedCategory);
        formData.append("imagePath1", imagePath1);
        formData.append("imagePath2", imagePath2);
        formData.append("imagePath3", imagePath3);
for (const value of formData.values()) {
  console.log(value);
}
        axios.post("http://localhost:8080/api/products/addProduct", formData, { headers: { "Content-Type": "multipart/form-data" } })
            .then((response) => { 
                window.scrollTo(0, 0);
                if (response.status === 200) {
                    if (response.data.status === 1) {
                        setIsSuccess(true);
                        setIsFailed(false);
                        setSuccessMsg(response.data.msg);
                        setSku("");
                        setPrice("");
                        setQuantity("");
                        setProductName("");
                        setProductDescription("");
                        setCategory("");
                        setBrands("");
                        setImagePath1("");
                        setImagePath2("");
                        setImagePath3("");
                    }
                    else {
                        setIsSuccess(false);
                        setIsFailed(true);
                        setSuccessMsg(response.data.msg);
                    }
                } else {
                    setIsSuccess(false);
                    setIsFailed(true);
                    setSuccessMsg('Something went wrong. Please try again later!');
                    }
            }).catch((err) => { 
                setIsSuccess(false);
                setIsFailed(true);
                setSuccessMsg(err.message);
            })
    }

  return (
    <>
            <div className='container mt-5'>
                 {isSuccess && (
                    <div className="alert alert-success m-3" role="alert">
                        <b>Success!</b><br /> {successMsg}
                    </div>
                )}
            
                {isFailed && (
                    <div className="alert alert-danger m-3" role="alert">
                        <b>Failed!</b><br /> {successMsg}
                    </div>
                )}

                <h2>Add / Update Product</h2>
                <hr/>
                <form onSubmit={HandleSubmitEvent}  method="post" encType="multipart/form-data">
                    <div className="form-group  col-sm-6">
                        <label htmlFor="sku">SKU: </label><br/>
                        <input type="text"
                            className={`form-control ${formErrors && (formErrors?.sku ? "is-invalid" : "is-valid")}`}
                            id="sku"
                            name="sku"
                            value={sku}
                            onChange={(e) => {setSku(e.currentTarget.value);}}
                            placeholder="Enter SKU" />
                        <div className="invalid-feedback">Please enter correct SKU</div>
                    </div>
                    
                    <div className="form-group col-sm-6">
                        <label htmlFor="productName">Product Name: </label><br/>
                        <input type="text"
                            className={`form-control ${formErrors && (formErrors?.productName ? "is-invalid" : "is-valid")}`}
                            id="productName"
                            name="productName"
                            value={productName}
                            onChange={(e) => {setProductName(e.currentTarget.value);}}
                            placeholder="Enter product Name" />
                        <div className="invalid-feedback">Please enter correct Product Name</div>
                  </div>
                  
                  <div className="form-group col-sm-6">
                        <label htmlFor="productDescription">Product Description:</label><br />
                      <textarea
                      className={`form-control ${formErrors && (formErrors?.productDescription ? "is-invalid" : "is-valid")}`}
                          id="productDescription"
                          name="productDescription"
                          value={productDescription}
                          onChange={(e) => { setProductDescription(e.currentTarget.value); }}
                          placeholder="Enter Product Description"
                      ></textarea>
                        <div className="invalid-feedback">Please enter correct Product Name</div>
                    </div>
                  
                    <div className="form-group col-sm-6">
                        <label htmlFor="brandId">Brand:</label><br />
                        <select
                          className={`form-control ${formErrors && (formErrors?.selectedBrand ? "is-invalid" : "is-valid")}`}
                            id="brandId"
                            name="brandId"
                            value={selectedBrand} 
                            onChange={(e) => { setSelectedBrand(e.currentTarget.value); }}                         >
                            <option value="">Select a Brand</option>
                            {brands.map((brand) => (
                                <option key={brand._id} value={brand._id}>
                                    {brand.brandName}
                                </option>
                            ))}
                        </select>
                        <div className="invalid-feedback">Please select a valid Brand.</div>
                    </div>

                    
                    <div className="form-group col-sm-6">
                        <label htmlFor="categoryId">category :</label><br />
                        <select
                            className={`form-control ${formErrors && (formErrors?.selectedCategory ? "is-invalid" : "is-valid")}`}
                            id="categoryId"
                            name="categoryId"
                            value={selectedCategory}  
                            onChange={(e) => { setSelectedCategory(e.currentTarget.value); }}
                        >
                            <option value="">Select a Category</option>
                            {category.map((category) => (
                                <option key={category._id} value={category._id}>
                                    {category.categoryName}
                                </option>
                            ))}
                        </select>
                        <div className="invalid-feedback">Please select a valid Category.</div>
                    </div>

                    <div className="form-group col-sm-6">
                        <label htmlFor="price">Price : </label><br/>
                        <input type="text"
                            className={`form-control ${formErrors && (formErrors?.price ? "is-invalid" : "is-valid")}`}
                            id="price"
                            name="price"
                            value={price}
                            onChange={(e) => {setPrice(e.currentTarget.value);}}
                            placeholder="Enter Price" />
                        <div className="invalid-feedback">Please enter correct Price</div>
                    </div>

                    {/* <div className="form-group col-sm-6">
                        <label htmlFor="gender">Gender:</label><br />
                        <select
                            className={`form-control ${formErrors && (formErrors?.gender ? "is-invalid" : "is-valid")}`}
                            id="gender"
                            name="gender"
                            value={gender}
                            onChange={(e) => { setGender(e.currentTarget.value); }} >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="unisex">Unisex</option>
                        </select>
                        <div className="invalid-feedback">Please select a valid Gender.</div>
                    </div> */}
                  
                  <div className="form-group col-sm-6">
                    <label>Gender:</label><br />
                    <div>
                        <label className='m-1'>
                        <input type="radio" name="gender"  value="male" checked={gender === "male"}
                            onChange={(e) => setGender(e.target.value)}
                        /> Male  </label>
                    
                        <label  className='m-1'>
                        <input type="radio" name="gender" value="female" checked={gender === "female"}
                            onChange={(e) => setGender(e.target.value)}
                        /> Female </label>
                    
                        <label  className='m-1'>
                        <input type="radio" name="gender" value="unisex" checked={gender === "unisex"}
                            onChange={(e) => setGender(e.target.value)}
                        /> Unisex </label>
                    </div>
                    {formErrors && formErrors.gender && (
                        <div className="invalid-feedback">Please select a valid Gender.</div>
                    )}
                    </div>

                    <div className="form-group col-sm-6">
                        <label htmlFor="quantity">Quantity:</label><br />
                        <input
                            type="number"
                            className={`form-control ${formErrors && (formErrors?.quantity ? "is-invalid" : "is-valid")}`}
                            id="quantity"
                            name="quantity"
                            value={quantity}
                            onChange={(e) => { setQuantity(e.currentTarget.value); }}
                            placeholder="Enter Quantity" />
                        <div className="invalid-feedback">Please enter a valid quantity.</div>
                    </div>

                    <div className="form-group col-sm-6">
                        <label htmlFor="imagePath1">Image 1 </label><br/>
                        <input type="file"
                            className={`form-control ${formErrors && (formErrors?.imagePath1 ? "is-invalid" : "is-valid")}`}
                            id="imagePath1"
                            name="imagePath1"
                            onChange={(e) => setImagePath1(e.currentTarget.files[0])}
                            placeholder="Select an image" />
                        <div className="invalid-feedback">Please select image</div>
                    </div>
                  
                    <div className="form-group col-sm-6">
                        <label htmlFor="imagePath2">Image 2 </label><br/>
                        <input type="file"
                            className={`form-control`}
                            id="imagePath2"
                            name="imagePath2"
                            onChange={(e) => setImagePath2(e.currentTarget.files[0])}
                            placeholder="Select an image" />
                        <div className="invalid-feedback">Please select image</div>
                    </div>
                  
                    <div className="form-group col-sm-6">
                        <label htmlFor="imagePath3">Image 3 </label><br/>
                        <input type="file"
                            className={`form-control`}
                            id="imagePath3"
                            name="imagePath3"
                            onChange={(e) => setImagePath3(e.currentTarget.files[0])}
                            placeholder="Select an image" />
                        <div className="invalid-feedback">Please select image</div>
                    </div>
                    
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>

                </form>
            </div>
        </>
  )
}

export default AddUpdateProduct