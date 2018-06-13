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
        this.onTopClick = this.onTopClick.bind(this)
        this.leftClick = this.leftClick.bind(this)
    }

    componentDidMount() {
        let resize = null
        window.onresize = () => {
            resize = resize ? null : setTimeout(() =>
                document.getElementById('paper').style.height = window.innerHeight + 'px',0)
        }
    }

    componentWillReceiveProps() {

    }

    onExit() {
        this.props.loginOut(this.props)
    }

    leftClose() {
        const obj = {leftShow: false}
        this.props.changeLeftMenu(obj)
    }

    leftShow() {
        /**只有默认功能，无其他菜单**/
        // if(this.props.auth.get('menu').size === 1) {
        //     return false
        // }
        const obj = {leftShow: true}
        this.props.changeLeftMenu(obj)
    }

    onTopClick() {
        this.props.history.push('/home')
    }

    leftClick() {

    }


    render() {
        const { classes, home } = this.props
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper id='paper' className={classes.paper}>
                            <Grid item xs={12} >
                                <TopMenu
                                    onExit={this.onExit}
                                    onLeftShow={this.leftShow}
                                    title={this.props.auth.getIn(['routes','/home',this.props.location.pathname,'authorityName'])}
                                    onTopClick={this.onTopClick}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Routes />
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <LeftMenu
                    isShow={home.get('leftShow')}
                    handleClose={this.leftClose}
                    handleClick={this.leftClick}
                />
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