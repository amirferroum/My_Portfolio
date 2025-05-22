'use client';
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Header from '@/components/Header/Header';
const ContactPage = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_9rcd9wm',
        'template_mwv4ehf',
        form.current,
        'rqgBqOFi_3MdVqa3V'
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          e.target.reset();
        },
        () => {
          setStatus('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <div>
        <Header />
        <div className="min-h-screen bg-[#111111] text-white px-8 md:px-24 py-20 font-sans">
        
      <div className="grid md:grid-cols-2 gap-16 items-start pt-20">
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-5xl font-semibold leading-tight mb-12">
            Let's start a <br /> project together
          </h1>
          <form ref={form} onSubmit={sendEmail} className="space-y-10">
            {/* Name */}
            <div>
              <label className="block text-sm mb-1">
                <span className="text-gray-500">01</span> What's your name?
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full bg-transparent border-b border-gray-600 py-2 outline-none text-white placeholder-gray-500"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1">
                <span className="text-gray-500">02</span> What's your email?
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full bg-transparent border-b border-gray-600 py-2 outline-none text-white placeholder-gray-500"
                placeholder="john@doe.com"
              />
            </div>

            {/* Organization */}
            <div>
              <label className="block text-sm mb-1">
                <span className="text-gray-500">03</span> What's the name of your organization?
              </label>
              <input
                type="text"
                name="organization"
                className="w-full bg-transparent border-b border-gray-600 py-2 outline-none text-white placeholder-gray-500"
                placeholder="John & Doe ®"
              />
            </div>

            {/* Services */}
            <div>
              <label className="block text-sm mb-1">
                <span className="text-gray-500">04</span> What services are you looking for?
              </label>
              <input
                type="text"
                name="services"
                className="w-full bg-transparent border-b border-gray-600 py-2 outline-none text-white placeholder-gray-500"
                placeholder="Web Design, Web Development ..."
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-1">
                <span className="text-gray-500">05</span> Your message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full bg-transparent border-b border-gray-600 py-2 outline-none text-white placeholder-gray-500"
                placeholder="Hello, can you help me with ..."
              />
            </div>

            {/* Submit */}
            <div className="pt-10 flex justify-center">
              <button
                type="submit"
                className="w-24 h-24 bg-blue-600 hover:bg-blue-500 transition-all rounded-full text-sm font-semibold flex items-center justify-center"
              >
                Send it!
              </button>
            </div>

            {/* Status */}
            {status && <p className="text-sm mt-4 text-gray-400 text-center">{status}</p>}
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-10">
          {/* Profile Image */}
          <img
            src="assets/profile_pic.jpg"
            alt="Your Profile"
            className="w-24 h-24 rounded-full object-cover"
          />

          {/* Contact Info */}
          <div>
            <h3 className="text-sm text-gray-500 mb-2">Contact Details</h3>
            <p className="text-white">amirferroum@gmail.com</p>
            <p className="text-white">+213 699 82 67 33</p>
          </div>

          {/* Business Info */}
          <div>
            <h3 className="text-sm text-gray-500 mb-2">Business Details</h3>
            <p>Amir Ferroum</p>
            <p>Algeria</p>
          </div>

          {/* Social Links */}
          <div className="pt-10 space-y-1 text-sm">
            <p className="text-gray-500">Socials</p>
            <div className="space-y-1">
             
              <a href="#" className="hover:underline">Instagram</a>
              <a href="#" className="hover:underline">Twitter</a>
              <a href="#" className="hover:underline">LinkedIn</a>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-20 text-xs text-gray-500">
            <p>VERSION<br />2024 © Edition</p>
            
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default ContactPage;
