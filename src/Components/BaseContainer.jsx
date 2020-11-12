import React from "react";
// Materialize React
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import "../App.css";
const BaseContainer = (props) => {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="sm"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(#39311d,#cfd3ce)",
        }}
        className="form-container"
      >
        <div
          className="form"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 id="form-head">Multi-Step Form</h1>
          {
            <props.pagedetail
              signData={props.formData}
              changeFun={props.changeText}
              nextPage={props.nextPage}
              backPage={props.backPage}
            />
          }
        </div>
      </Container>
    </>
  );
};
export default BaseContainer;
