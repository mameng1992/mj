import React,{Component} from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Buttons from 'components/Buttons'
import { queryUserInfo, updateUserInfo } from "actions";
import refresh from 'commonjs/refresh'
import InputText from 'components/InputText'
import OpenLoading from 'components/OpenLoading'




const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: window.innerHeight + 'px',
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    top: {
        textAlign: 'center',
        padding: theme.spacing.unit * 2,
        color: theme.palette.text.secondary,
    },
})



@refresh(['person'])
class Person extends Component {
    constructor(props, context) {
        super(props, context)

        this.onFieldChange = this.onFieldChange.bind(this)
    }

    componentWillMount() {
        setTimeout(() => this.props.queryUserInfo(),1000)
    }

    componentWillUnmount() {
        const obj = this.props.person.set('isQuery',false)
        this.props.updateUserInfo(obj)
    }

    onFieldChange(e) {
        //console.log(e.target.id)
    }

    render() {
        if(this.props.person.get('isQuery')) {
            return (
                <div>
                    <InputText list={this.props.person.get('userInfo')} onChange={this.onFieldChange}/>
                </div>
            )
        } else {
            return (
                <div>
                    <OpenLoading />
                </div>
            )
        }

    }
}


const mapStateToProps = state => {
    return {
        person: state.get('person'),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        queryUserInfo: (...args) => dispatch(queryUserInfo(...args)),
        updateUserInfo: (...args) => dispatch(updateUserInfo(...args)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Person))












