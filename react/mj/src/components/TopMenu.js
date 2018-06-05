import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import ExitToApp from '@material-ui/icons/ExitToApp'
import Tooltip from '@material-ui/core/Tooltip'

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
        textAlign: 'left',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
}

const theme = createMuiTheme({
    palette: {
        primary: { main: '#2C98F0' },
    },
})


const TopMenu = props => {

    const { classes, title, onLeftShow } = props

    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton onClick={onLeftShow} className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>

                        <Typography variant="title" color="inherit" className={classes.flex}>
                            {title}
                        </Typography>
                        <Tooltip title="个人中心">
                            <IconButton color='inherit'>
                                <AccountCircle />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="退出">
                            <IconButton color='inherit' onClick={props.onExit}>
                                <ExitToApp />
                            </IconButton>
                        </Tooltip>
                    </Toolbar>
                </AppBar>
            </div>
        </MuiThemeProvider>

    )
}

export default withStyles(styles)(TopMenu)