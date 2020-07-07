import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import NativeSelect from '@material-ui/core/NativeSelect';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import {BotTesterActionType} from "../../Action-Types/bot-tester.actiontype";
import * as Tester from "../../Actions/bot-tester.action"
//import {BotTesterActionType} from "../action-types/bot-tester.actiontype";
//import * as Tester from "../actions/bot-tester.action"
import eclipsefile from "./eclipse.ini"

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
      float: "left",
      position:"relative",
      top: 10
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
      },
      input: {
        marginLeft: theme.spacing(1),
        flex: 1,
      },
      heading :{
        position:"relative",
        top: -10,
        left: -595,
        fontFamily: "Segoe UI"
      },
      line :{
        position:"relative",
        top: -10,
        width: 900,
        left: -245,
        height: 2,
        backgroundColor:"black"
      },
      iconButton: {
        padding: 10,
      },
      divider: {
        height: 28,
        margin: 4,
      },
  }));
  
  const UpButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      position:"relative",
      left: 40,
      backgroundColor: '#0367fc',
      borderColor: '#0367fc',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);

  const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      position:"relative",
      left: 40,
      backgroundColor: '#0367fc',
      borderColor: '#0367fc',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);




function InputTextField(props) {
    const classes = useStyles();
    
    async function downloadReport(){
                  let res =  await fetch('http://10.5.205.104:8080/trainer/getValidationReport', {
                method: 'get',
                headers: {
                    'Accept': '*/*',
                },
                
            });
            //console.log(res);

            let result = await res.json();

            console.log(result);

    }

    async function cancelTest(){
       let res =  await fetch('http://10.5.205.104:8080/trainer/cancelBotTest', {
                method: 'get',
                headers: {
                    'Accept': '*/*',
                },
                
            });
            //console.log(res);

            let result = await res.json();

            console.log(result);

    }
    //%%%%%%%%%%%%%
    async function testBot(){
            let res =  await fetch('http://10.5.205.104:8080/trainer/validateBot/{props.botName}', {
                method: 'post',
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body :{
                  botAccessToken:props.botName,
                  testFile:eclipsefile
                }
                
            });
            //console.log(res);

            let result = await res.json();

            console.log(result);

    }

    async function downloadJunk(){
                    let res =  await fetch('http://10.5.205.104:8080/trainer/getJunkQueryData', {
                method: 'get',
                headers: {
                    'Accept': '*/*',
                },
                
            });
            //console.log(res);

            let result = await res.json();

            console.log(result);

    }

    return (
        <div className="forms">

            <Typography variant="h3" className={classes.heading}>
               Bot Tester
            </Typography>
        
            <Divider className={classes.line}/>

        <FormControl variant="outlined" className={classes.formControl}>
            

            <br /> <br /> <br /> 
            
            <br />


      <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <br />
      <label htmlFor="contained-button-file">
        
      </label>
     
    </div>
      <div>
                  
        <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} style={{ width:100, position:"relative", left:50, top:20}}
              onClick={testBot}>
                    Test
        </BootstrapButton> &emsp;

                <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} style={{ width:100, position:"relative", left:50, top:20}}
                onClick={cancelTest}>
                    Cancel
                </BootstrapButton>
            
              </div>

              <div>
                  
                  <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} style={{ width:200, position:"relative", left:50, top:60}}
                  onClick={downloadReport}>
                    Download Report
                </BootstrapButton> &emsp;

                <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} style={{ width:200, position:"relative", left:50, top:60}}
                onClick={downloadJunk}>
                    Download Junk
                </BootstrapButton>
            
              </div>
                <br />
                
      </FormControl>
    
        </div>
        
    );
  }

  function mapStatetoProps(state){
    return{
      botName:state.topBar.botName,
    };
  }

export default connect(mapStatetoProps)(InputTextField)
  