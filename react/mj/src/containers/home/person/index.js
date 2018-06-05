import React,{Component} from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Buttons from 'components/Buttons'



class Person extends Component {
    constructor(props, context) {
        super(props, context)
    }


    render() {
        return (
            <div>
                <h1>person</h1>
                <Buttons />
            </div>
        )
    }
}

export default Person












