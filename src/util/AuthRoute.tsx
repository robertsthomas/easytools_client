import React, { useState } from "react";
import {
	Route,
	Redirect,
	RouteProps,
	RouteComponentProps
} from "react-router-dom";
import { connect } from "react-redux";
import LoginModel from "../Components/LoginModel/LoginModel";

interface Props extends RouteProps {
	component: React.FC<RouteComponentProps>;
	authenticated: any;
	path: string;
	exact?: boolean;
}

const AuthRoute = ({
	component: Component,
	authenticated,
	path,
	exact,
	...rest
}: Props): JSX.Element => {
	return (
		<Route
			{...rest}
			render={props =>
				authenticated ? <Component {...props} /> : <LoginModel />
			}
		/>
	);
};

const mapStateToProps = (state: any) => ({
	authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(AuthRoute);
