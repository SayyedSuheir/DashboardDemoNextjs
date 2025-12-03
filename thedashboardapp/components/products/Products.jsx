"use client";

export default function Products() {
  return (
    <div className="productPage">
        
        <div className="productspage-header">
            <div className="productpage-header-title">
                <h1> Product Panel</h1>
            </div>
            <div className="productpage-header-add">
                <form className="products-form" >
                    <div className="productform-input">
                        <div className="productName">
                            <label>Product Name</label>
                            <input type="text" placeholder="product-name" />
                        </div>
                        <div className="productDescription">
                            <label> Description </label>
                            <input type="text" placeholder="product-description"/>
                        </div>
                        <div className="productType">
                            <label>Product Type</label>
                            <input type="text" placeholder="product-type" />
                        </div>
                        <div className="productQuantity">
                            <label>Product Quantity</label>
                            <input type="number" placeholder="product-quantity" />
                        </div>
                        <div className="productPrice">
                            <label>Unite Price</label>
                            <input type="number" placeholder="product-price" />
                        </div>
                         <div className="productImage">
                            <label>Upload Image</label>
                            <input type="file" placeholder="upload-Image" />
                        </div>
                    </div>
                    <div className="btnproduct_add">
                        <button className="product-add">Add Product</button>
                    </div>
                </form>
            </div>

        </div>
        <div className="productspage-body">
            <div className="search-product-body">
                <input type="text" placeholder="Search"/>
            </div>
            <div className="table-product">
                <table className="products-table">
                    <thead>
                        <tr>
                            <th>ProductName</th>
                            <th>Description</th>
                            <th>Product Type</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Product Image</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>

                </table>
            </div>
        </div>

    </div>
  )
}
