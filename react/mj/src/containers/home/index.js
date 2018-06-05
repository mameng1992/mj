import React,{Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TopMenu from 'components/TopMenu'
import { loginOut, changeLeftMenu } from 'actions'
import refresh from 'commonjs/refresh'
import Routes from 'containers/home/routes'
import LeftMenu from 'components/LeftMenu'

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



@refresh(['auth','home'])
class Home extends Component {
    constructor(props, context) {
        super(props, context)


        this.onExit = this.onExit.bind(this)
        this.leftClose = this.leftClose.bind(this)
        this.leftShow = this.leftShow.bind(this)
    }

    componentDidMount() {
        let resize = null
        window.onresize = () => {
            resize = resize ? null : setTimeout(() =>
                document.getElementById('paper').style.height = window.innerHeight + 'px',0)
        }
    }

    onExit() {
        this.props.loginOut(this.props)
    }

    leftClose() {
        const obj = {leftShow: false}
        this.props.changeLeftMenu(obj)
    }

    leftShow() {
        const obj = {leftShow: true}
        this.props.changeLeftMenu(obj)
    }


    render() {
        const { classes, home } = this.props

        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper id='paper' className={classes.paper}>
                            <Grid item xs={12} >
                                <TopMenu onExit={this.onExit} onLeftShow={this.leftShow} title={home.get('title')}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Routes onCloseHandle={this.leftClose}/>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <LeftMenu isShow={home.get('leftShow')} handleClose={this.leftClose}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.get('auth'),
        home: state.get('home'),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginOut: (...args) => dispatch(loginOut(...args)),
        changeLeftMenu: (...args) => dispatch(changeLeftMenu(...args)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home))