import React from 'react';
import {
  Container, Navbar, Nav, Jumbotron, Row, Col, Image, Card
} from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";

/* data */
import portofolioData from './assets/data/portofolioData'

/* style */
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';

/* images */
let Avatar = '/img/avatar.webp';

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="custom-navbar" fixed="top">
        <Container>
          <Navbar.Brand href='#'>Irvan Ahmad P.</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar-nav'/>
          <Navbar.Collapse id='navbar-nav'>
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Nav.Item>
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#portofolio">Portofolio</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid style={{padding : '0px 0px' }}>
        <Jumbotron id="home" className="d-flex flex-column align-items-center justify-content-center content-full-cover">
          <h1>Irvan Ahmad P.</h1>
          <p class="h3">Professional Bio</p>
        </Jumbotron>
        <Jumbotron id="portofolio" className="d-flex flex-column align-items-center justify-content-center content-full bg-white">
          <Row>
            <h2>Portofolio</h2>
          </Row>
          <Container style={{marginTop : '25px'}}>
            <Row>
              {
                portofolioData.map((portofolioDataRow, i) =>
                  <Col className="col-portofolio-wrap" key={ i }>
                    <Card className="card-wrap">
                      <div className="image-protofolio-wrap">
                        <Image variant="top" rounded className="img-portofolio" src={ portofolioDataRow.imageUrl } alt={ portofolioDataRow.title }/>
                      </div>
                      <Card.Body>
                        <Card.Title>
                          <a className="text-dark" href={portofolioDataRow.url} title={portofolioDataRow.title}>
                            { portofolioDataRow.title }
                          </a>
                        </Card.Title>
                        <Card.Text>
                          { portofolioDataRow.content }
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              }
            </Row>
          </Container>
        </Jumbotron>
        <Jumbotron id="about" className="d-flex flex-column align-items-center justify-content-center content-full bg-light mb-0">
          <Row>
            <h2>Irvan Ahmad P.</h2>
          </Row>
          <Row>
            <Image roundedCircle className="photo-profile" src={Avatar} alt="Avatar Irvan Ahmad P."/>
          </Row>
          <Row>
            <p className="h4 text-secondary">
              Web Developer
            </p>
          </Row>
          <Row>
            <a className="btn btn-light btn-lg"  title="Linkedin"  href="https://www.linkedin.com/in/irvan-ahmad-prasetya-6306a8115/">
              <FaLinkedin/>
            </a>
            <a className="btn btn-light btn-lg"  title="Github"  href="https://github.com/IrvanAhmadPrasetya">
              <FaGithub/>
            </a>
            <a className="btn btn-light btn-lg"  title="Medium"  href="https://medium.com/@IrvanAhmadP">
                <FaMedium/>
              </a>
          </Row>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default App;
