import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import AdminLandingCardsContainer from "../containers/AdminLandingCardsContainer"
import TasksAdminContainer from "../containers/TaskAdminContainer"
import NavbarContainer from "../containers/NavbarContainer"
import BannerLoginContainer from "../containers/BannerLoginContainer"
import BannerRegisterContainer from "../containers/BannerRegisterContainer"
import SingleTaskContainer from "../containers/SingleTaskContainer"
import { getLoggedUser } from "../redux/actions/login";
import RecruitContainer from "../containers/RecruitContainer"
import CreateRecruitContainer from "../containers/CreateRecruitContainer"
import UsersAdminContainer from "../containers/UsersAdminContainer"
import SingleRecruitContainer from "../containers/SingleRecruitContainer"
import SingleRecruitEditFormContainer from "../containers/SingleRecruitEditFormContainer"

import BannerWelcomeContainer from "../containers/BannerWelcomeContainer"

class Main extends React.Component {
    constructor() {
        super()
    }
    componentDidMount() {
        this.props.getLoggedUser();
    }
    render() {
        return (
            <Fragment>
                <NavbarContainer />
                <Switch>
                    <Route exact path="/" component={BannerWelcomeContainer} />
                    <Route exact path="/login" component={BannerLoginContainer} />
                    <Route exact path="/register" component={BannerRegisterContainer} />
                    <Route exact path="/myTasks/:userId" component={TasksAdminContainer} />
                    <Route exact path="/users" component={UsersAdminContainer} />
                    <Route exact path="/home" component={AdminLandingCardsContainer} />
                    <Route exact path="/recruits" component={RecruitContainer} />
                    <Route exact path="/recruit/:recruitId" component={SingleRecruitContainer} />
                    <Route exact path="/recruit/edit/:recruitId" component={SingleRecruitEditFormContainer} />
                    <Route exact path="/newRecruit" component={CreateRecruitContainer} />
                    <Route exact path="/task/:taskId" component={SingleTaskContainer} />
                </Switch>
            </Fragment>
        )
    }

}
const mapStateToProps = (state, ownProps) => {
    return {
      user: state.login.user
    };
  };
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      
      getLoggedUser: () => dispatch(getLoggedUser())
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Main)
