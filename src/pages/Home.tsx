import { useContext, useState } from "react";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
import AuthContext from "../context/AuthContext";

interface ICarouselItem {
  img: string;
  alt: string;
  title: string;
  text: string;
}

const carouselItems: ICarouselItem[] = [
  {
    img: "/imgs/shopbag.jpg",
    alt: "First slide",
    title: "Welcome to Shopping Cart",
    text: "A store for your shopping needs",
  },
  {
    img: "/imgs/manshopping.jpg",
    alt: "Second slide",
    title: "Shop our new appearals section",
    text: 'We have created our own clothing line called "Shop&Cart"',
  },
  {
    img: "/imgs/shoppingcart.jpg",
    alt: "Third slide",
    title: "Groceries",
    text: "Meal prep and find quality food products. All our groceries are sourced from local distributors within the U.S.",
  },
];

export default function Home() {
  const { user, account, setAccount } = useContext(AuthContext);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any): void => {
    setIndex(selectedIndex);
  };

  return (
    <section>
      <Container fluid>
        {user && account ? (
          <>
            <Row className="top-row justify-content-center">
              <Col>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                  {carouselItems.map((item: ICarouselItem, i: number) => (
                    <Carousel.Item key={i}>
                      <img
                        className="d-block w-100"
                        src={item.img}
                        alt={item.alt}
                      />
                      <Carousel.Caption>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>
            </Row>
            <Row className="middle-row justify-content-center">
              <Row>
                <Col className="col-sm-10" style={{ marginTop: "10px" }}>
                  <h2>Looking to Browse?</h2>
                  <p>
                    Find the goods your looking for! Use our store to browse
                    through our catalog and fill up your cart!
                  </p>
                </Col>
              </Row>

              <Col
                xs={8}
                sm={5}
                md={5}
                lg={4}
                xl={3}
                className="mb-4 d-flex justify-content-center"
              >
                <Card
                  style={{ width: "100%", maxWidth: "300px", height: "auto" }}
                >
                  <Card.Img
                    variant="top"
                    src="/imgs/microsoftproducts.jpg"
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                  <Card.Body className="d-flex flex-column justify-content-space-between">
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                      Mircosoft Products
                    </Card.Title>
                    <Card.Text>
                      Shop the Microsoft collection which includes: Surface Pro,
                      Surface Headphones, Xbox Series X, and Microsoft 365
                    </Card.Text>
                    <Link to={"/store"}>
                      <Button
                        variant="primary"
                        className="go-to-store"
                        style={{ width: "100%" }}
                      >
                        Go to store
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                xs={8}
                sm={5}
                md={5}
                lg={4}
                xl={3}
                className="mb-4 d-flex justify-content-center"
              >
                <Card
                  style={{ width: "100%", maxWidth: "300px", height: "auto" }}
                >
                  <Card.Img
                    variant="top"
                    src="/imgs/appletech.jpg"
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                  <Card.Body className="d-flex flex-column justify-content-space-between">
                    <Card.Title className="d-flex  align-items-baseline mb-4">
                      Apple Products
                    </Card.Title>
                    <Card.Text>
                      Browse through apple tech such as: iPhone 14 Pro, Apple
                      Watch Series, IPad, MacBook Pro and AirPods
                    </Card.Text>
                    <Link to={"/store"}>
                      <Button
                        variant="primary"
                        className="go-to-store"
                        style={{ width: "100%" }}
                      >
                        Go to store
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                xs={8}
                sm={5}
                md={5}
                lg={4}
                xl={3}
                className="mb-4 d-flex justify-content-center"
              >
                <Card
                  style={{ width: "100%", maxWidth: "300px", height: "auto" }}
                >
                  <Card.Img
                    variant="top"
                    src="/imgs/mavicpro.jpg"
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                  <Card.Body className="d-flex flex-column justfiy-content-space-between">
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                      DJI Products
                    </Card.Title>
                    <Card.Text>
                      Into Drones? Shop for DJI Mavic Pro, DJI Mini, DJI Avata
                      and Osmo Mobile.
                    </Card.Text>
                    <Link to={"/store"}>
                      <Button
                        variant="primary"
                        className="go-to-store"
                        style={{ width: "100%" }}
                      >
                        Go to store
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row
              className="bottom-row justify-content-center"
              src="/imgs/careers.jpg"
            >
              <Col
                xs={12}
                sm={6}
                md={8}
                lg={10}
                xl={12}
                className="bottom-row-col d-flex flex-column align-items-center justify-content-space-evenly"
                style={{ gap: "25%" }}
              >
                <h2
                  className="shopping-cart-team"
                  style={{ marginTop: "20px", color: "white" }}
                >
                  Be Part of Shopping Cart Team Today
                </h2>
                <h5
                  className="shopping-cart-team-h5"
                  style={{
                    color: "white",
                  }}
                >
                  We take pride on finding the best talent around! join our
                  evergrowing team. Learn more about our culture and career
                  opportunities.
                </h5>
                <Link to="about/">
                  <Button
                    variant="primary"
                    size="lg"
                    className="careers-button"
                    style={{ width: "100%" }}
                  >
                    Careers
                  </Button>
                </Link>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row className="top-row justify-content-center">
              <Col>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                  {carouselItems.map((item: ICarouselItem, i: number) => (
                    <Carousel.Item key={i}>
                      <img
                        className="d-block w-100"
                        src={item.img}
                        alt={item.alt}
                      />
                      <Carousel.Caption>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>
            </Row>
            <Row className="middle-row justify-content-center">
              <Row>
                <Col className="col-sm-10" style={{ marginTop: "10px" }}>
                  <h2>Looking to Browse?</h2>
                  <p>
                    Find the goods your looking for! Use our store to browse
                    through our catalog and fill up your cart!
                  </p>
                </Col>
              </Row>

              <Col
                xs={8}
                sm={5}
                md={5}
                lg={4}
                xl={3}
                className="mb-4 d-flex justify-content-center"
              >
                <Card
                  style={{ width: "100%", maxWidth: "300px", height: "auto" }}
                >
                  <Card.Img
                    variant="top"
                    src="/imgs/microsoftproducts.jpg"
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                  <Card.Body className="d-flex flex-column justify-content-space-between">
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                      Mircosoft Products
                    </Card.Title>
                    <Card.Text>
                      Shop the Microsoft collection which includes: Surface Pro,
                      Surface Headphones, Xbox Series X, and Microsoft 365
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                xs={8}
                sm={5}
                md={5}
                lg={4}
                xl={3}
                className="mb-4 d-flex justify-content-center"
              >
                <Card
                  style={{ width: "100%", maxWidth: "300px", height: "auto" }}
                >
                  <Card.Img
                    variant="top"
                    src="/imgs/appletech.jpg"
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                  <Card.Body className="d-flex flex-column justify-content-space-between">
                    <Card.Title className="d-flex  align-items-baseline mb-4">
                      Apple Products
                    </Card.Title>
                    <Card.Text>
                      Browse through apple tech such as: iPhone 14 Pro, Apple
                      Watch Series, IPad, MacBook Pro and AirPods
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                xs={8}
                sm={5}
                md={5}
                lg={4}
                xl={3}
                className="mb-4 d-flex justify-content-center"
              >
                <Card
                  style={{ width: "100%", maxWidth: "300px", height: "auto" }}
                >
                  <Card.Img
                    variant="top"
                    src="/imgs/mavicpro.jpg"
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                  <Card.Body className="d-flex flex-column justfiy-content-space-between">
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                      DJI Products
                    </Card.Title>
                    <Card.Text>
                      Into Drones? Shop for DJI Mavic Pro, DJI Mini, DJI Avata
                      and Osmo Mobile.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row
              className="bottom-row justify-content-center"
              src="/imgs/careers.jpg"
            >
              <Col
                xs={12}
                sm={6}
                md={8}
                lg={10}
                xl={12}
                className="bottom-row-col d-flex flex-column align-items-center justify-content-space-evenly"
                style={{ gap: "25%" }}
              >
                <h2
                  className="shopping-cart-team"
                  style={{ marginTop: "20px", color: "white" }}
                >
                  Be Part of Shopping Cart Team Today
                </h2>
                <h5
                  className="shopping-cart-team-h5"
                  style={{
                    color: "white",
                  }}
                >
                  We take pride on finding the best talent around! join our
                  evergrowing team. Learn more about our culture and career
                  opportunities.
                </h5>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </section>
  );
}
