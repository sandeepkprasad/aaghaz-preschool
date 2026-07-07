export const submitFeeEnquiry = async (payload: any) => {
  const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT!, {
    method: "POST",

    body: JSON.stringify(payload),

    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
