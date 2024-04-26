import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { notifyFailure } from "../utils/notifications";
import { addPhoneNumberHandler } from "../utils/servies";
import { useDispatch } from "react-redux";
import { setPhoneNumber } from "../redux/user/userSlice";

export default function FormDialog({
  isOpen,
  message,
  title,
  setLoading,
  setIsFormOpen,
  currentUser,
}) {
  const dipatch = useDispatch();

  const handleDialogClose = async (e) => {
    e.preventDefault();
    setIsFormOpen(false);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const { phoneNumber } = formJson;
    try {
      if (
        currentUser.userInfo.phoneNumber !== null ||
        phoneNumber === null ||
        phoneNumber === "" ||
        phoneNumber.length !== 10
      ) {
        console.log("Invalid Phone Number", phoneNumber);
        notifyFailure("Invalid Phone Number");
        setLoading(false);
        return;
      }
      const data = await addPhoneNumberHandler({
        phoneNumber: phoneNumber,
      });
      const { updatedUser } = data;
      console.log("updatedUser: ", updatedUser);
      dipatch(setPhoneNumber(updatedUser.phoneNumber));
      setLoading(false);
    } catch (error) {
      notifyFailure("Unable to add Number, try again!");
      console.error("error adding phone number: ", error);
    }
  };

  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        PaperProps={{
          component: "form",
          onSubmit: handleDialogClose,
        }}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="phoneNumber"
            label="Enter your 10 digit phone number"
            type="tel"
            fullWidth
            variant="standard"
            sx={{
              "&:focus": {
                borderColor: "#00040f",
                color: "#00040f",
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setIsFormOpen(false)}
            sx={{
              color: "#00040f",
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            sx={{
              color: "#fff",
              backgroundColor: "#00040f",
              fontWeight: "semiBold",
              "&:hover": {
                // Remove hover property styling
                backgroundColor: "#00040f",
              },
              marginRight: "1rem",
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
