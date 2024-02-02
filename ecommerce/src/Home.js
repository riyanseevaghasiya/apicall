import logo from "./img/logo.svg";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaSistrix,
  FaAngleDown,
  FaCartShopping,
  FaEllipsisVertical,
} from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { IoAnalyticsOutline } from "react-icons/io5";
import { FaCircleDot } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";

function App() {
  let [data, setdata] = useState([]);
  let [item, setitem] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setdata(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then(function (response) {
        // handle success
        console.log(response.data.products);
        setitem(response.data.products);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });
  return (
    <>
      <div className="head-background">
        <Container fluid>
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
          <Row>
            <Col className="main-box">
              <div className="category">
                <h3 className="category-title">Categories</h3>
                <div>
                  {data.map((ele, ind) => {
                    return (
                      <>
                        <p>
                          <FaAngleRight />
                          {ele}
                        </p>
                      </>
                    );
                  })}
                </div>
              </div>
            </Col>
            <Col>
           
            </Col>
          </Row>
          
            
        
        </Container>
      </div>
    </>
  );
}
export default App;
