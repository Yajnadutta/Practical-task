import React from "react";
import App from "./App";
import { BrowserRouter as Router, Route,Switch,withRouter} from "react-router-dom";
import Summary from "./Summary.js";
export class Navigate extends React.Component{
    render(){
        return(
                <>
<Router>
      <div>
        <Switch>
        <Route exact path="/" component={App} />
        <Route  path="/summary" component={Summary} />

        </Switch>

        </div>

        </Router>

                </>

        )
    }
}