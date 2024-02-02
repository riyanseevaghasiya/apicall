import React, { useEffect, useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { FaAngleRight } from "react-icons/fa6";

function Category() {
  let [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setdata(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
});
  return (
    <>
        <div className="main-box">
            <Container fluid>
                <Row>
                    <Col lg={3}>
                        <div className="category"> 
                            <h3 className="category-title">Categories</h3>
                            <div>
                                {data.map((ele,ind)=>{
                                    return(
                                        <>
                                            <p><FaAngleRight/>{ele}</p>
                                        </>
                                    );
                                })}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  );
}
export default Category;
