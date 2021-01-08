import React from 'react'

function Sell() {
    return (
        <div>
            <h1 className="text-center text-danger">For Sellers to add Items in Dashboard</h1>
    <div id="formHide">
        <h1 className="text-center">Product Detals</h1>
        <div className="container-fluid">
            <form className="border border-info m-5 p-5">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="imgaddress">Image Address :</label>
                        <input type="text" className="form-control" id="proImage" name="proImage"
                            placeholder="Image Address" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="fullName">Product Name :</label>
                        <input type="text" className="form-control" id="proName" name="proName"
                            placeholder="Product Name" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="price">Product Price :</label>
                        <input type="number" placeholder="Price" className="form-control" id="proPrice" name="proPrice" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="brand">Brand Name :</label>
                        <input type="text" placeholder="Brand Name" className="form-control" id="proBrand"
                            name="proBrand" />
                    </div>
                </div>
                <div>
                    <button type="button" id="adminBtn" onclick="clicked()" className="btn btn-lg btn-primary"> Submit
                        Data</button>
                </div>
            </form>
        </div>
    </div>
        </div>
    )
}

export default Sell
