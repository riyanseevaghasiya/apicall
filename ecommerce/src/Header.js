import logo from "./img/logo.svg";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaSistrix, FaAngleDown, FaCartShopping, FaEllipsisVertical,} from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
function Header() {
  return (
    <>
      <div className="head-background">
        <div className="fixed">
          <Container>
            <Row>
              <Col className="d-flex">
                <div className="main">
                  <div className="sub">
                    <div className="d-flex">
                      <div className="logo-img d-flex">
                        <img src={logo}></img>
                      </div>
                      <div className="input-box">
                        <i className="search">
                          <FaSistrix />
                        </i>
                        <input
                          type="text"
                          placeholder="Search for Product,Brands and More"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="main">
                  <div className="sub2 d-flex">
                    <div className="one">
                      <i className="user">
                        <FaRegUserCircle />
                      </i>
                      <span className="user-text">Login</span>
                      <i className="down">
                        <FaAngleDown />
                      </i>
                    </div>
                    <div className="one">
                      <i className="cart">
                        <FaCartShopping />
                      </i>
                      <span className="user-cart">Cart</span>
                    </div>
                    <div className="one">
                      <i className="cishop">
                        <CiShop />
                      </i>
                      <span className="cishop-text">Become a Seller</span>
                      <i className="dot">
                        <FaEllipsisVertical />
                      </i>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
export default Header;
