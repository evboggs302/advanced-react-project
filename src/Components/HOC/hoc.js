import React from "react";
import axios from "axios";

function HOC(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null
      };
    }
    getData = () => {
      axios.get("/api/products").then(response => {
        console.log(response);
        this.setState({
          data: response.data
        });
      });
    };
    render() {
      return (
        <div>
          {this.state.data ? (
            <Component {...this.props} data={this.state.data} />
          ) : (
            this.getData()
          )}
        </div>
      );
    }
  };
}

export default HOC;
