import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function App() {
  let [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(function (response) {
        // handle success
        console.log(response.data.results);
        setdata(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });

  return (
    <>
      <div>
        <div className="title">
          <h1>The Rick and Morty API</h1>
        </div>
        <div className="main d-flex">
          <Container fluid>
            <Row>
              {data.map((ele, ind) => {
                return (
                  <>
                    <Col lg='6'>
                      <div className="item d-flex">
                        <div className="item-img">
                          <img src={ele.image}></img>
                        </div>
                        <div className="info">
                          <h3 className="info-title">{ele.name}</h3>
                          <div className="sec1">
                            <span className="status">{ele.status}</span>
                            <span className="species">{ele.species}</span>
                          </div>
                          <div className="sec2">
                            <span className="text">Last Known Location:</span>
                            <p className="location-name">{ele.origin.name}</p>
                          </div>
                          <div className="sec3">
                            <span className="text">First seen in:</span>
                            <p className="location-name">{ele.location.name}</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default App;
