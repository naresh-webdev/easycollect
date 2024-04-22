import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";

const labelStyles = {
  authorized: `bg-green-500 text-white`,
  unpaid: `bg-red-500 text-white`,
};

const Label = ({ statusMessage }) => {
  return (
    <div
      className={`${labelStyles[statusMessage]} inline-block rounded-sm  px-4 py-1.5 text-center text-xs font-[600] uppercase tracking-[1px]`}
    >
      {statusMessage.toUpperCase()}
    </div>
  );
};

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 690,
      laptop: 1024,
      desktop: 1280,
    },
  },
});

function StyledTable({ membersData }) {
  const { currentUser } = useSelector((state) => state.user);
  const { userInfo } = currentUser;
  console.log(userInfo, "currentUser");

  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <Table
          sx={{
            minWidth: {
              mobile: "85vw",
              tablet: 650,
              laptop: 750,
            },
          }}
          aria-label="simple table"
        >
          <TableHead
            sx={{
              backgroundColor: "#fff",
            }}
          >
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>S.No</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="left">
                Name
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="left">
                Payment Mode
              </TableCell>
              <TableCell
                sx={{
                  display: {
                    mobile: "none",
                    tablet: "block",
                  },
                  fontWeight: "bold",
                }}
                align="left"
              >
                Payment Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {membersData?.map((member, index) => (
              <TableRow
                key={member.userId}
                sx={{
                  "&:last-child td, &:last-child th ": { border: 0 },
                  backgroundColor:
                    userInfo._id === member.userId ? "#d1fae5" : "#ffffffb2",
                }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="left">{member.userName}</TableCell>
                <TableCell
                  align="left"
                  sx={{
                    display: {
                      mobile: "none",
                      tablet: "block",
                    },
                  }}
                >
                  {member.paymentType === null
                    ? "-"
                    : member.paymentType.toUpperCase()}
                </TableCell>
                <TableCell align="left">
                  <Label statusMessage={member.paymentStatus.toLowerCase()} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}

export default StyledTable;
