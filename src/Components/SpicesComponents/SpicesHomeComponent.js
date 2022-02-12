import React from "react";
import BandingComponent from "./BrandingComponent";
import HeaderComponent from "./SharedComponents/HeaderComponent";

class SpicesHomeComponent extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <BandingComponent />
      </div>
    );
  }
}

export default SpicesHomeComponent;
