import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
FaLinkedinIn,
FaGithub,
FaEnvelope,
FaWhatsapp,
} from "react-icons/fa";

function Contact() {
const form = useRef();
const [status, setStatus] = useState("");
const [loading, setLoading] = useState(false);

const sendEmail = async (e) => {
e.preventDefault();
setLoading(true);
setStatus("");


try {
  await emailjs.sendForm(
    "service_z9gqe9q",
    "template_ee43u6j",
    form.current,
    {
      publicKey: "-W49iqUC0PyK_Zn6B",
    }
  );

  setStatus("Message sent successfully!");
  form.current.reset();
} catch (error) {
  console.error("Email error:", error);
  setStatus("Message could not be sent. Please try again.");
} finally {
  setLoading(false);
}


};

const highlightForm = () => {
const formElement = document.getElementById("contact-form");


if (!formElement) return;

formElement.scrollIntoView({
  behavior: "smooth",
  block: "center",
});

formElement.classList.remove("contact-form-highlight");

window.requestAnimationFrame(() => {
  formElement.classList.add("contact-form-highlight");

  window.setTimeout(() => {
    formElement.classList.remove("contact-form-highlight");
  }, 1800);
});


};

return ( <section
   id="contact"
   className="relative overflow-hidden bg-[#070b14] py-20 text-white sm:py-24"
 >
{/* Background Glow */} <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/[0.07] blur-[100px]" /> <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-blue-500/[0.07] blur-[100px]" />


  <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

    {/* Heading */}
    <div className="mb-12">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
        Get in Touch
      </p>

      <h2 className="text-3xl font-bold sm:text-5xl">
        Let's Work{" "}
        <span className="text-cyan-400">Together.</span>
      </h2>

      <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400">
        Have a project in mind or want to discuss an opportunity?
        Feel free to send me a message.
      </p>
    </div>

    <div className="grid items-start gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-12">

      {/* Left: Contact Cards */}
      <div className="space-y-4">

        {/* Email Card */}
        <button
          type="button"
          onClick={highlightForm}
          className="group flex w-full items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/[0.06]"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 transition group-hover:bg-cyan-400/20">
            <FaEnvelope className="text-xl text-cyan-400" />
          </span>

          <span className="min-w-0 flex-1">
            <span className="block text-sm font-semibold text-white transition group-hover:text-cyan-300">
              Email Me
            </span>
            <span className="mt-1 block text-xs leading-5 text-slate-400">
              Send me a message through my contact form
            </span>
          </span>

          <span className="text-lg text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyan-400">
            ↗
          </span>
        </button>

        {/* LinkedIn Card */}
        <a
          href="https://www.linkedin.com/in/YOUR-LINKEDIN/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/[0.06]"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 transition group-hover:bg-cyan-400/20">
            <FaLinkedinIn className="text-xl text-cyan-400" />
          </span>

          <span className="min-w-0 flex-1">
            <span className="block text-sm font-semibold text-white transition group-hover:text-cyan-300">
              LinkedIn
            </span>
            <span className="mt-1 block text-xs leading-5 text-slate-400">
              Connect with me professionally
            </span>
          </span>

          <span className="text-lg text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyan-400">
            ↗
          </span>
        </a>

        {/* GitHub Card */}
        <a
          href="https://github.com/qamarshehzadi786786-prog"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/[0.06]"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 transition group-hover:bg-cyan-400/20">
            <FaGithub className="text-xl text-cyan-400" />
          </span>

          <span className="min-w-0 flex-1">
            <span className="block text-sm font-semibold text-white transition group-hover:text-cyan-300">
              GitHub
            </span>
            <span className="mt-1 block text-xs leading-5 text-slate-400">
              Explore my projects and code
            </span>
          </span>

          <span className="text-lg text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyan-400">
            ↗
          </span>
        </a>

        {/* WhatsApp Card */}
        <a
          href="https://wa.me/923227847258"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-green-400/50 hover:bg-green-400/[0.06]"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-green-400/20 bg-green-400/10 transition group-hover:bg-green-400/20">
            <FaWhatsapp className="text-2xl text-green-400" />
          </span>

          <span className="min-w-0 flex-1">
            <span className="block text-sm font-semibold text-white transition group-hover:text-green-300">
              WhatsApp
            </span>
            <span className="mt-1 block text-xs leading-5 text-slate-400">
              Let's chat directly
            </span>
          </span>

          <span className="text-lg text-slate-500 transition group-hover:translate-x-1 group-hover:text-green-400">
            ↗
          </span>
        </a>

        {/* Availability */}
        <div className="flex items-center gap-3 px-1 pt-4">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
          </span>

          <p className="text-xs text-slate-400">
            Based in Pakistan · Open to opportunities
          </p>
        </div>
      </div>

      {/* Right: Contact Form */}
      <form
        id="contact-form"
        ref={form}
        onSubmit={sendEmail}
        className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-xl shadow-black/10 transition-colors duration-300 sm:p-8"
      >
        <div className="mb-2">
          <h3 className="text-xl font-semibold text-white">
            Send Me a Message
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Fill in the details below and I'll get back to you.
          </p>
        </div>

        {/* Name */}
        <div>
          <label
            htmlFor="user_name"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Your Name
          </label>

          <input
            id="user_name"
            name="user_name"
            type="text"
            placeholder="Enter your name"
            autoComplete="name"
            required
            className="w-full rounded-xl border border-white/10 bg-[#0b101b] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="user_email"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Email Address
          </label>

          <input
            id="user_email"
            name="user_email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            required
            className="w-full rounded-xl border border-white/10 bg-[#0b101b] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Your Message
          </label>

          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Tell me about your project..."
            required
            className="w-full resize-y rounded-xl border border-white/10 bg-[#0b101b] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3.5 text-sm font-semibold text-[#070b14] transition duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
          {!loading && <span>↗</span>}
        </button>

        {/* Status */}
        {status && (
          <p
            role="status"
            aria-live="polite"
            className={`rounded-lg border p-3 text-sm ${
              status === "Message sent successfully!"
                ? "border-green-400/20 bg-green-400/10 text-green-300"
                : "border-red-400/20 bg-red-400/10 text-red-300"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  </div>
</section>


);
}

export default Contact;
