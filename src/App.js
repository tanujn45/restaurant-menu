import { useState } from 'react'
import "./App.css";
import logo from './img/logo.png'
import veg from './img/veg.png'
import nveg from './img/nveg.png'

function App() {

  const [foodMenu, setFoodMenu] = useState([
    {
      c_id: 1,
      img: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG",
      category: "soups",
      items: [{
        i_id: 1,
        vn: 'veg',
        name: 'Lemon Corriander Soup',
        price: '100',
      }, {
        i_id: 2,
        vn: 'veg',
        name: 'Lemon Corriander Soup',
        price: '100',
      }, {
        i_id: 3,
        vn: 'veg',
        name: 'Lemon Corriander Soup',
        price: '100',
      }, {
        i_id: 4,
        vn: 'veg',
        name: 'Lemon Corriander Soup',
        price: '100',
      },
      ]
    }, {
      c_id: 2,
      img: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG",
      category: "main course",
      items: [{
        i_id: 1,
        vn: 'veg',
        name: 'Lemon Corriander Soup',
        price: '100',
      }, {
        i_id: 2,
        vn: 'veg',
        name: 'Lemon Corriander Soup',
        price: '100',
      }, {
        i_id: 3,
        vn: 'nveg',
        name: 'Lemon Corriander Soup',
        price: '100',
      }, {
        i_id: 4,
        vn: 'nveg',
        name: 'Lemon Corriander Soup',
        price: '100',
      },
      ]
    }
  ])
  return (
    <>
      <section>
        <div className="container">
          <div className="text-center text-uppercase my-3">
            <h3 className="text-danger font-bold">Pishori Dhaba</h3>
          </div>

          <img src="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG" alt="Paneer Tikka" className="img-fluid rounded mb-4" />

          <div className="accordion">
            {foodMenu.map(data => (
              <div key={data.c_id} className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button className="accordion-button collapsed p-0 pe-3" type="button" data-bs-toggle="collapse" data-bs-target={"#panelsStayOpen-collapse" + data.c_id} aria-expanded="true" aria-controls={"panelsStayOpen-collapse" + data.c_id} >
                    <div className="d-flex align-items-center justify-content-center">
                      <img src={data.img} alt="Soups" className="img-fluid menu-img rounded me-3" />
                      <h4 className="mb-0">{data.category}</h4>
                    </div>
                  </button>
                </h2>
                <div id={"panelsStayOpen-collapse" + data.c_id} className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                  <div className="accordion-body">
                    <div className="row align-items-center">
                      {data.items.map(food => (
                        <>
                          <div className="col-10 mb-3 d-inline-flex align-items-center">
                            {food.vn === "veg" ? <img src={veg} alt="veg" className="vnveg" /> : <img src={nveg} alt="nveg" className="vnveg" />}
                            <h5 className="mb-0">{food.name}</h5>
                          </div>
                          <div className="col-2 mb-3">
                            <h6>&#x20B9; {food.price}</h6>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <img src={img} alt="Logo" className="logo2 img-fluid" />
        </div>
      </section>
      <footer id="footer">
        <div className="d-flex align-items-center justify-content-center text-nowrap">
          <p className="mb-0 me-1">Developed with &hearts; by</p>
          <img src={logo} alt="Logo" className="w-logo img-fluid" />
        </div>
      </footer>
    </>
  );
}

export default App;
