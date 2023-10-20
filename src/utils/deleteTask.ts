export const deleteTask = async (id: Number) => {
  try {
    await fetch(`/api/tasks/${id}`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });
  } catch (error) {
    console.error(error);
  }
};
