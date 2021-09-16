import { React, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { SearchField } from "../SearchField/SearchField";
import "./candidate.css";

const CandidatesUI = ({ candidates, value, search }) => {
    const filterUser = (users, val) => {

        return users.filter(user => {
         if(val === ""){
           return user
         }else if(user.name.toLowerCase().includes(val.toLowerCase())){
           return user
         }else{
           return false;
         }
       })
     };

  const filterCandidates = filterUser(candidates, value);
  if (filterCandidates.length === 0) {
    return (
      <div>
        <SearchField value={value} search={search} />
        <h1>No results</h1>
    </div>
    );
  }
  return (
    <Fragment>
        <SearchField value={value} search={search} />
        <Row className="text-center">
          {filterCandidates.map((candidate, index) => {
            return (
              <Col
                xs={12}
                md={6}
                xl={4}
                className="d-flex justify-content-center mb-5"
                key={index}
              >
                <Link to={`/candidateReport/${candidate.id}`} className="image">
                  <Card
                    border="primary"
                    bg="secondary"
                    text="white"
                  >
                    <Image
                      src={img}
                      alt="no"
                      roundedCircle
                      className="p-5"
                    />

                    <Card.Body>
                      <Card.Title className="mb-3">{candidate.name}</Card.Title>
                      <Card.Text>{candidate.email}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
    </Fragment>
  );
};

export default CandidatesUI;