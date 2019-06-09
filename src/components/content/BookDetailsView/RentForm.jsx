import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { mainPallete } from '../../layout/colors';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Close from '@material-ui/icons/Close';

const styles = theme => ({
    root: {
        display: 'flex', 
        flex: 1
    },
    cardRentContent:  {
        display: 'flex',
        flexDirection: 'row', 
        alignItems: 'flex-start',
        flex: 1, 
        backgroundColor: mainPallete.richBlack, 
        margin: '20px', 
      },
      textField: {
        width: '30%',
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 2
      },

      label: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '200px',
      },
      form: {
        paddingTop: theme.spacing.unit *5,
        paddingLeft: theme.spacing.unit,
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-around',
        flex: 1,       
      }, 

      radios: {
          marginLeft: theme.spacing.unit ,
          flexDirection: 'row', 
          display: 'flex', 
          justifyContent: 'space-between', 
          width: '35%',
          marginBottom: theme.spacing.unit
      }, 
      msgArea: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '90%',
        marginBottom: '8%', 
      }, 
      rentFormButtons: {
          margin: '10px',
          display: 'flex', 
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between', 
          alignItems: 'flex-end',
        paddingRight: '2%', 

      }, 
      submitRentButton: {
          display: 'flex', 
          margin: '5px',
          marginLeft: '40%'
      }
});


class RentForm extends React.Component {
    state = {
    };

    render() {
        const { classes, rentInfo, onDataValueChange, onClose, onSend } = this.props;
        return (
            <div className={classes.root}>
            <CardContent 
                className={classes.cardRentContent}>
                <Grid 
                    container
                    direction="row"
                    justify="left"
                    alignItems="top"
                >
                    <form 
                        className={classes.form} 
                        noValidate>  
                        <FormControl>
                            <FormLabel 
                                className={classes.label}>
                                    Preffered exchange type
                            </FormLabel>
                            <RadioGroup 
                                className={classes.radios}
                                value={rentInfo.exchangeType}
                                onChange={(e) => onDataValueChange('exchangeType', e.target.value)}>

                                <FormControlLabel 
                                    value="droppOff" 
                                    control={<Radio />} 
                                    label="Drop Off" />
                                <FormControlLabel 
                                    value="meeting" 
                                    control={<Radio />} 
                                    label="Meeting" />
                            </RadioGroup>
                            <TextField
                                type= 'datetime-local'
                                id="standard-name"
                                label="Prefered exchange date"
                                className={classes.textField}
                                value={rentInfo.date}
                                margin="normal"
                                onChange={(e) => onDataValueChange('date', e.target.value)}
                            />
                            <TextField
                                id="standard-fullw-width"
                                type= 'text'
                                label="Prefered rent time"
                                className={classes.textField}
                                value={rentInfo.rentTime}
                                onChange={(e) => onDataValueChange('rentTime', e.target.value)}
                                margin="normal"
                                placeholder="e.g. 1 month"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="standard-with-placeholder"
                                multiline={true}
                                label="Messege to the owner:"
                                className={classes.msgArea}
                                value={rentInfo.message}
                                onChange={(e) => onDataValueChange('message', e.target.value)}
                                margin="normal"
                                rows={5}
                                placeholder="Type in the message to the owner"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />               
                        </FormControl>
                    </form>
                    <div 
                        className={classes.rentFormButtons}>
                        <Close 
                            color="secondary" 
                            onClick={onClose} 
                            className={classes.closeRenting}/>
                        <Button 
                            onClick={onSend} 
                            className={classes.submitRentButton}>
                                Send rent request 
                        </Button>
                    </div>
                </Grid>
            </CardContent>
        </div>
        );
    }
}

RentForm.propTypes = {
    rentInfo: PropTypes.object,
    classes: PropTypes.object.isRequired,
    onDataValueChange: PropTypes.func,
    onClose: PropTypes.func,
    onSend: PropTypes.func
};

RentForm.defaultProps = {
    rentInfo: {
        exchangeType: 'meeting',
        date: undefined,
        rentTime: '', 
        message: ''
    },
    onDataValueChange: () => { },
    onClose: () => { }, 
    onSend: () => { },
    classes: {},
}

export default withStyles(styles)(RentForm);
