import React from "react";
import firebase from "firebase";
import { firestore } from "../firebase/script";
import { Button, Container } from "react-bootstrap";
import "./home.css";

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: [],
      username: "",
      updatedName: "",
    };
  }

  render() {
    return <div>Home</div>;
  }
}

export default HomeComponent;
