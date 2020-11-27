

function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="index.html">Foodhunterki</a>
            </div>
            <div>
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
            </div>
        </header>
        <main>
            <div className="row center">
                <div className="card">
                    <a href="product.html"><img className="medium" src="/template/images/prod-1.png" alt="product" /></a>
                    <div className="card-body">
                        <a href="product.html"><h3>Foodhunterki ebook</h3></a>
                        <div className="rating">
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                        </div>
                        <div className="price">
                            120 PLN
                        </div>
                    </div>
                </div>
                <div className="card">
                    <a href="product.html"><img className="medium" src="/template/images/prod-3.png" alt="product" /></a>
                    <div className="card-body">
                        <a href="product.html"><h3>Foodhunterki ebook</h3></a>
                        <div className="rating">
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                        </div>
                        <div className="price">
                            150 PLN
                        </div>
                    </div>
                </div>
                <div className="card">
                    <a href="product.html"><img className="medium" src="/template/images/prod-2.png" alt="product" /></a>
                    <div className="card-body">
                        <a href="product.html"><h3>Foodhunterki ebook</h3></a>
                        <div className="rating">
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                        </div>
                        <div className="price">
                            170 PLN
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer className="row center">
            All right reserved
        </footer>
    </div>
  );
}

export default App;
