import React, { Fragment } from "react";
import Nav from "./Nav";
import Slideimg from "./Slideimg";
import Kategori from "./Kategori";
import Populer from "./Populer";
import Side from "./Side";

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <div>
          <Nav />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div>
                <Slideimg />
              </div>
              <div>
                <Kategori />
              </div>
              <div>
                <Populer />
              </div>
            </div>
            <div className="col-4 back">
              <Side />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
