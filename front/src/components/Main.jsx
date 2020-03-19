import React from "react";
import {Route, Switch} from "react-router-dom";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

import RegisterContainer from "../containers/RegisterContainer"
import LogInContainer from "../containers/LogInContainer"

class Main extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
              <LogInContainer/>
              <RegisterContainer/>
            </div>
        )
    }

}

export default connect(null, null)(Main)
