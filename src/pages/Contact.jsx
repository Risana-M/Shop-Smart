import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Thank you! Your message has been sent to FreshCo.");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
            <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                {/* Left Side: Contact Info */}
                <div className="bg-green-800 p-8 text-white md:w-1/3 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <p className="text-green-100 mb-6 text-sm">
                        Have questions about our fresh produce? We're here to help!
                    </p>
                    <div className="space-y-4 text-sm">
                        <p>📍  Kerala, India</p>
                        <p>📞 +91 98765 43210</p>
                        <p>✉️ support@freshco.com</p>
                    </div>
                </div>

                {/* Right Side: Form */}
                <form onSubmit={handleSubmit} className="p-8 md:w-2/3 space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            required
                            className="w-full border-2 border-gray-100 rounded-lg px-4 py-2 focus:border-green-500 focus:outline-none transition"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            required
                            className="w-full border-2 border-gray-100 rounded-lg px-4 py-2 focus:border-green-500 focus:outline-none transition"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
                        <select
                            className="w-full border-2 border-gray-100 rounded-lg px-4 py-2 focus:border-green-500 focus:outline-none transition text-gray-600"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        >
                            <option value="">Select a reason</option>
                            <option value="Order Issue">Order Issue</option>
                            <option value="Bulk Inquiry">Bulk Inquiry</option>
                            <option value="Feedback">Feedback</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                        <textarea
                            required
                            rows="4"
                            className="w-full border-2 border-gray-100 rounded-lg px-4 py-2 focus:border-green-500 focus:outline-none transition resize-none"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="How can we help you?"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-800 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition-all shadow-lg active:scale-95"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;