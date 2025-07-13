import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

export default function Contact({ loadingBar }) {
  const [result, setResult] = useState("");

  useEffect(() => {
    if (loadingBar?.current) {
      loadingBar.current.staticStart();
      setTimeout(() => loadingBar.current.complete(), 500);
    }
  }, [loadingBar]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    const WEB3FORM_KEY = process.env.REACT_APP_WEB3FORM_KEY;
    formData.append("access_key", WEB3FORM_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Form submitted successfully!");
        event.target.reset();
      } else {
        console.error("Error:", data);
        setResult("❌ " + data.message);
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setResult("❌ Submission failed. Please try again later.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Swift News</title>
        <meta name="description" content="Get in touch with Swift News for feedback, support, or news tips. We'd love to hear from you!" />
        <meta name="keywords" content="contact Swift News, feedback, support, submit news tip" />
        <meta property="og:title" content="Contact Swift News" />
        <meta property="og:description" content="Reach out to Swift News for inquiries, feedback, or suggestions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/contact" />
        <meta property="og:image" content="/cover.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Have feedback, questions, or a news tip? We'd love to hear from you!
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {result && (
          <p className="mt-4 text-sm font-medium text-center text-blue-600 dark:text-blue-400">
            {result}
          </p>
        )}
      </div>
    </>
  );
}
