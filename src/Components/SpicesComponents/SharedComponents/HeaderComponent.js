import React from "react";
import { Container, Row, Col, Button, Dropdown, Modal } from "react-bootstrap";
import logo from ".././../../assets/img/logo.png";
import { theme } from "../../../theme";
class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProducts: false,
      showSpices: false,
      showPulses: false,
      showCereals: false,
      showRice: false,
      showWheat: false,
      showMaize: false,
      showOats: false,
    };
    // this._renderAllProducts = this._renderAllProducts.bind(this);
  }

  _renderAllProducts = () => (
    <div
      style={{
        marginTop: 50,
        //   backgroundColor: "red",
        display: "inline-block",
      }}
    >
      <span
        style={{
          color: this.state.showProducts
            ? theme.main_color_dark
            : theme.text_med_color,
          fontWeight: "300",
          fontSize: 20,
          borderBottom: this.state.showProducts
            ? "3px solid " + theme.main_color_dark
            : "none",
          transitionTimingFunction: "ease-in-out",
          transition: ".2s",
        }}
        onMouseEnter={() => {
          this.setState({
            showPulses: false,
            showProducts: true,
            showCereals: false,
            showSpices: false,
            showRice: false,
            showWheat: false,
            showMaize: false,
            showOats: false,
          });
        }}
      >
        All Products
      </span>
      <div
        style={{
          backgroundColor: "red",
          position: "absolute",
          top: 110,
          display: this.state.showProducts ? "block" : "none",
        }}
        onMouseLeave={() => {
          this.setState({ showProducts: false });
        }}
      >
        <span>some contents</span>
      </div>
    </div>
  );

  _renderSpices = () => (
    <div
      style={{
        marginTop: 50,
        //   backgroundColor: "red",
        display: "inline-block",
        marginLeft: 30,
      }}
    >
      <span
        style={{
          color: this.state.showSpices
            ? theme.main_color_dark
            : theme.text_med_color,
          fontWeight: "300",
          fontSize: 20,
          borderBottom: this.state.showSpices
            ? "3px solid " + theme.main_color_dark
            : "none",
          transitionTimingFunction: "ease-in-out",
          transition: ".2s",
        }}
        onMouseEnter={() => {
          this.setState({
            showPulses: false,
            showProducts: false,
            showCereals: false,
            showSpices: true,
            showRice: false,
            showWheat: false,
            showMaize: false,
            showOats: false,
          });
        }}
      >
        Spices
      </span>
      <div
        style={{
          backgroundColor: "red",
          position: "absolute",
          top: 110,
          display: this.state.showSpices ? "block" : "none",
        }}
        onMouseLeave={() => {
          this.setState({ showSpices: false });
        }}
      >
        <span>some contents</span>
      </div>
    </div>
  );

  //   showPulses: true,
  //   showProducts: false,
  //   showCereals: false,
  //   showSpices: false,
  //   showRice: false,
  //   showWheat: false,
  //   showMaize: false,
  //   showOats: false,
  _renderPulses = () => (
    <div
      style={{
        marginTop: 50,
        //   backgroundColor: "red",
        display: "inline-block",
        marginLeft: 30,
      }}
    >
      <span
        style={{
          color: this.state.showPulses
            ? theme.main_color_dark
            : theme.text_med_color,
          fontWeight: "300",
          fontSize: 20,
          borderBottom: this.state.showPulses
            ? "3px solid " + theme.main_color_dark
            : "none",
          transitionTimingFunction: "ease-in-out",
          transition: ".2s",
        }}
        onMouseEnter={() => {
          this.setState({
            showPulses: true,
            showProducts: false,
            showCereals: false,
            showSpices: false,
            showRice: false,
            showWheat: false,
            showMaize: false,
            showOats: false,
          });
        }}
      >
        Pulses
      </span>
      <div
        style={{
          backgroundColor: "red",
          position: "absolute",
          top: 110,
          display: this.state.showPulses ? "block" : "none",
        }}
        onMouseLeave={() => {
          this.setState({ showPulses: false });
        }}
      >
        <span>some contents</span>
      </div>
    </div>
  );

  _renderCereals = () => (
    <div
      style={{
        marginTop: 50,
        //   backgroundColor: "red",
        display: "inline-block",
        marginLeft: 30,
      }}
    >
      <span
        style={{
          color: this.state.showCereals
            ? theme.main_color_dark
            : theme.text_med_color,
          fontWeight: "300",
          fontSize: 20,
          borderBottom: this.state.showCereals
            ? "3px solid " + theme.main_color_dark
            : "none",
          transitionTimingFunction: "ease-in-out",
          transition: ".2s",
        }}
        onMouseEnter={() => {
          this.setState({
            showPulses: false,
            showProducts: false,
            showCereals: true,
            showSpices: false,
            showRice: false,
            showWheat: false,
            showMaize: false,
            showOats: false,
          });
        }}
      >
        Cerials
      </span>
      <div
        style={{
          backgroundColor: "red",
          position: "absolute",
          top: 110,
          display: this.state.showCereals ? "block" : "none",
        }}
        onMouseLeave={() => {
          this.setState({ showCereals: false });
        }}
      >
        <span>some contents</span>
      </div>
    </div>
  );

  _renderRice = () => (
    <div
      style={{
        marginTop: 50,
        //   backgroundColor: "red",
        display: "inline-block",
        marginLeft: 30,
      }}
    >
      <span
        style={{
          color: this.state.showRice
            ? theme.main_color_dark
            : theme.text_med_color,
          fontWeight: "300",
          fontSize: 20,
          borderBottom: this.state.showRice
            ? "3px solid " + theme.main_color_dark
            : "none",
          transitionTimingFunction: "ease-in-out",
          transition: ".2s",
        }}
        onMouseEnter={() => {
          this.setState({
            showPulses: false,
            showProducts: false,
            showCereals: false,
            showSpices: false,
            showRice: true,
            showWheat: false,
            showMaize: false,
            showOats: false,
          });
        }}
      >
        Rice
      </span>
      <div
        style={{
          backgroundColor: "red",
          position: "absolute",
          top: 110,
          display: this.state.showRice ? "block" : "none",
        }}
        onMouseLeave={() => {
          this.setState({ showRice: false });
        }}
      >
        <span>some contents</span>
      </div>
    </div>
  );

  _renderWheat = () => (
    <div
      style={{
        marginTop: 50,
        //   backgroundColor: "red",
        display: "inline-block",
        marginLeft: 30,
      }}
    >
      <span
        style={{
          color: this.state.showWheat
            ? theme.main_color_dark
            : theme.text_med_color,
          fontWeight: "300",
          fontSize: 20,
          borderBottom: this.state.showWheat
            ? "3px solid " + theme.main_color_dark
            : "none",
          transitionTimingFunction: "ease-in-out",
          transition: ".2s",
        }}
        onMouseEnter={() => {
          this.setState({
            showPulses: false,
            showProducts: false,
            showCereals: false,
            showSpices: false,
            showRice: false,
            showWheat: true,
            showMaize: false,
            showOats: false,
          });
        }}
      >
        Wheat
      </span>
      <div
        style={{
          backgroundColor: "red",
          position: "absolute",
          top: 110,
          display: this.state.showWheat ? "block" : "none",
        }}
        onMouseLeave={() => {
          this.setState({ showWheat: false });
        }}
      >
        <span>some contents</span>
      </div>
    </div>
  );

  _renderMaize = () => (
    <div
      style={{
        marginTop: 50,
        //   backgroundColor: "red",
        display: "inline-block",
        marginLeft: 30,
      }}
    >
      <span
        style={{
          color: this.state.showMaize
            ? theme.main_color_dark
            : theme.text_med_color,
          fontWeight: "300",
          fontSize: 20,
          borderBottom: this.state.showMaize
            ? "3px solid " + theme.main_color_dark
            : "none",
          transitionTimingFunction: "ease-in-out",
          transition: ".2s",
        }}
        onMouseEnter={() => {
          this.setState({
            showPulses: false,
            showProducts: false,
            showCereals: false,
            showSpices: false,
            showRice: false,
            showWheat: false,
            showMaize: true,
            showOats: false,
          });
        }}
      >
        Maize
      </span>
      <div
        style={{
          backgroundColor: "red",
          position: "absolute",
          top: 110,
          display: this.state.showMaize ? "block" : "none",
        }}
        onMouseLeave={() => {
          this.setState({ showMaize: false });
        }}
      >
        <span>some contents</span>
      </div>
    </div>
  );

  _renderOats = () => (
    <div
      style={{
        marginTop: 50,
        //   backgroundColor: "red",
        display: "inline-block",
        marginLeft: 30,
      }}
    >
      <span
        style={{
          color: this.state.showOats
            ? theme.main_color_dark
            : theme.text_med_color,
          fontWeight: "300",
          fontSize: 20,
          borderBottom: this.state.showOats
            ? "3px solid " + theme.main_color_dark
            : "none",
          transitionTimingFunction: "ease-in-out",
          transition: ".2s",
        }}
        onMouseEnter={() => {
          this.setState({
            showPulses: false,
            showProducts: false,
            showCereals: false,
            showSpices: false,
            showRice: false,
            showWheat: false,
            showMaize: false,
            showOats: true,
          });
        }}
      >
        Oats
      </span>
      <div
        style={{
          backgroundColor: "red",
          position: "absolute",
          top: 110,
          display: this.state.showOats ? "block" : "none",
        }}
        onMouseLeave={() => {
          this.setState({ showOats: false });
        }}
      >
        <span>some contents</span>
      </div>
    </div>
  );

  render() {
    return (
      <Container
        fluid
        style={{
          backgroundColor: theme.main_color_light,
          height: 100,
          boxShadow: "2px 4px 5px -1px rgba(0,0,0,0.16)",
        }}
      >
        <Container>
          <Row>
            <Col md={2}>
              <img
                src={logo}
                alt="logo"
                style={{ width: 90, height: 90, marginTop: 5 }}
              />
            </Col>
            <Col
            //  style={{ backgroundColor: "red" }}
            >
              <this._renderAllProducts />
              <this._renderPulses />
              <this._renderSpices />
              <this._renderCereals />
              <this._renderRice />
              <this._renderWheat />
              <this._renderMaize />
              <this._renderOats />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default HeaderComponent;
