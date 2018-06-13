import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'left',
    },
    textField: {
        marginLeft: theme.spacing.unit * 5,
        marginRight: theme.spacing.unit * 5,
        width: 200,
    },
})


const InputText = props => {

    const { classes, list, onChange } = props

    let listField = []
    list.forEach((v, k) => listField.push(
        <TextField required={v.get('required')} key={k}
                   id={k}
                   label={v.get('label')}
                   className={classes.textField}
                   defaultValue={v.get('defaultValue')}
                   margin="normal"
                   onChange={onChange}
        />
    ))

    return (
        <div className={classes.root}>
            <Grid item xs={12} style={{paddingTop: '4px'}}>
                <Paper className={classes.paper}>
                    {listField}
                </Paper>
            </Grid>
        </div>
    )
}


export default withStyles(styles)(InputText)