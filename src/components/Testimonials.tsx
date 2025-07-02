import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import { motion } from "framer-motion";

export const testimonials = [
  {
    name: "Dr. Priya Malhotra",
    role: "Head of Innovation, GlobalCare Clinics",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Synapsis helped us streamline clinic workflows with AI-powered automation. Their technology is reliable, intuitive, and purpose-built for modern healthcare.",
  },
  {
    name: "John Reynolds",
    role: "CTO, EcoMed Diagnostics",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Our diagnostics team saw immediate improvements in accuracy and speed after implementing Synapsis dashboards. The impact was both technical and clinical.",
  },
  {
    name: "Aisha Khatun",
    role: "Founder, MentalCare AI",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "The mental health platform developed with Synapsis is sensitive, secure, and scalable. It's been a significant milestone for our users and team.",
  },
  {
    name: "Dr. Liam O'Connor",
    role: "CMO, NovaHealth Systems",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "Synapsis delivers technology with clinical precision. Their automation and diagnostics solutions have integrated smoothly into our operations.",
  },
  {
    name: "Sophie Bernard",
    role: "Product Manager, VitaTrack",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    quote:
      "Working with Synapsis on preventive health tools was seamless. Their AI integrations are robust and truly impactful.",
  },
  {
    name: "Dr. Marcus Thompson",
    role: "Director of Technology, HealthFirst Medical",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    quote:
      "Their logistics automation solution brought clarity and control to our collection network. Professional, responsive, and well-executed.",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(2, 5);

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-white">
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
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={17} />
            <TestimonialsColumn testimonials={thirdColumn} duration={17} className="hidden lg:block" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
