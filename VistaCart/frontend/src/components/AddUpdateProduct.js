import React, { useState } from 'react';
import axios from "axios";

function AddUpdateProduct() {
  
  const [formErrors, setFormErrors] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [sku, setSku] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imagePath1, setImagePath1] = useState("");
  const [imagePath2, setImagePath2] = useState("");
  const [imagePath3, setImagePath3] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

    const HandleSubmitEvent = (e) => {
        e.preventDefault();
        const formErrors = {
            sku: !sku,
            productName: !productName,
            productDescription: !productDescription,
            quantity: !quantity,
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
        formData.append("imagePath1", imagePath1);
        formData.append("imagePath2", imagePath2);
        formData.append("imagePath3", imagePath3);

        axios.post("http://localhost:8080/api/category/addCategory", formData)
            .then((response) => { 
                window.scrollTo(0, 0);
                if (response.status === 200) {
                    if (response.data.status === 1) {
                        setIsSuccess(true);
                        setIsFailed(false);
                        setSuccessMsg(response.data.msg);
                        setSku("");
                        setQuantity("");
                        setProductName("");
                        setProductDescription("");
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
                setSuccessMsg(err);
            })
    }

  return (
    <main>
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

                <h2>Add / Update Category</h2>
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
                    <div className="form-group  col-sm-6">
                        <label htmlFor="productName">Product Name: </label><br/>
                        <input type="text"
                            className={`form-control ${formErrors && (formErrors?.sku ? "is-invalid" : "is-valid")}`}
                            id="productName"
                            name="productName"
                            value={sku}
                            onChange={(e) => {setProductName(e.currentTarget.value);}}
                            placeholder="Enter product Name" />
                        <div className="invalid-feedback">Please enter correct SKU</div>
                    </div>


                    <div className="form-group col-sm-6">
                        <label htmlFor="imagePath1">Image 1 </label><br/>
                        <input type="file"
                            className={`form-control ${formErrors && (formErrors?.imagePath ? "is-invalid" : "is-valid")}`}
                            id="imagePath1"
                            name="imagePath1"
                            onChange={(e) => setImagePath1(e.currentTarget.files[0])}
                            placeholder="Select an image" />
                        <div className="invalid-feedback">Please select image</div>
                    </div>

                    <button type="submit" className="btn btn-primary mt-2">Submit</button>

                </form>
            </div>
        </main>
  )
}

export default AddUpdateProduct