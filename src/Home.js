import React, { Component } from "react";
import Layout from "./comps/Layout";
import OurDogs from "./comps/OurDogs";
import Card from 'react-bootstrap/Card'
import { Switch, Route } from "react-router-dom";
import { animations, HideUntilLoaded } from 'react-animation';
import Adoption from "./Img/Adoption.png"
import Adoption2 from "./Img/Adoption2.png"
import petfoot from "./Img/petfoot.png";
import "./Css/Home.css"
import { Navbar, Container, NavbarBrand } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import Store from "./comps/Store";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Count from "./Single/Count";
import Pay from "./comps/Pay";
import ContactUs from "./comps/ContactUs";
import Weather from "./comps/Weather.js";
import Maps from "./comps/Maps.js";
import "../node_modules/leaflet/dist/leaflet.css"
import moment from 'moment'
import Gallery from "./comps/Gallery.js";

import lo from "./Img/lo.png"
import { AwesomeButtonSocial, defaultStyles } from 'react-awesome-button';
const pop = {
  animation: animations.popIn,
  durationOut: 1000000

}
const slide = {
  animation: animations.slideIn

}


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClick: true,
      city: 'Tel Aviv',
      prevScrollpos: window.pageYOffset,
      visible: false
    };

  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  componentWillMount() {
    var pa = "/";
    if (JSON.stringify(window.location.pathname) !== JSON.stringify(pa)) {
      this.setState({ isClick: false });
    }
    let count = 0;
    Count.saveDataBase(count);

    const bodyElt = document.querySelector("body");
    bodyElt.style.backgroundColor = "whitesmoke";


  }
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos < currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible: !this.state.visible
    });
  };


  onChangeLink = () => {
    if (JSON.stringify(window.location.pathname) !== "/" && this.state.isClick === true) {
      this.setState({ isClick: false })
    }
  }





  render() {

    const route = (
      <Switch>
        <Route path={"/OurDogs"} component={OurDogs} />
        <Route path={"/Store"} component={Store} />
        <Route path={"/Pay"} component={Pay} />
        <Route path={"/ContactUs"} component={ContactUs} />

      </Switch>
    );

    return (
      <div>
        {this.state.isClick ?
          (
            <div className="container-fluid" style={{paddingLeft:"0", paddingRight:"0"}}>
              <Navbar className="position-sticky fixed-top" style={{ backgroundColor: "#97BA00" }}  >
                <Navbar.Brand href="/"><img src={lo} width="45" alt="logo" onClick={this.onChangeLink} /></Navbar.Brand>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <Link to="/OurDogs" className="nav-link" style={{ color: "white", fontFamily: 'Comfortaa, cursive' }} onClick={this.onChangeLink}>
                        Our Dogs
               </Link>
                    </li>
                    <li className="nav-item active"><Link to="/store" className="nav-link" style={{ fontFamily: 'Comfortaa, cursive', color: "white" }} onClick={this.onChangeLink}>
                      Store
               </Link>  </li>
                    <li className="nav-item active"><Link to="/ContactUs" className="nav-link" style={{ fontFamily: 'Comfortaa, cursive', color: "white" }} onClick={this.onChangeLink}>
                      Contact Us
               </Link>  </li>
                    <li className="nav-item active"><Link to="/pay" className="nav-link" style={{ fontFamily: 'Comfortaa, cursive', color: "white" }} onClick={this.onChangeLink}>
                      <AddShoppingCartIcon />{Count.getDataBase()}
                    </Link>  </li>

                  </ul>
                </div><p style={{ color: "white", float: "right", paddingRight: "10px", fontFamily: 'cursive' }}>{moment().format('L')}</p>
                <img src="https://spca.co.il/wp-content/themes/Klavtool/images/dog.svg" width="40" alt="dog" />
              </Navbar>
              <div className="container-fluid row d-flex justify-content-between bd-highlight" style={{ marginBottom: "3%" }}>
                <div className="p-2 bd-highlight col-md-4 text-center">
                  <HideUntilLoaded
                    animationIn="bounceIn"
                    imageToLoad="https://picsum.photos/2200/1200/"
                    Spinner={() => <div>Loading...</div>}
                  >
                    <img src={Adoption} width="250" alt="" /> </HideUntilLoaded>
                </div>
                <div className="col-md-4 p-2 bd-highlight text-center">

                  <Card className="form" style={slide} bg="light" text="black" alt="" style={{ height: '19rem', backgroundColor: "white", borderColor: "#97BA00" }}>
                    <Card.Body>
                      <Card.Title style={{ fontFamily: 'Comfortaa, cursive' }}><h2 style={pop} >Adopt a dog today!</h2>
                      </Card.Title>
                      <Card.Text>
                        <p className="pet">From more than 17,000 dogs shelters & rescues
                        The world's cutest dog are just waiting for you to take them home.
      Get ready for their boundless love and loyalty!</p>
                      </Card.Text>
                      <p className="call"><img src={petfoot} width="25" alt="dog" />  Woof Woof call now!</p>
                    </Card.Body>
                  </Card></div>
                <div className="p-2 bd-highlight col-md-4 text-center">
                  <HideUntilLoaded
                    imageToLoad="https://picsum.photos/2200/1200/"
                    Spinner={() => <div>Loading...</div>}
                  >
                    <img className="image" src={Adoption2} alt="" width="150" /></HideUntilLoaded>

                </div>
              </div>
              <Layout>{route}</Layout>

              <Gallery />

              <div className="d-flex justify-content-center bd-highlight" style={{ height: "30em", width: "100%" }}>

                <div className="p-2 bd-highlight col-md-6 text-center" >
                  <div style={{ float: "center", fontSize: "20px", justifyContent: "flex-end", marginTop: "10%", fontFamily: 'Comfortaa, cursive' }}>
                    <p><b>Location:</b> 200 Centre Street, New York, NY 10013, United States</p>
                    <p><b>Hours:</b> 12-7pm, Tuesdays-Sundays, Closed Mondays</p>
                    <p><b>Phone:</b> 212.274.8511 or 212.274.8542</p>
                    <p><b>Email:</b> info@spcadogs.co.il</p></div></div>




                <div className="p-2 bd-highlight col-md-6 text-center" >

                  <Maps className="map" /><br />
                  <Weather /></div></div>


            </div>
          ) :
          (
            <div>
              <Navbar className="position-sticky fixed-top" style={{ backgroundColor: "#97BA00" }} >
                <Navbar.Brand href="/"><img src={lo} width="45" alt="dog" onClick={this.onChangeLink} /></Navbar.Brand>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <Link to="/OurDogs" className="nav-link" style={{ fontFamily: 'Comfortaa, cursive', color: "white" }} onClick={this.onChangeLink}>
                        Our Dogs
         </Link></li>
                    <li className="nav-item active"><Link to="/store" className="nav-link" style={{ fontFamily: 'Comfortaa, cursive', color: "white" }} onClick={this.onChangeLink}>
                      Store
         </Link>  </li>
                    <li className="nav-item active"><Link to="/ContactUs" className="nav-link" style={{ fontFamily: 'Comfortaa, cursive', color: "white" }} onClick={this.onChangeLink}>
                      Contact Us
               </Link>  </li>
                    <li className="nav-item active"><Link to="/pay" className="nav-link" style={{ fontFamily: 'Comfortaa, cursive', color: "white" }} onClick={this.onChangeLink}>
                      <AddShoppingCartIcon />{Count.getDataBase()}
                    </Link>  </li>
                  </ul>
                </div>        <p style={{ color: "white", float: "right", paddingRight: "10px", fontFamily: 'cursive' }}>{moment().format('L')}</p>
                <img src="https://spca.co.il/wp-content/themes/Klavtool/images/dog.svg" width="40" alt="dog" />

              </Navbar>
              <Layout>{route}</Layout></div>)}




        <Navbar className="position-absulote sticky-bottom" style={{ marginTop: "2%", bottom: "0", backgroundColor: "#8e8e8e", width: "100%", justifyContent: "center" }} >
          <AwesomeButtonSocial
            size="icon"
            type="facebook"
            cssModule={defaultStyles}
            url="https://facebook.com/caferati.me"
          />
          <AwesomeButtonSocial
            size="icon"
            type="pinterest"
            cssModule={defaultStyles}
            url="https://facebook.com/caferati.me"
          />
          <AwesomeButtonSocial
            size="icon"
            type="twitter"
            cssModule={defaultStyles}
            url="https://facebook.com/caferati.me"
          />
          <AwesomeButtonSocial
            size="icon"
            type="instagram"
            cssModule={defaultStyles}
            url="https://instagram.com/caferati.me"
          />
          <p style={{ marginLeft: "3px" }}>© 2020 All rights reserved — Spca Dogs</p>

        </Navbar>


      </div>);
  }
}

export default Home;