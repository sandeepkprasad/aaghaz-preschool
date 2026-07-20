"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import FormField from "./FormField";
import ProgramSelect from "./ProgramSelect";
import SubmitButton from "./SubmitButton";
import { submitFormData } from "@/services/google-sheet.service";

import { feeSchema, FeeSchema } from "./schema";

export default function FeeForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FeeSchema>({
    resolver: zodResolver(feeSchema),
  });

  const onSubmit = async (data: FeeSchema) => {
    setLoading(true);

    await submitFormData({
      ...data,

      source: "Admissions Page",
    });

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        grid
        gap-8
        md:grid-cols-2
      "
    >
      <FormField
        label="Parent's Full Name"
        placeholder="Sarah Johnson"
        error={errors.parentName?.message}
        {...register("parentName")}
      />

      <FormField
        label="Email Address"
        placeholder="sarah@example.com"
        error={errors.email?.message}
        {...register("email")}
      />

      <FormField
        label="Phone Number"
        placeholder="+91 XXXXX XXXXX"
        error={errors.phone?.message}
        {...register("phone")}
      />

      <ProgramSelect error={errors.program?.message} {...register("program")} />

      <div className="md:col-span-2">
        <label className="mb-2 ml-2 block font-medium">Message</label>

        <textarea
          rows={4}
          placeholder="Tell us about your child..."
          {...register("message")}
          className="
            w-full
            rounded-[30px]
            border-2
            border-orange-200
            bg-orange-50
            p-6
            outline-none
            focus:border-orange-500
          "
        />
      </div>

      <div className="text-center md:col-span-2">
        <SubmitButton loading={loading} />
      </div>
    </form>
  );
}
