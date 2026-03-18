import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
  phone: z.string().trim().max(30, "Phone number is too long").optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message is too long"),
});

type ContactForm = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactForm;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center bg-gradient-card rounded-xl p-12 shadow-card border border-border/50"
          >
            <CheckCircle className="w-16 h-16 text-success mx-auto mb-6" />
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">Message Sent!</h3>
            <p className="text-muted-foreground">Thank you for your interest. Our team will get back to you within 24 hours.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Contact <span className="text-gradient-ocean">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Interested in our program? Reach out and we'll get back to you.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-gradient-card rounded-xl p-8 shadow-card border border-border/50 space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5 font-body">Name *</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition font-body"
              placeholder="Your name"
            />
            {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5 font-body">Email *</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition font-body"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5 font-body">Phone (optional)</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-lg bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition font-body"
              placeholder="+1 (555) 123-4567"
            />
            {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5 font-body">Message *</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-lg bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none font-body"
              placeholder="Tell us about your investment goals..."
            />
            {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3.5 rounded-lg bg-gradient-ocean font-display font-semibold text-primary-foreground text-lg glow-ocean transition-all flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {loading ? (
              <span className="animate-spin w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full" />
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
