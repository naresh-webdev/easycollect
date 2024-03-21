import { toast } from "react-toastify";

export const notifySuccess = (message) =>
  toast.success(message, {
    autoClose: 5000,
    theme: "light",
  });

export const notifyFailure = (message) => {
  toast.error(message, {
    autoClose: 5000,
    theme: "light",
  });
};
