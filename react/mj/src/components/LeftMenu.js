import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


const styles = {
    list: {
        width: 130,
    },
    listItem: {
        padding: '6px 12px 6px 12px',
    }
}

const LeftMenu = props => {
    const { classes, isShow, handleClose, handleClick } = props

    return (
        <div>
            <Drawer open={isShow} onClick={handleClose}>
                <div className={classes.list}>
                    <List component="nav">
                        <ListItem button className={classes.listItem} component={Link} to={'/home/test'} onClick={() => handleClick('test')}>
                            <ListItemText primary="测试页面"/>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    )
}

export default withStyles(styles)(LeftMenu)