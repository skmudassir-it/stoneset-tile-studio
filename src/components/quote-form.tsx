"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SERVICE_OPTIONS } from "@/lib/site";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please choose a service"),
  message: z.string().min(10, "Tell us a little more (at least 10 characters)"),
});

type FormValues = z.infer<typeof schema>;

export default function QuoteForm({ className }: { className?: string }) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { service: "" },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json()) as { success: boolean; message?: string; error?: string };
      if (data.success) {
        toast.success("Quote request received!", {
          description: data.message ?? "We will get back to you within one business day.",
        });
        reset();
      } else {
        toast.error("Something went wrong", {
          description: data.error ?? "Please review your details and try again.",
        });
      }
    } catch {
      toast.error("Network error", {
        description: "Could not reach the server. Please try again in a moment.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("grid gap-5", className)} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            placeholder="Jane Smith"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs font-medium text-red-600" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            type="email"
            placeholder="jane@example.com"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs font-medium text-red-600" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" type="tel" placeholder="(512) 555-0100" {...register("phone")} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="service">Service needed</Label>
          <Select
            value={undefined}
            onValueChange={(value) => setValue("service", value ?? "")}
          >
            <SelectTrigger id="service" aria-invalid={!!errors.service}>
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              {SERVICE_OPTIONS.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.service && (
            <p className="text-xs font-medium text-red-600" role="alert">
              {errors.service.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Project details</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us about your space — room, approximate size, tile you have in mind, and your timeline."
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs font-medium text-red-600" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="btn-gradient h-12 w-full sm:w-auto sm:px-8">
        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}
        {isSubmitting ? "Sending…" : "Request My Free Quote"}
      </Button>
      <p className="text-xs text-muted">
        No spam, ever. We use your details only to prepare your quote.
      </p>
    </form>
  );
}
