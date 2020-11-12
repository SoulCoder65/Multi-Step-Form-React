import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import DataUsageTwoToneIcon from "@material-ui/icons/DataUsageTwoTone";
import SendTwoToneIcon from "@material-ui/icons/SendTwoTone";
import { createMuiTheme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import ArrowBackIosTwoToneIcon from "@material-ui/icons/ArrowBackIosTwoTone";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Course(props) {
  console.log(props.signData.page);
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      {/* Programming Language */}
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">
          Programming Language
        </InputLabel>

        <NativeSelect
          value={props.signData.language}
          onChange={props.changeFun}
          inputProps={{
            name: "language",
            id: "age-native-helper",
          }}
        >
          <option aria-label="None" />
          <option value={"Python"}>Python</option>
          <option value={"Cpp"}>Cpp</option>
          <option value={"C"}>C</option>
          <option value={"java"}>Java</option>
          <option value={"JavaScript"}>JavaScript</option>
          <option value={"React"}>React</option>
        </NativeSelect>
      </FormControl>
      <br />
      {/* Durations */}
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Duration</InputLabel>

        <NativeSelect
          value={props.signData.duration}
          onChange={props.changeFun}
          inputProps={{
            name: "duration",
            id: "age-native-helper",
          }}
        >
          <option aria-label="None" value="" />
          <option value={"2Months"}>2 Months</option>
          <option value={"4Months"}>4 Months</option>
          <option value={"6Months"}>6 Months</option>
          <option value={"8Months"}>8 Months</option>
        </NativeSelect>
      </FormControl>
      <br />
      {/* Sector */}
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Branch</InputLabel>

        <NativeSelect
          value={props.signData.department}
          onChange={props.changeFun}
          inputProps={{
            name: "department",
            id: "age-native-helper",
          }}
        >
          <option aria-label="None" value="" />
          <option value={"CSE"}>CSE</option>
          <option value={"IT"}>IT</option>
        </NativeSelect>
      </FormControl>
      <br />
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<ArrowBackIosTwoToneIcon />}
        onClick={props.backPage}
      >
        Back
      </Button>
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
