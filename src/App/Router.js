import React from 'react'
import { Route, Switch } from "wouter";
import Home from './pages/Home'

const Router = () => {
    return (
        <Switch>
            <Route path="/:category?">
                {params => (
                    <Home category={params.category} />
                )}
            </Route>
        </Switch>
    )
}

export default Router