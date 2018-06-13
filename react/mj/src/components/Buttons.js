import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import SaveIcon from '@material-ui/icons/Save'
import EditIcon from '@material-ui/icons/ModeEdit'
import { changeBtnSta } from 'actions'
import refresh from 'commonjs/refresh'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'


const styles = theme => ({
    speedDial: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3,
    },
})

const theme = createMuiTheme({
    palette: {
        primary: { main: '#D3D3D3' },
    },
})



@refresh(['buttons'])
class Buttons extends Component {
    constructor(props, context) {
        super(props, context)

        this.handleClose = this.handleClose.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClose() {
        const sta = {isShow : false}
        this.props.changeBtnSta(sta)
    }

    handleOpen() {
        const sta = {isShow : true}
        this.props.changeBtnSta(sta)
    }

    handleClick() {
        const sta = {isShow : !this.props.button.get('isShow')}
        this.props.changeBtnSta(sta)
    }

    render() {
        const { classes, buttons } = this.props

        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <SpeedDial
                        ariaLabel="menus"
                        className={classes.speedDial}
                        hidden={buttons.get('isHidden')}
                        icon={<SpeedDialIcon openIcon={<EditIcon />}  />}
                        open={buttons.get('isShow')}
                        onBlur={this.handleClose}
                        onClick={this.handleClick}
                        onClose={this.handleClose}
                        onFocus={this.handleOpen}
                        onMouseEnter={this.handleOpen}
                        onMouseLeave={this.handleClose}
                    >
                        <SpeedDialAction
                            key='Save'
                            icon={<SaveIcon />}
                            tooltipTitle='Save'
                        />
                        <SpeedDialAction
                            key='111'
                            icon={<SaveIcon />}
                            tooltipTitle='111'
                        />
                    </SpeedDial>
            </div>
            </MuiThemeProvider>
        )
    }

}

const mapStateToProps = state => {
    return {
        buttons: state.get('buttons'),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeBtnSta: (...args) => dispatch(changeBtnSta(...args)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Buttons))