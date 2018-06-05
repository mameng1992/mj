import React from 'react'
import Bundle from 'components/BundleImport'
import { Route, Switch, Redirect } from 'react-router-dom'
import Person from 'containers/home/person'

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/home" component={Person} />
        </Switch>
    )
}

export default Routes