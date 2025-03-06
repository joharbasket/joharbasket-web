import React from "react";
import { FaLock, FaUserShield, FaInfoCircle, FaShareAlt, FaShieldAlt, FaUserCheck, FaCookieBite, FaSyncAlt, FaEnvelope } from "react-icons/fa";

const page = () => {
  return (
    <div className="container mx-auto p-6 max-w-3xl mt-20">
      <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
      <p className="text-gray-600 text-center mb-6">Effective Date: 18-02-2025</p>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2"><FaInfoCircle /> Information We Collect</h2>
        <p className="text-gray-700">We collect the following types of information when you use our services:</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li><strong>Personal Information:</strong> Name, phone number, email address, delivery address, payment details.</li>
          <li><strong>Usage Data:</strong> App activity, browsing history, IP address, device information.</li>
          <li><strong>Transaction Details:</strong> Orders placed, payment status, and delivery records.</li>
          <li><strong>Location Data:</strong> Real-time location (if enabled) to enhance delivery accuracy.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2"><FaUserShield /> How We Use Your Information</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Process and fulfill your orders.</li>
          <li>Improve and personalize user experience.</li>
          <li>Provide customer support and respond to queries.</li>
          <li>Send updates, offers, and promotional messages.</li>
          <li>Ensure security, fraud prevention, and legal compliance.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2"><FaShareAlt /> Sharing of Information</h2>
        <p className="text-gray-700">We do not sell your personal information. However, we may share data with:</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li><strong>Delivery Partners:</strong> To ensure accurate order fulfillment.</li>
          <li><strong>Payment Gateways:</strong> For secure payment processing.</li>
          <li><strong>Legal Authorities:</strong> If required by law or to prevent fraudulent activities.</li>
          <li><strong>Third-Party Service Providers:</strong> To improve our app functionality.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2"><FaShieldAlt /> Data Security</h2>
        <p className="text-gray-700">We implement industry-standard security measures to protect your data from unauthorized access, alteration, or loss. However, we cannot guarantee absolute security due to the nature of online transmissions.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2"><FaUserCheck /> User Rights & Choices</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Access and update your personal data.</li>
          <li>Request deletion of your account and data.</li>
          <li>Opt-out of promotional communications.</li>
          <li>Manage location-sharing preferences through device settings.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2"><FaCookieBite /> Cookies and Tracking Technologies</h2>
        <p className="text-gray-700">We use cookies and similar technologies to improve app performance and user experience. You can manage cookie preferences through your browser settings.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2"><FaSyncAlt /> Changes to Privacy Policy</h2>
        <p className="text-gray-700">We may update this Privacy Policy from time to time. Any changes will be communicated through our app. Continued use of our services after updates signifies your acceptance of the revised policy.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2"><FaEnvelope /> Contact Us</h2>
        <p className="text-gray-700">For any privacy-related concerns, contact us at:</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li><strong>Email:</strong> support@joharbasket.com</li>
          <li><strong>Address:</strong> F.No: D, Basuki Block, Samlong, Chintamani Nagar, Namkum, Ranchi, Jharkhand, 834010</li>
        </ul>
      </section>
    </div>
  );
};

export default page;
