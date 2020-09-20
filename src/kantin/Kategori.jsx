import React, { Fragment } from "react";
import img from "./img/makan/makanan.jpg";
import img1 from "./img/makan/burger.jpg";
import img2 from "./img/makan/pizza.jpg";
import img3 from "./img/makan/jus.jpg";

class Konten extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="row ml-2">
          <div className="col-sm-9">
            <h3>Kategori</h3>
          </div>
          <div className="col-sm-3">
            <button className="btn badge badge-pill wortel text-white p-2">
              Lebih Lengkap
            </button>
          </div>
          <div className="row m-3">
            <input
              type="image"
              className="gambargw mr-3 radiasiultrasonik"
              src={img}
              alt=""
            />
            <input
              type="image"
              className="gambargw mr-3 radiasiultrasonik"
              src={img1}
              alt=""
            />
            <input
              type="image"
              className="gambargw mr-3 radiasiultrasonik"
              src={img2}
              alt=""
            />
            <input
              type="image"
              className="gambargw mr-3 radiasiultrasonik"
              src={img3}
              alt=""
            />
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Konten;
