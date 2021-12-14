import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { addUser } from "../redux/actions";

import ShowUserModal from "./showUsers";
import Background from "../UI/Background";

const AddUser = () => {
  const [state, setState] = useState({
    username: "",
    loginname: "",
    password: "",
    confirmpassword: "",
  });
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const [error, setError] = useState("");

  const { username, loginname, password, confirmpassword } = state;

  const history = useHistory();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setError("");
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !loginname || !password || !confirmpassword) {
      setError("الرجاء تعبئة جميع الحقول");
    } else {
      dispatch(addUser(state));
      history.push("/");
      setError("");
    }
  };

  return (
    <div>
      <div>
        <Background />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => history.push("/")}
          style={{ width: "200px", marginTop: "10px" }}
        >
          رجوع
        </Button>
      </div>
      <h1>إضافة مستخدم جديد</h1>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <Box
        component="form"
        sx={{
          direction: "rtl",
          "& > :not(style)": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="أسم المستخدم"
          variant="standard"
          name="username"
          value={username}
          type="text"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="أسم الدخول
          "
          variant="standard"
          name="loginname"
          value={loginname}
          type="text"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="كلمة المرور "
          variant="standard"
          name="password"
          value={password}
          type="text"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="تأكيد كلمة المرور "
          variant="standard"
          name="confirmpassword"
          value={confirmpassword}
          type="numbers"
          onChange={handleInputChange}
        />
        <br />
        <Button variant="contained" color="secondary" type="submit">
          حفظ
        </Button>
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          onClick={() => handleOpen()}
        >
          عرض المستخدمين
        </Button>
        <ShowUserModal open={open} handleClose={handleClose} />
      </Box>
    </div>
  );
};

export default AddUser;
