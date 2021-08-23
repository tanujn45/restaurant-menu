import "./App.css";
import logo from './img/logo.png'

function App() {
  return (
    <>
      <section id="">
        <div className="container">
          <div className="d-flex flex-row align-items-center justify-content-between my-4">
            <h4 className="mb-0 fw-bold">Demo Food</h4>
            <img src={logo} alt="Logo" className="logo img-fluid" />
          </div>
          <div>
            <h2 className="mb-0">Breakfast</h2>
            <hr className="my-0 mb-4" />
            <h5>Seasonal fresh fruit juice</h5>
            <h6>Rs 100</h6>
            <h5>Fresh fruit</h5>
            <h6>Rs 100</h6>
            <h5>Breakfast pastries / toast</h5>
            <h6>Rs 100</h6>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
