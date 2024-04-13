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
    console.log(error);
  }
}
