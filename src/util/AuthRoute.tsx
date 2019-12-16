import React from 'react'
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteProps {
    component: React.FC<RouteComponentProps>
    authenticated: any;
    path: string;
    exact?: boolean;
}

const AuthRoute = ({component: Component, authenticated, path, exact}: Props): JSX.Element => {
    return (
        <Route
            exact={exact}
            path={path}
            render={(props: RouteComponentProps) => 
                authenticated ? (
                    <Component {...props} />
                ):(
                    <Redirect
                        to="/login"
                    />
                )
            }
        />
    )
}

export default AuthRoute;