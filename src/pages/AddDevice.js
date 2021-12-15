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
import { deleteInfo, loadInformations } from "../redux/actions";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";
import Background from "../UI/Background";
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

const AddDevice = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);

  const handleDelete = (id) => {
    if (window.confirm("هل تريد الحذف حقا؟")) {
      dispatch(deleteInfo(id));
    }
  };

  useEffect(() => {
    dispatch(loadInformations());
  });

  return (
    <div>
      <Background />
      <div style={{ margin: "10px", textAlign: "right" }}>
        <Button
          style={{ width: "500px", height: "50px" }}
          variant="contained"
          onClick={() => history.push("/")}
          color="secondary"
        >
          رجوع
        </Button>
        <Button
          style={{ marginLeft: "10px", height: "50px", width: "500px" }}
          variant="contained"
          color="secondary"
          onClick={() => history.push("/editDevice")}
        >
          إضافة
        </Button>
      </div>
      <TableContainer
        component={Paper}
        style={{
          direction: "rtl",
        }}
      >
        <Table sx={{ minWidth: 900 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">نوع الجهاز</StyledTableCell>
              <StyledTableCell align="center">نوع العطل</StyledTableCell>
              <StyledTableCell align="center">المبلغ المستلم</StyledTableCell>
              <StyledTableCell align="center">الموظف المختص</StyledTableCell>
              <StyledTableCell align="center">مبلغ التصليح</StyledTableCell>
              <StyledTableCell align="center">المتبقي</StyledTableCell>
              <StyledTableCell align="center">إجراءات</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {user.deviceModel}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.issueType}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.receivedMoney}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.specialistName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.repairPrice}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.leftedMoney}
                  </StyledTableCell>
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
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AddDevice;
