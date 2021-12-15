import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";

import { addProduct } from "../redux/actions";
import Paper from "@mui/material/Paper";
import { deleteAddedProduct, loadProduct } from "../redux/actions";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Background from "../UI/Background";
import Card from "../UI/Card";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
} from "@material-ui/core";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const AddProduct = () => {
  const [state, setState] = useState({
    name: "",
    price: "",
    addedDate: "",
    type: "",
  });

  const dispatch = useDispatch();
  const { addedProduct } = useSelector((state) => state.data);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this leave?")) {
      dispatch(deleteAddedProduct(id));
    }
  };

  useEffect(() => {
    dispatch(loadProduct());
  });

  const [error, setError] = useState("");

  const { name, price, addedDate, type } = state;

  const history = useHistory();

  const handleInputChange = (e) => {
    setError("");
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !addedDate || !type) {
      setError("الرجاء تعبئة جميع الحقول");
    } else {
      dispatch(addProduct(state));
      history.push("/ControlPanel");
      setError("");
    }
  };

  return (
    <Card>
      <Background />
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => history.push("/ControlPanel")}
          style={{ width: "200px", marginTop: "10px" }}
        >
          رجوع
        </Button>
      </div>
      <h1>إضافة قطعة </h1>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <Box
        component="form"
        sx={{
          direction: "rtl",
          "& > :not(style)": { m: 1, width: "60ch" },
        }}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="الموظف المختص "
          variant="standard"
          name="name"
          value={name}
          type="text"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="نوع القطعة"
          variant="standard"
          name="type"
          value={type}
          type="text"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="تاريخ الإضافة"
          variant="standard"
          name="addedDate"
          value={addedDate}
          type="datetime-local"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="السعر"
          variant="standard"
          name="price"
          value={price}
          type="numbers"
          onChange={handleInputChange}
        />
        <br />
        <Button variant="contained" color="secondary" type="submit">
          حفظ
        </Button>
      </Box>
      <h4> قائمة القطع </h4>
      <TableContainer
        component={Paper}
        style={{
          direction: "rtl",
        }}
      >
        <Table sx={{ minWidth: 900 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">الموظف المختص </StyledTableCell>
              <StyledTableCell align="center">نوع القطعة </StyledTableCell>
              <StyledTableCell align="center">تاريخ الإضافة</StyledTableCell>
              <StyledTableCell align="center">حذف</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {addedProduct &&
              addedProduct.map((prod) => (
                <StyledTableRow key={prod.id}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {prod.name}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="center">
                    {prod.type}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row" align="center">
                    {prod.addedDate}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <IconButton aria-label="delete">
                      <DeleteIcon
                        color="primary"
                        onClick={() => handleDelete(prod.id)}
                      />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default AddProduct;
