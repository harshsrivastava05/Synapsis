"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Send, ArrowRight, Star } from "lucide-react";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-element",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    console.log("Form submitted:", formData);

    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const testimonials = [
    {
      quote:
        "Synapsis Medical transformed our healthcare operations with their AI-powered diagnostic tools, reducing response time by 75%.",
      author: "Dr. Sarah Johnson",
      title: "Chief Medical Officer, MetroHealth",
    },
    {
      quote:
        "Their nanotechnology solutions revolutionized our manufacturing process, improving efficiency by 60% while reducing costs.",
      author: "Michael Chen",
      title: "VP of Operations, NanoTech Industries",
    },
    {
      quote:
        "The real estate analytics platform provided invaluable insights that helped us make data-driven investment decisions.",
      author: "Lisa Rodriguez",
      title: "Director of Investments, Urban Development Corp",
    },
  ];

  const trustedCompanies = [
    "MetroHealth",
    "NanoTech Industries",
    "Urban Development Corp",
    "GreenTech Solutions",
    "Future Labs",
    "HealthFirst Medical",
  ];

  return (
    <>
      {/* Minimalist Toast */}
      {showToast && (
        <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2 bg-gray-900 text-white px-6 py-2 rounded shadow text-sm font-medium animate-fade-in-out">
          Form submitted successfully!
        </div>
      )}
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
                Ready to innovate together?
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Connect with our team to explore how AI, nanotechnology, and
                advanced analytics can transform your business operations and
                drive unprecedented growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section ref={formRef} className="pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="contact-element h-full flex flex-col"
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-light text-gray-900 mb-4">
                    Get in touch
                  </h2>
                  <p className="text-gray-600">
                    Share your project details and we'll get back to you within
                    24 hours.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 flex flex-col flex-grow"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-gray-700 font-medium"
                      >
                        Name *
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-gray-200 focus:border-gray-400 focus:ring-0"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="company"
                        className="text-gray-700 font-medium"
                      >
                        Company
                      </Label>
                      <Input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-2 border-gray-200 focus:border-gray-400 focus:ring-0"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-gray-700 font-medium"
                    >
                      Business Email *
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-gray-200 focus:border-gray-400 focus:ring-0"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div className="flex flex-col flex-grow min-h-[180px] gap-4">
                    <Label
                      htmlFor="message"
                      className="text-gray-700 font-medium"
                    >
                      Tell us about your project *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-gray-200 focus:border-gray-400 focus:ring-0 resize-none flex-grow min-h-[140px]"
                      placeholder="Describe your project, challenges, and how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 text-lg font-medium rounded-none transition-colors duration-300 mt-4"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="contact-element h-full flex flex-col space-y-12"
              >
                {/* Direct Contact */}
                <div>
                  <h3 className="text-2xl font-light text-gray-900 mb-6">
                    Connect directly
                  </h3>
                  <div className="space-y-4">
                    <motion.a
                      href="mailto:contact@synapsismedtech.com"
                      whileHover={{ x: 5 }}
                      className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
                    >
                      <Mail className="h-5 w-5 mr-4" />
                      <span className="text-lg">
                        contact@synapsismedtech.com
                      </span>
                    </motion.a>

                    <motion.a
                      href="https://linkedin.com/company/synapsis-medical-tech"
                      whileHover={{ x: 5 }}
                      className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
                    >
                      <Linkedin className="h-5 w-5 mr-4" />
                      <span className="text-lg">LinkedIn Company Page</span>
                    </motion.a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-gray-50 p-8 rounded-sm">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">
                    What to expect
                  </h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                      Response within 24 hours
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                      Initial consultation call
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                      Detailed project proposal
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                      Transparent timeline and pricing
                    </li>
                  </ul>
                </div>

                {/* Services */}
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-4">
                    Our expertise
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      "AI-powered healthcare solutions",
                      "Smart real estate analytics",
                      "Nanotechnology applications",
                      "Sustainable technology systems",
                      "IoT and sensor integration",
                      "Custom software development",
                    ].map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <div className="w-1 h-1 bg-gray-400 rounded-full mr-3"></div>
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-light text-gray-900 mb-4">
                What our clients say
              </h2>
              <p className="text-gray-600">
                Trusted by industry leaders worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-sm shadow-sm"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-gray-900 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-medium text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted By */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-gray-500 mb-8">
                Trusted by leading organizations
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {trustedCompanies.map((company, index) => (
                  <div
                    key={index}
                    className="text-gray-400 font-medium text-lg opacity-60 hover:opacity-100 transition-opacity duration-300"
                  >
                    {company}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
