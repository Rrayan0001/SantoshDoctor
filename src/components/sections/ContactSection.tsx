"use client";

import { useState } from "react";
import { MapPin, Phone, MessageCircle, Mail, Clock, CheckCircle } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    "General Gynaecology",
    "Pregnancy Care",
    "PCOS Treatment",
    "Infertility Evaluation",
    "Laparoscopic Surgery",
    "High-Risk Pregnancy",
    "Menstrual Disorder",
    "Other",
  ];

  const phoneNumber = "919876543210";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Dr.%20Santosh%2C%20I'd%20like%20to%20book%20an%20appointment.`;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?([0-9]{2})?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/.test(formData.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.service) newErrors.service = "Please select a service";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setFormData({
        name: "",
        phone: "",
        service: "",
        date: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-surface scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Contact"
          heading="Book an Appointment"
          subheading="Schedule your visit or get in touch with our team for consultations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Contact Details & Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Info Cards */}
            <div className="bg-white p-8 rounded-card border border-border-custom shadow-card space-y-6">
              
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-muted text-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col font-sans">
                  <span className="text-xs font-bold text-text-light uppercase tracking-wider">
                    Clinic Address
                  </span>
                  <span className="text-sm font-semibold text-text-dark mt-1">
                    Niramay Women&apos;s Clinic
                  </span>
                  <span className="text-sm text-text-mid mt-0.5 leading-relaxed">
                    402, Medical Enclave, Link Road, Andheri West, Mumbai, Maharashtra 400053
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-muted text-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col font-sans">
                  <span className="text-xs font-bold text-text-light uppercase tracking-wider">
                    Phone
                  </span>
                  <a
                    href="tel:+919876543210"
                    className="text-sm font-semibold text-text-dark hover:text-primary mt-1 transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-muted text-primary flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex flex-col font-sans">
                  <span className="text-xs font-bold text-text-light uppercase tracking-wider">
                    WhatsApp
                  </span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-text-dark hover:text-primary mt-1 transition-colors flex items-center gap-1.5"
                  >
                    +91 98765 43210
                    <span className="text-[10px] bg-[#25D366]/15 text-[#25D366] px-1.5 py-0.5 rounded font-bold uppercase">
                      Online
                    </span>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-muted text-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col font-sans">
                  <span className="text-xs font-bold text-text-light uppercase tracking-wider">
                    Email
                  </span>
                  <a
                    href="mailto:contact@dr-santosh.com"
                    className="text-sm font-semibold text-text-dark hover:text-primary mt-1 transition-colors"
                  >
                    contact@dr-santosh.com
                  </a>
                </div>
              </div>

              {/* Clinic Timings */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-muted text-primary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex flex-col font-sans">
                  <span className="text-xs font-bold text-text-light uppercase tracking-wider">
                    Clinic Timings
                  </span>
                  <span className="text-sm text-text-mid mt-1 leading-relaxed">
                    Mon – Sat: 9:00 AM – 1:00 PM <br />
                    5:00 PM – 8:00 PM <br />
                    <span className="text-red-500 font-medium">Sunday: Closed</span>
                  </span>
                </div>
              </div>

            </div>

            {/* Google Map Embed */}
            <div className="overflow-hidden rounded-card border border-border-custom shadow-card h-[240px] relative w-full bg-white">
              <iframe
                title="Dr. Santosh Clinic Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7562858882823!2d72.8277562761899!3d19.11942008707119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9e061805555%3A0xe54dbe4198d023f0!2sAndheri%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Column - Appointment Form */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white p-5 sm:p-8 md:p-10 rounded-card border border-border-custom shadow-card">
              
              {submitSuccess ? (
                /* Success Message */
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-primary-muted text-primary rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-text-dark mb-3">
                    Appointment Requested!
                  </h3>
                  <p className="font-sans text-sm text-text-mid max-w-sm leading-relaxed mb-8">
                    Thank you. We have received your preference. Our desk coordinator will call you back within 2 hours to confirm your final slot.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-2.5 bg-primary text-white font-sans text-sm font-semibold rounded-button shadow-button hover:bg-primary-light transition-all"
                  >
                    Request Another Slot
                  </button>
                </div>
              ) : (
                /* Form fields */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name field */}
                  <div className="flex flex-col font-sans">
                    <label htmlFor="name" className="text-xs font-bold text-text-mid uppercase tracking-wide mb-2">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Shalini Sharma"
                      className={`w-full px-4 py-3.5 bg-surface border rounded-[10px] text-sm text-text-dark placeholder-text-light focus:outline-none focus:bg-white transition-all ${
                        errors.name ? "border-red-500 focus:border-red-500" : "border-border-custom focus:border-primary focus:ring-1 focus:ring-primary"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500 mt-1.5">{errors.name}</span>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="flex flex-col font-sans">
                    <label htmlFor="phone" className="text-xs font-bold text-text-mid uppercase tracking-wide mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 9876543210"
                      className={`w-full px-4 py-3.5 bg-surface border rounded-[10px] text-sm text-text-dark placeholder-text-light focus:outline-none focus:bg-white transition-all ${
                        errors.phone ? "border-red-500 focus:border-red-500" : "border-border-custom focus:border-primary focus:ring-1 focus:ring-primary"
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-500 mt-1.5">{errors.phone}</span>
                    )}
                  </div>

                  {/* Service select */}
                  <div className="flex flex-col font-sans">
                    <label htmlFor="service" className="text-xs font-bold text-text-mid uppercase tracking-wide mb-2">
                      Select Service <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3.5 bg-surface border rounded-[10px] text-sm text-text-dark focus:outline-none focus:bg-white transition-all ${
                        errors.service ? "border-red-500 focus:border-red-500" : "border-border-custom focus:border-primary focus:ring-1 focus:ring-primary"
                      }`}
                    >
                      <option value="">Choose a medical service...</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <span className="text-xs text-red-500 mt-1.5">{errors.service}</span>
                    )}
                  </div>

                  {/* Preferred Date */}
                  <div className="flex flex-col font-sans">
                    <label htmlFor="date" className="text-xs font-bold text-text-mid uppercase tracking-wide mb-2">
                      Preferred Date (Optional)
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 bg-surface border border-border-custom rounded-[10px] text-sm text-text-dark focus:outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col font-sans">
                    <label htmlFor="message" className="text-xs font-bold text-text-mid uppercase tracking-wide mb-2">
                      Additional Info (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Mention any symptoms, doctor referrals, or questions here..."
                      rows={3}
                      className="w-full px-4 py-3.5 bg-surface border border-border-custom rounded-[10px] text-sm text-text-dark placeholder-text-light focus:outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-primary text-white font-sans font-semibold rounded-button shadow-button hover:bg-[#145555] active:scale-[0.99] transition-all disabled:bg-primary/50 disabled:pointer-events-none flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Verifying details...
                      </>
                    ) : (
                      "Confirm Appointment Preference"
                    )}
                  </button>

                  {/* WhatsApp Fallback */}
                  <div className="pt-4 border-t border-border-custom flex items-center justify-center gap-2 font-sans text-xs">
                    <span className="text-text-mid">Prefer WhatsApp?</span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-light font-bold flex items-center gap-0.5"
                    >
                      Message us directly &rarr;
                    </a>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
