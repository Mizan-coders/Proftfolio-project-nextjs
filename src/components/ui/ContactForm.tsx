"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type FormValues = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

const labelCls = "mb-1.5 block text-sm font-medium";
const errCls = "mt-1 text-xs text-destructive";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        toast.success("Message sent! I'll reply within 24 hours.");
        reset();
      } else {
        toast.error("Something went wrong. Please try WhatsApp instead.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Name <span className="text-primary">*</span>
          </label>
          <Input
            id="name"
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            suppressHydrationWarning
            {...register("name", { required: "Name is required." })}
          />
          {errors.name && <p className={errCls}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelCls}>
            Email <span className="text-primary">*</span>
          </label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            aria-invalid={!!errors.email}
            suppressHydrationWarning
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address.",
              },
            })}
          />
          {errors.email && <p className={errCls}>{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="projectType" className={labelCls}>
          Project Type
        </label>
        <Input
          id="projectType"
          placeholder="Figma to Shopify, migration, retainer, React build..."
          suppressHydrationWarning
          {...register("projectType")}
        />
      </div>

      <div className="flex flex-1 flex-col">
        <label htmlFor="message" className={labelCls}>
          Message <span className="text-primary">*</span>
        </label>
        <Textarea
          id="message"
          placeholder="Share your scope, target platform, links, timeline, and anything that will help estimate the work."
          aria-invalid={!!errors.message}
          suppressHydrationWarning
          className="min-h-40 flex-1"
          {...register("message", { required: "Message is required." })}
        />
        {errors.message && <p className={errCls}>{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className={cn(
          "flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/80 hover:shadow-glow",
          loading && "cursor-not-allowed opacity-70"
        )}
      >
        {loading ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="size-4" />
            Send Project Brief
          </>
        )}
      </button>
    </form>
  );
}
