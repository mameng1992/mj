import React from 'react'
import Bundle from 'components/BundleImport'
import { Route, Switch, Redirect } from 'react-router-dom'
import Person from 'containers/home/person'
import Test from 'containers/home/test'

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/home" component={Person} />
            <Route exact path="/home/test" component={Test} />
            <Route render={() => <Redirect to="/error"/>} />
        </Switch>
    )
}

export default Routes