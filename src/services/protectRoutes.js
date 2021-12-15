import React from "react"
import { Route } from "react-router-dom"
import { Redirect } from "react-router-dom"

export const AuthProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
        {...rest}

        render = { props => {
            if (JSON.parse(sessionStorage.getItem("amAuthenticated")) == true) {
                return <Component {...props} />
            }
            else {
                return <Redirect to={{
                    pathname: "/login", 
                    state: {
                        from: props.location
                    }
                }} />
            }
        }}
        />
    )
}

export const NonAuthProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
        {...rest}

        render = { props => {
            if (JSON.parse(sessionStorage.getItem("amAuthenticated")) == true) {
                return <Redirect to={{
                    pathname: "/login", 
                    state: {
                        from: props.location
                    }
                }} />
            }
            else {
                return <Component {...props} />
            }
        }}
        />
    )
}