"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

type FormState = {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  company: string;
  requirement: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  countryCode: "+91",
  phone: "",
  company: "",
  requirement: "",
};

const fieldClasses =
  "w-full rounded-2xl border border-ink/12 bg-white px-5 py-3.5 text-base text-ink placeholder:text-ink-soft/50 outline-none transition-colors focus:border-purple focus:ring-4 focus:ring-purple/10";

export function ContactForm() {
  const [form, setForm] = React.useState<FormState>(initialState);
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-grey-line bg-grey-bg px-8 py-20 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-purple" />
        <h3 className="font-display text-2xl text-ink">Enquiry sent.</h3>
        <p className="max-w-sm text-ink-soft">
          {`Thanks, ${form.name.split(" ")[0] || "there"} — we've got your brief. Someone from the team will get back to you within one business day.`}
        </p>
        <button
          onClick={() => {
            setForm(initialState);
            setSubmitted(false);
          }}
          className="mt-2 text-sm font-semibold text-purple hover:underline"
        >
          Send another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink">
            Name <span className="text-pink">*</span>
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={fieldClasses}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink">
            Email <span className="text-pink">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={fieldClasses}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-ink">
          Phone Number <span className="text-pink">*</span>
        </label>
        <div className="flex gap-3">
          <select
            aria-label="Country code"
            value={form.countryCode}
            onChange={(e) => update("countryCode", e.target.value)}
            className="w-24 rounded-2xl border border-ink/12 bg-white px-3 py-3.5 text-base text-ink outline-none transition-colors focus:border-purple focus:ring-4 focus:ring-purple/10"
          >
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+971">+971</option>
            <option value="+65">+65</option>
          </select>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={fieldClasses}
            placeholder="98765 43210"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-semibold text-ink">
          Company Name <span className="text-pink">*</span>
        </label>
        <input
          id="company"
          required
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
          className={fieldClasses}
          placeholder="Your company"
        />
      </div>

      <div>
        <label htmlFor="requirement" className="mb-2 block text-sm font-semibold text-ink">
          Requirement <span className="text-pink">*</span>
        </label>
        <textarea
          id="requirement"
          required
          rows={5}
          value={form.requirement}
          onChange={(e) => update("requirement", e.target.value)}
          className={fieldClasses}
          placeholder="Describe your advertising requirements"
        />
      </div>

      <Button type="submit" size="lg" disabled={submitting} className="mt-2 w-fit">
        {submitting ? "Sending..." : "Submit enquiry"}
        {!submitting && (
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </Button>
    </form>
  );
}
