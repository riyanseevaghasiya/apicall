import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';

function Single() {
  let [single, setsingle] = useState({});
  let {id}=useParams()

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/1`)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setsingle(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
},[]);
  return(
      <>
        <Container>
            <Row>
                <Col>
                <div className="s_product">
                    <div className="col-2">
                        {/* {
                            single.map((item) =>{
                                return(
                                    <div className="d-flex fledx-column" >
                                      <img src={item}></img>
                                    </div>
                               )
                            })
                        } */}

                    </div>
                    <div>
                      <img src={single.thumbnail} className="single-img"></img>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </> 
  );

}
export default Single;
