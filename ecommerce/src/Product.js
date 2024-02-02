import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { IoAnalyticsOutline } from "react-icons/io5";
import { FaCircleDot } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
function Product() {
  let [item, setitem] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then(function (response) {
        // handle success
        console.log(response.data.products);
        setdata(response.data.products);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });
  return (
    <>
      <div className="main-product">
        <Container>
          <Row>
            {data.map((ele, ind) => {
              return (
                <Col lg={6}>
                  <div className="product" id="1">
                    <div className="imges">
                      <img src={ele.images[0]}></img>
                    </div>
                    <div className="content">
                      <div className="info">
                        <h3 className="ruppies"><FaRupeeSign/>{ele.price}</h3>
                        <h4 className="m-0">{ele.brand}</h4>
                      </div>
                      <div className="rate">
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                        <IoMdStarHalf></IoMdStarHalf>
                      </div>
                      <h5 className="m-0">
                        <CiDiscount1
                          style={{ color: "green", marginRight: "6px" }}
                        />
                        {ele.rating}
                      </h5>
                      <div className="dis">
                        <span>{ele.discountPercentage}% OFF</span>
                      </div>
                      stock <IoAnalyticsOutline></IoAnalyticsOutline>
                      <span className="m-2">{ele.stock}</span>
                      <p style={{ color: "gray", fontWeight: "350" }}>
                        {ele.description}
                      </p>
                      <p>
                        <FaCircleDot style={{ color: "#0078AD" }}></FaCircleDot>
                        {ele.category}
                      </p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Product;
