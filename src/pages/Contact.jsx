import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-6">Have feedback, questions, or a news tip? We'd love to hear from you!</p>
      
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Send Message</button>
      </form>
    </div>
  );
}
