import React, { Fragment } from "react";
import img from "./img/populer/4cheese.jpg";
import img2 from "./img/populer/mozarela.jpg";
import img3 from "./img/populer/philadelphia.jpg";

class Populer extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="ml-4 mt-3">
          <h3>Populer</h3>
          <div class="row mt-4">
            <div class="col mb-4">
              <div class="card ilang">
                <input
                  type="image"
                  src={img}
                  class="card-img-top bulet"
                  alt="4cheese"
                ></input>
                <div class="card-body">
                  <h5 class="card-title">4 Cheese</h5>
                  <div className="card-text row">
                    <div className="col-4">
                      <i class="far fa-star">4.7</i>
                    </div>
                    <div className="col-8">
                      <p>Rp.130.000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card ilang">
                <input
                  type="image"
                  src={img3}
                  class="card-img-top bulet"
                  alt="..."
                ></input>
                <div class="card-body">
                  <h5 class="card-title">Philadelphia</h5>
                  <div className="card-text row">
                    <div className="col-4">
                      <i class="far fa-star">4.5</i>
                    </div>
                    <div className="col-8">
                      <p>Rp.250.000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card ilang">
                <input
                  type="image"
                  src={img2}
                  class="card-img-top bulet"
                  alt="..."
                ></input>
                <div class="card-body">
                  <h5 class="card-title">Mozarella</h5>
                  <div className="card-text row">
                    <div className="col-4">
                      <i class="far fa-star">4.6</i>
                    </div>
                    <div className="col-8">
                      <p>Rp.175.000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Populer;
