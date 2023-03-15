import {
  Button,
  Container,
  Image,
  Nav,
  Navbar as NavbarBs,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import { useContext } from "react";
import "./NavBar.css";

export default function NavBar() {
  const { openCart, cartQuantity } = useShoppingCart();

  const { user } = useContext(AuthContext);

  return (
    <NavbarBs sticky="top" className="NavBar bg-white shadow-sm mb-3">
      <Container fluid>
        <Nav className="me-auto justify-content-center">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Nav>
          {user ? (
            <span>
              {" "}
              {!!user.photoURL && (
                <Image
                  style={{
                    width: "3rem",
                    height: "3rem",
                    position: "relative",
                  }}
                  className="Image rounded-circle d-flex justify-contnet align-items-center"
                  src={user.photoURL}
                  alt=""
                />
              )}
            </span>
          ) : (
            <Button onClick={signInWithGoogle}>Sign In</Button>
          )}

          <Button onClick={signOut}>Sign Out</Button>

          {cartQuantity > 0 && (
            <Button
              onClick={openCart}
              style={{ width: "3rem", height: "3rem", position: "relative" }}
              variant="outline-primary"
              className="rounded-circle"
            >
              <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M60.0555 200C54.5504 200 49.8394 198.043 45.9224 194.13C41.9988 190.21 40.037 185.5 40.037 180C40.037 174.5 41.9988 169.79 45.9224 165.87C49.8394 161.957 54.5504 160 60.0555 160C65.5606 160 70.2716 161.957 74.1885 165.87C78.1122 169.79 80.074 174.5 80.074 180C80.074 185.5 78.1122 190.21 74.1885 194.13C70.2716 198.043 65.5606 200 60.0555 200ZM160.148 200C154.643 200 149.932 198.043 146.015 194.13C142.091 190.21 140.129 185.5 140.129 180C140.129 174.5 142.091 169.79 146.015 165.87C149.932 161.957 154.643 160 160.148 160C165.653 160 170.367 161.957 174.291 165.87C178.208 169.79 180.166 174.5 180.166 180C180.166 185.5 178.208 190.21 174.291 194.13C170.367 198.043 165.653 200 160.148 200ZM51.5476 40L75.5698 90H145.635L173.16 40H51.5476ZM42.0388 20H189.675C193.512 20 196.431 21.7067 198.433 25.12C200.435 28.54 200.519 32 198.684 35.5L163.151 99.5C161.316 102.833 158.853 105.417 155.764 107.25C152.681 109.083 149.305 110 145.635 110H71.0657L60.0555 130H180.166V150H60.0555C52.5486 150 46.8766 146.707 43.0398 140.12C39.2029 133.54 39.0361 127 42.5393 120.5L56.0518 96L20.0185 20H0V0H32.5301L42.0388 20Z"
                  fill="black"
                />
              </svg>
              <div
                className="rounded-circle bg-danger d-flex justify-contnet-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate (-25%, 25%)",
                }}
              >
                {cartQuantity}
              </div>
            </Button>
          )}
        </Nav>
      </Container>
    </NavbarBs>
  );
}