"use client";

type Props = {
  error?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export default function ProgramSelect({ error, ...props }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="ml-2 font-medium">Interested Program</label>

      <select
        {...props}
        className="
          rounded-full
          border-2
          border-orange-200
          bg-orange-50
          px-6
          py-4
          outline-none
          focus:border-orange-500
        "
      >
        <option value="">Select Program</option>

        <option value="Toddler Nest">Toddler Nest (1.5–2.5y)</option>

        <option value="Young Creators">Young Creators (2.5–3.5y)</option>

        <option value="Kindergarten">Kindergarten (3.5–5.5y)</option>
      </select>

      {error && <span className="ml-2 text-sm text-red-500">{error}</span>}
    </div>
  );
}
