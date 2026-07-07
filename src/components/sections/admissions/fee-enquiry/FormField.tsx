"use client";

type Props = {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function FormField({ label, error, ...props }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="ml-2 font-medium">{label}</label>

      <input
        {...props}
        className="
          rounded-full
          border-2
          border-orange-200
          bg-orange-50
          px-6
          py-4
          outline-none
          transition
          focus:border-orange-500
        "
      />

      {error && <span className="ml-2 text-sm text-red-500">{error}</span>}
    </div>
  );
}
