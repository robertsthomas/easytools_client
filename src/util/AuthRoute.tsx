import React from "react";
import {
	Route,
	Redirect,
	RouteProps,
	RouteComponentProps
} from "react-router-dom";
import { connect } from "react-redux";

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
}: Props): JSX.Element => (
	<Route
		{...rest}
		render={props =>
			authenticated === true ? <Redirect to='/' /> : <Component {...props} />
		}
	/>
);

const mapStateToProps = (state: any) => ({
	authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(AuthRoute);
