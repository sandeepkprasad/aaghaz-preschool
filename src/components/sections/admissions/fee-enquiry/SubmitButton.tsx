"use client";

type Props = {
  loading: boolean;
};

export default function SubmitButton({ loading }: Props) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="
        rounded-full
        bg-orange-600
        px-12
        py-4
        font-semibold
        text-white
        transition-all
        hover:scale-105
        disabled:opacity-70
      "
    >
      {loading ? "Sending..." : "Send Fee Details"}
    </button>
  );
}
