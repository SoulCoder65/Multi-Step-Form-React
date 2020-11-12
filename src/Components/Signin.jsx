import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import SendTwoToneIcon from "@material-ui/icons/SendTwoTone";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Signin(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="First Name"
        name="firstname"
        value={props.signData.firstname}
        onChange={props.changeFun}
      />
      <br />
      <TextField
        id="standard-basic"
        label="Last Name"
        name="lastname"
        value={props.signData.lastname}
        onChange={props.changeFun}
      />
      <br />
      <TextField
        id="standard-basic"
        label="Email"
        name="email"
        value={props.signData.email}
        onChange={props.changeFun}
      />

      <br />
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        endIcon={<SendTwoToneIcon />}
        onClick={props.nextPage}
      >
        Next
      </Button>
    </form>
  );
}
