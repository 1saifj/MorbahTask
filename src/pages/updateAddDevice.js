import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getInfo, updateInfo } from "../redux/actions";

const UpdateAddDevice = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.data);
  const [state, setState] = useState({
    specialistName: "",
    repairPrice: "",
    deviceModel: "",
    leftedMoney: "",
    issueType: "",
    receivedMoney: "",
    companyName: "",
    cleintName: "",
    cleintPhone: "",
    cleintAddress: "",
    receivedBy: "",
    receivedDate: "",
    finishedDate: "",
    handoverBy: "",
    notes: "",
  });

  const [error, setError] = useState("");

  const {
    specialistName,
    repairPrice,
    deviceModel,
    leftedMoney,
    issueType,
    receivedMoney,
    companyName,
    clientName,
    clientPhone,
    clientAddress,
    receivedBy,
    receivedDate,
    finishedDate,
    handoverBy,
    notes,
  } = state;

  const history = useHistory();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setError("");
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();
    if (
      !specialistName ||
      !repairPrice ||
      !deviceModel ||
      !leftedMoney ||
      !issueType ||
      !receivedMoney ||
      !companyName ||
      !clientName ||
      !clientPhone ||
      !clientAddress ||
      !receivedBy ||
      !receivedDate ||
      !finishedDate ||
      !handoverBy ||
      !notes
      // !isChecked ||
      // !isRepaired
    ) {
    } else {
      dispatch(updateInfo(state));
      history.push("/AddDevice");
      setError("");
    }
  };

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  useEffect(() => {
    dispatch(getInfo(id));
  });

  return (
    <div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => history.push("/AddDevice")}
          style={{ width: "200px", marginTop: "10px" }}
        >
          رجوع
        </Button>
      </div>
      <h1>تحديث البيانات </h1>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <Box
        component="form"
        sx={{
          direction: "rtl",
          "& > :not(style)": { m: 1, width: "20ch" },
        }}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="أسم الموظف المختص"
          variant="standard"
          name="specialistName"
          value={specialistName}
          type="text"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="نوع الجهاز"
          variant="standard"
          name="deviceModel"
          value={deviceModel}
          type="text"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="الواصل"
          variant="standard"
          name="receivedMoney"
          value={receivedMoney}
          type="number"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="نوع العطل"
          variant="standard"
          name="issueType"
          value={issueType}
          type="text"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="كلفة التصليح"
          variant="standard"
          name="repairPrice"
          value={repairPrice}
          type="text"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="الباقي"
          variant="standard"
          name="leftedMoney"
          value={leftedMoney}
          type="text"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="أسم الشركة"
          variant="standard"
          name="companyName"
          value={companyName}
          type="text"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="أسم الزبون"
          variant="standard"
          name="clientName"
          value={clientName}
          type="text"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="رقم الهاتف"
          variant="standard"
          name="clientPhone"
          value={clientPhone}
          type="number"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="العنوان"
          variant="standard"
          name="clientAddress"
          value={clientAddress}
          type="text"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="الموظف المستلم"
          variant="standard"
          name="receivedBy"
          value={receivedBy}
          type="text"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="الموظف المسلم"
          variant="standard"
          name="handoverBy"
          value={handoverBy}
          type="text"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label=" الملاحظات "
          variant="standard"
          name="notes"
          value={notes}
          type="text"
          onChange={handleInputChange}
        />

        <TextField
          id="standard-basic"
          label=" تاريخ الاستلام"
          variant="standard"
          name="receivedDate"
          value={receivedDate}
          type="datetime-local"
          // InputProps={{
          //   style: {
          //     color: "transparent",
          //   },
          // }}
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="موعد التسليم "
          variant="standard"
          name="finishedDate"
          value={finishedDate}
          type="datetime-local"
          onChange={handleInputChange}
        />

        <br />
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          style={{ width: "200px", margin: "20px" }}
        >
          إضافة
        </Button>
      </Box>
    </div>
  );
};

export default UpdateAddDevice;
