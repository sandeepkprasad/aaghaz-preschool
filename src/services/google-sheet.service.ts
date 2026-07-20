export const submitFormData = async (payload: any) => {
  const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT!, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=UTF-8",
    },
    body: JSON.stringify(payload),
  });

  return response.json();
};
