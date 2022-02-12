import React from "react";
import { Container } from "react-bootstrap";
import { theme } from "../../theme";

class BandingComponent extends React.Component {
  render() {
    return (
      <Container
        className="mt-4"
        style={{
          //   backgroundColor: "red",
          textAlign: "center",
        }}
      >
        <div style={{ display: "inline-block" }}>
          <span
            style={{
              fontSize: 35,
              fontWeight: "bold",
              color: theme.text_dark_color,
            }}
          >
            Horeb{" "}
          </span>
          <span
            style={{
              fontSize: 35,
              color: theme.text_spices,
              fontWeight: "bold",
              fontFamily: "fantasy",
            }}
          >
            Spices
          </span>
        </div>
      </Container>
    );
  }
}

export default BandingComponent;
