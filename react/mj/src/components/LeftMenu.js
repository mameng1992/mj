import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer';


const styles = {
    list: {
        width: 120,
    },
}

const LeftMenu = props => {
    const { classes, isShow, handleClose } = props

    return (
        <div>
            <Drawer open={isShow} onClick={handleClose}>
                <div role="button">
                    <div className={classes.list}>
                        sssssssss
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default withStyles(styles)(LeftMenu)