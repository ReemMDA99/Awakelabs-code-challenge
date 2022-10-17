// import components
import { Component } from "react";
import { withRouter } from "../with-router";

class User extends Component {
    constructor(props) {
        // When you pass props to super, the props get assigned to (this).
      super(props);
    //   console.log(this.props) //props will get logged.
    }
}
  
// export User component
export default withRouter(User);