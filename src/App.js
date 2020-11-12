import logo from "./logo.svg";
import "./App.css";
import Signin from "./Components/Signin";
import Course from "./Components/Course";
import PersonalDetail from "./Components/PersonalDetail";
import BaseContainer from "./Components/BaseContainer";
import Success from "./Components/Success";
import { useState } from "react";

const App = () => {
  const inititialvalue = 1;
  const [formValues, setValues] = useState({
    page: inititialvalue,
    firstname: "",
    lastname: "",
    email: "",
    language: "",
    duration: "",
    department: "",
    age: "",
    dob: "12/11/1999",
    country: "",
  });

  const NextPage = () => {
    setValues((prev) => ({
      ...prev,
      page: formValues.page + 1,
    }));
  };
  const BackPage = () => {
    setValues((prev) => ({
      ...prev,
      page: formValues.page - 1,
    }));
  };

  const ChangeText = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: [e.target.value],
    }));
  };
  switch (formValues.page) {
    case 1:
      return (
        <>
          <BaseContainer
            pagedetail={Signin}
            formData={formValues}
            changeText={ChangeText}
            nextPage={NextPage}
          />
        </>
      );

      break;
    case 2:
      return (
        <>
          <BaseContainer
            pagedetail={Course}
            formData={formValues}
            changeText={ChangeText}
            backPage={BackPage}
            nextPage={NextPage}
          />
        </>
      );
      break;
    case 3:
      return (
        <>
          <BaseContainer
            pagedetail={PersonalDetail}
            formData={formValues}
            changeText={ChangeText}
            backPage={BackPage}
            nextPage={NextPage}
          />
        </>
      );
      break;
    case 4:
      return (
        <>
          <BaseContainer pagedetail={Success} />
        </>
      );
    default:
      break;
  }
};

export default App;
