"use client";
import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "57b508e4-8fc2-4c0c-b22e-7e05a1affbc2",
        name: target.name.value,
        email: target.email.value,
        message: target.message.value,
      }),
    });

    const result = await response.json();
    setLoading(false);

    if (result.success) {
      setMessage("Message sent successfully!!!");
      console.log(result);
    } else {
      setMessage("There was an error submitting the form.");
    }
  }

  return (
    <>
      <section
        className="relative bg-orange-300 w-full"
        id="Contact Us"
      >
        <div className="absolute bg-black-1 opacity-70 inset-0"></div>

        <form onSubmit={handleSubmit} className="relative text-center py-16">
          <div className="text-center text-color-01 pb-16 text-5xl font-bold max-sm:text-4xl">
            Contact Us
          </div>
          <div className="mb-10">
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="border-2 rounded-lg border-black p-3 text-xl text-black w-2/4 max-lg:w-3/4 max-md:text-lg"
            />
          </div>
          <div className="mb-10">
            <input
              type="email"
              name="email"
              required
              placeholder="Enter Your Email"
              className="border-2 rounded-lg border-black p-3 text-xl text-black w-2/4 max-lg:w-3/4 max-md:text-lg"
            />
          </div>
          <div className="mb-10">
            <textarea
              name="message"
              required
              rows={3}
              placeholder="Enter Message"
              className="border-2 rounded-lg border-black p-3 text-xl text-black w-2/4 max-lg:w-3/4 max-md:text-lg"
            ></textarea>
          </div>
          <div className="relative text-center text-color-01 text-xl pb-5">
            {message && <p>{message}</p>}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="text-white text-lg border-2 rounded-3xl px-12 py-3 cursor-pointer hover:text-black hover:font-bold hover:bg-02"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </section>
    </>
  );
}
