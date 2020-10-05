import React from 'react'
import { Route, Switch } from "wouter";
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const Router = () => {
    return (
        <Switch>
            <Route path="/:category?">
                {params => (
                    <Home category={params.category} />
                )}
            </Route>
            <Route path="/:rest*">
                {(params) => <NotFound />}
            </Route>
        </Switch>
    )
}

export default Router