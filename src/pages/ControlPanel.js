import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { deleteInfo, loadEmployees, loadInformations } from "../redux/actions";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";
import Background from "../UI/Background";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import styles from "./ControlPanelCard.module.css";
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

const ControlPanel = () => {
  const history = useHistory();
  const [checked, setChecked] = useState(true);
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      dispatch(deleteInfo(id));
    }
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(checked);
  };

  useEffect(() => {
    dispatch(loadInformations());
  });

  return (
    <div>
      <Background />
      {/* <h2 className="header_title">لوحة التحكم</h2> */}

      <div className={styles.card}>
        <h5 className={styles.text}> البحث حسب</h5>

        <div className={styles.search}>
          <TextField
            id="standard-basic"
            helperText=" من تاريخ الاستلام"
            variant="standard"
            style={{
              direction: "rtl",
              padding: "10px",
            }}
            name="issueType"
            type="date"
          />
          <TextField
            id="standard-basic"
            helperText="إلى تاريخ الاستلام"
            variant="standard"
            name="issueType"
            style={{
              direction: "rtl",
              padding: "10px",
            }}
            type="date"
          />
          <TextField
            id="standard-basic"
            helperText=" من موعد تسليم"
            variant="standard"
            name="issueType"
            type="date"
            style={{
              direction: "rtl",
              padding: "10px",
            }}
          />
          <TextField
            id="standard-basic"
            helperText="إلى موعد تسليم "
            variant="standard"
            name="issueType"
            type="date"
            style={{
              direction: "rtl",
              padding: "10px",
            }}
          />
          <TextField
            id="standard-basic"
            helperText="الحالة "
            variant="standard"
            name="issueType"
            type="text"
            style={{
              direction: "rtl",
              padding: "10px",
            }}
          />
          <TextField
            id="standard-basic"
            helperText="الموظف المختص "
            variant="standard"
            name="issueType"
            type="text"
            style={{
              direction: "rtl",
              padding: "10px",
            }}
          />
        </div>

        <div className={styles.fields}>
          <TextField
            id="outlined-basic"
            label="تحديد الزبون  "
            variant="outlined"
            style={{
              direction: "rtl",
              padding: "10px",
            }}
          />
          <TextField
            id="outlined-basic"
            label="تحديد الشركة"
            variant="outlined"
            style={{
              direction: "rtl",
              padding: "10px",
            }}
          />
          <TextField
            id="outlined-basic"
            label="نوع العطل "
            variant="outlined"
            style={{
              direction: "rtl",
              padding: "10px",
            }}
          />

          <Button
            // style={{ width: "50px", height: "50px" }}
            style={{
              width: "50px",
              direction: "rtl",
              padding: "10px",
            }}
            variant="contained"
            color="secondary"
          >
            بحث
          </Button>
        </div>
      </div>
      <div style={{ margin: "10px", textAlign: "right" }}>
        <Button
          style={{ width: "500px", height: "50px" }}
          variant="contained"
          onClick={() => history.push("/")}
          color="secondary"
        >
          رجوع
        </Button>
      </div>
      <TableContainer
        component={Paper}
        style={{
          direction: "rtl",
          marginBottom: "40px",
        }}
      >
        <Table sx={{ minWidth: 900 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">أسم الزبون</StyledTableCell>
              <StyledTableCell align="center"> أسم الشركة</StyledTableCell>
              <StyledTableCell align="center">نوع الجهاز</StyledTableCell>
              <StyledTableCell align="center">نوع العطل </StyledTableCell>
              <StyledTableCell align="center">تاريخ الاستلام </StyledTableCell>
              <StyledTableCell align="center">تاريخ التسليم</StyledTableCell>
              <StyledTableCell align="center"> إضافة قطعة</StyledTableCell>
              <StyledTableCell align="center">الموظف المختص </StyledTableCell>
              <StyledTableCell align="center">كلفة التصليح </StyledTableCell>
              <StyledTableCell align="center">تم الفحص </StyledTableCell>
              <StyledTableCell align="center">تم التسليم </StyledTableCell>
              <StyledTableCell align="center">ملاحظات </StyledTableCell>
              <StyledTableCell align="center">ملاحظات </StyledTableCell>
              <StyledTableCell align="center">إجراءات</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {user.clientName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.companyName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.deviceModel}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.issueType}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.receivedDate}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.finishedDate}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => history.push("/AddProduct")}
                    >
                      إضافة
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.specialistName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.repairPrice}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.isChecked}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.notes}</StyledTableCell>
                  <StyledTableCell align="center"></StyledTableCell>

                  <StyledTableCell align="center">
                    <IconButton aria-label="delete">
                      <DeleteIcon
                        color="primary"
                        onClick={() => handleDelete(user.id)}
                      />
                    </IconButton>

                    <IconButton aria-label="edit">
                      <EditIcon
                        color="primary"
                        onClick={() =>
                          history.push(`/UpdateAddDevice/${user.id}`)
                        }
                      />
                    </IconButton>
                    <Button variant="contained" color="secondary">
                      طباعة
                    </Button>
                    <Button variant="contained" color="secondary">
                      تفاصيل
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ControlPanel;
