import React from 'react'

function Cart() {
    return (
        <div>
            <div className="container-fluid jumbotron-fluid bg-primary" >
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light ">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for products,brands and more..."
                            aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                            <span className="input-group-text text-primary bg-white" id="basic-addon2"><i
                                    className="fas fa-search">
                                    <button></button>
                                </i></span>
                        </div>
                    </div>
                    <ul className="navbar-nav mr-auto ml-3">
                        <li className="nav-item ">
                            <button type="button" className="btn btn-primary btn-lg btn-block">See
                                Added Item
                            </button> </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>


    <div className="container-fluid">
        <h1 className="text-center text-success" id="totalCart">ToTal Item :</h1>
        <div id="cartShow" className="row"></div>
        <h3 id="cartVal" className="text-center text-warning">ToTal Amount :</h3>
    </div>
        </div>
    )
}

export default Cart;
