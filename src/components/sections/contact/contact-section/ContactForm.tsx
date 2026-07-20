"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { contactSchema, ContactSchema } from "./contact.schema";

import { submitContactForm } from "@/services/contact.service";

import { toast } from "sonner";

const ageGroups = ["1.5 - 2.5", "2.5 - 4", "4 - 6"];

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const selectedAge = watch("ageGroup");

  const onSubmit = async (data: ContactSchema) => {
    try {
      setLoading(true);

      await submitContactForm(data);

      toast.success("Message sent successfully.");

      reset();
    } catch {
      toast.error("Unable to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        rounded-[40px]
        border-2
        border-[#EC2129]/10
        bg-[#EC2129]/5
        p-8
        md:p-12
      "
    >
      <h2
        className="
          mb-8
          text-3xl
          font-bold
          text-[#EC2129]
        "
      >
        Send us a message
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label>Parent Name</label>

            <input
              {...register("parentName")}
              placeholder="Your name"
              className="mt-2 w-full rounded-2xl border bg-white p-4"
            />

            <p className="mt-1 text-sm text-red-500">
              {errors.parentName?.message}
            </p>
          </div>

          <div>
            <label>Email</label>

            <input
              {...register("email")}
              placeholder="example@mail.com"
              className="mt-2 w-full rounded-2xl border bg-white p-4"
            />

            <p className="mt-1 text-sm text-red-500">{errors.email?.message}</p>
          </div>
        </div>

        <div>
          <label>Phone</label>

          <input
            {...register("phone")}
            placeholder="+91 9876543210"
            className="mt-2 w-full rounded-2xl border bg-white p-4"
          />

          <p className="mt-1 text-sm text-red-500">{errors.phone?.message}</p>
        </div>

        <div>
          <label>Child's Age</label>

          <div className="mt-3 flex flex-wrap gap-3">
            {ageGroups.map((age) => (
              <button
                key={age}
                type="button"
                onClick={() => setValue("ageGroup", age)}
                className={`
                  rounded-full
                  border-2
                  px-5
                  py-2
                  transition-all

                  ${
                    selectedAge === age
                      ? "border-[#EC2129] bg-[#EC2129] text-white"
                      : "border-slate-300 bg-white"
                  }
                `}
              >
                {age}
              </button>
            ))}
          </div>

          <p className="mt-2 text-sm text-red-500">
            {errors.ageGroup?.message}
          </p>
        </div>

        <div>
          <label>Message</label>

          <textarea
            {...register("message")}
            rows={5}
            placeholder="Tell us more..."
            className="mt-2 w-full rounded-2xl border bg-white p-4"
          />

          <p className="mt-1 text-sm text-red-500">{errors.message?.message}</p>
        </div>

        <button
          disabled={loading}
          className="
            rounded-full
            bg-[#EC2129]
            px-10
            py-4
            font-semibold
            text-white
            transition-all
            hover:scale-105
            disabled:opacity-60
          "
        >
          {loading ? "Sending..." : "Send Inquiry"}
        </button>
      </form>
    </div>
  );
}
