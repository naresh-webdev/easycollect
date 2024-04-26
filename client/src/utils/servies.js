import { notifyFailure } from "./notifications";

export async function getSessionHandler() {
  try {
    const res = await fetch(`/api/session/getSession`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log("data : ", data);
    return data;
  } catch (error) {
    notifyFailure("Unable to add Phone Number, try again!");
    console.log(error);
  }
}

export async function addPhoneNumberHandler({ phoneNumber }) {
  try {
    const res = await fetch(`/api/user/addPhoneNumber`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber }),
    });
    const data = await res.json();
    console.log("data retured for adding phone number: ", data);
    return data;
  } catch (error) {
    console.log(error);
    return new Error("Unable to add phone number, try again!" + error);
  }
}
// Compare this snippet from api/controllers/auth.controller.js:
