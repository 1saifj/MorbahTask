import style from "./MainHome.module.css";
import patter_top from "../assets/bg-pattern-top.svg";
import patter_bottom from "../assets/bg-pattern-bottom.svg";
import mh from "../assets/mh.png";
import CustomButton from "../UI/CustomButton";
import { useHistory } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import * as Yup from "yup";

const Login = () => {
  const initalValues = {
    username: "",
    password: "",
    rembember: false,
  };

  const validateLoginUser = () => {};

  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 1000);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string().required("أدخل كلمة المرور لطفاً"),
  });

  return (
    <div className={style.card} style={{ direction: "rtl" }}>
      <img className={style.top} src={patter_top} alt="topsvg" />
      <img className={style.bottom} src={patter_bottom} alt="bottomsvg" />
      <div className={style.card}>
        <div className={style["card-header"]}>
          <img className={style["header-img"]} src={mh} alt="companylogo" />
        </div>
        <div className={style["card-body"]}>
          <h1 className={style["text-style"]}>المربع للحلول البرمجية</h1>
          <h1 className={style["text-style"]}>تسجيل الدخول</h1>
          <Box style={{ direction: "rtl" }}>
            <Box component="form" onSubmit={handleSubmit} noValidate></Box>
            <Formik
              initialValues={initalValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(props) => (
                <Form>
                  {console.log(props)}
                  <Field
                    as={TextField}
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label=" أسم المستخدم"
                    name="username"
                    autoComplete="email"
                    autoFocus
                  />
                  <Field
                    as={TextField}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="كلمة المرور"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    helperText={<ErrorMessage name="password" />}
                  />
                  <Field
                    as={FormControlLabel}
                    name="rembember"
                    control={<Checkbox value="remember" color="primary" />}
                    label="تذكرني"
                  />

                  <Button
                    type="submit"
                    fullWidth
                    color="secondary"
                    variant="contained"
                    disabled={props.isSubmitting}
                    sx={{ mt: 4, mb: 3 }}
                  >
                    {props.isSubmitting ? " يرجى الانتظار" : "تسجيل الدخول"}
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </div>
      </div>
    </div>
  );

  //   const history = useHistory();
  //   return (

  //   );
};

export default Login;
