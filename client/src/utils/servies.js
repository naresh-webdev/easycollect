export async function getSessionHandler(userId) {
  try {
    const res = await fetch(`/api/session/getSession/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${userInfo.token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {}
}
