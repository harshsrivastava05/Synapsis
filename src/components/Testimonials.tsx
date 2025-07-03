import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import { motion } from "framer-motion";

export const testimonials = [
  {
    name: "Dr. Priya Malhotra",
    role: "Head of Innovation, GlobalCare Clinics",
    image: "/Randomuser/user6.png",
    quote:
      "Synapsis helped us streamline clinic workflows with AI-powered automation. Their technology is reliable, intuitive, and purpose-built for modern healthcare.",
  },
  {
    name: "John Reynolds",
    role: "CTO, EcoMed Diagnostics",
    image: "/Randomuser/user5.png",
    quote:
      "Our diagnostics team saw immediate improvements in accuracy and speed after implementing Synapsis dashboards. The impact was both technical and clinical.",
  },
  {
    name: "Aisha Khatun",
    role: "Founder, MentalCare AI",
    image: "/Randomuser/user4.png",
    quote:
      "The mental health platform developed with Synapsis is sensitive, secure, and scalable. It's been a significant milestone for our users and team.",
  },
  {
    name: "Dr. Liam O'Connor",
    role: "CMO, NovaHealth Systems",
    image: "/Randomuser/user3.png",
    quote:
      "Synapsis delivers technology with clinical precision. Their automation and diagnostics solutions have integrated smoothly into our operations.",
  },
  {
    name: "Sophie Bernard",
    role: "Product Manager, VitaTrack",
    image: "/Randomuser/user2.png",
    quote:
      "Working with Synapsis on preventive health tools was seamless. Their AI integrations are robust and truly impactful.",
  },
  {
    name: "Dr. Marcus Thompson",
    role: "Director of Technology, HealthFirst Medical",
    image: "/Randomuser/user1.png",
    quote:
      "Their logistics automation solution brought clarity and control to our collection network. Professional, responsive, and well-executed.",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(2, 5);

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 px-6 border-t border-b border-neutral-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-black">
              What our partners say
            </h2>
            <p className="text-base md:text-lg mt-4 text-black">
              Professionals across healthcare, diagnostics, and digital health trust Synapsis to deliver reliable, AI-powered solutions.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6 mt-12 max-h-[640px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={14} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={18} />
            <TestimonialsColumn testimonials={thirdColumn} duration={14} className="hidden lg:block" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
