"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong");

      setStatus("success");
      setMessage("Check your inbox to confirm your subscription.");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message || "Unable to subscribe right now.");
    }
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[64rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(transparent_1px,rgba(255,255,255,0.02)_1px)] [background-size:16px_16px]" />
      </div>

      

      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-background/90 p-8 shadow-2xl backdrop-blur"
        >
            <div>
                <h3>
                    News letter
                </h3>
            </div>
            
          <form onSubmit={onSubmit} className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="email">
                Email
            </label>

            

            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your-email@example.com"
              className="w-full squared-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/80 outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="squared-xl bg-background px-5 py-3 font-medium text-white transition hover:bg-gray-400 disabled:opacity-10"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {/* Status / Hints */}
          <div className="mx-auto mt-3 max-w-xl text-center text-sm">
            {status === "success" && (
              <p className="text-emerald-400">{message}</p>
            )}
            {status === "error" && (
              <p className="text-rose-400">{message}</p>
            )}
            {status === "idle" && (
              <p className="text-white/50">
                We use double opt‑in. By subscribing, you agree to our{" "}
                <a href="/privacy" className="underline underline-offset-4 hover:text-white">Privacy Policy</a>.
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
