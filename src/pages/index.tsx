import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brush, Code, Cloud, Brain, Shield, ChartBar, Cpu, Search } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedFlexCards from "@/components/AnimatedFlexCards";
import Marquee from "react-fast-marquee";
import ContactSection from "@/components/ContactSection";
import { BentoGridDemo } from "@/components/BentoCards";
import Head from 'next/head';
import ClientSection from "@/components/ClientSection";
import Scene from "@/components/Scene";

// Animation Variants
const buttonVariants = {
  initial: { scale: 1, opacity: 0.8 },
  hover: { scale: 1.05, opacity: 1, transition: { duration: 0.2 } },
  tap: { scale: 0.95, transition: { duration: 0.1 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const faqItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 },
  },
};

const heroTextVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const heroImageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
  },
};

const aboutItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const featureItemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Home() {
  const cardData = [
    {
      id: "c1",
      number: 1,
      title: "Ingénierie Logicielle",
      description: "Développement d'applications web, mobiles et desktop sur mesure, avec une approche axée sur la performance, l'ergonomie et la scalabilité.",
      backgroundImage: "/gl.jpg",
    },
    {
      id: "c2",
      number: 2,
      title: "Transformation Digitale",
      description: "Accompagnement des entreprises dans leur digitalisation avec des solutions ERP sur mesure et des systèmes POS performants.",
      backgroundImage: "/erp.jpg",
    },
    {
      id: "c3",
      number: 3,
      title: "Intelligence Artificielle & IoT",
      description: "Solutions intelligentes utilisant l'IA et l'IoT pour analyser, anticiper et optimiser les décisions.",
      backgroundImage: "/ai.png",
    },
    {
      id: "c4",
      number: 4,
      title: "Cybersécurité & Cloud Computing",
      description: "Sécurisation des infrastructures numériques et modernisation par le cloud avec des solutions flexibles et évolutives.",
      backgroundImage: "/cybersecurity.png",
    },
    {
      id: "c5",
      number: 5,
      title: "Optimisation SEO & AEO",
      description: "Renforcement du SEO et de l'AEO pour maximiser la visibilité sur les moteurs de recherche et les assistants vocaux.",
      backgroundImage: "/seo.jpeg",
    },
  ];

  const faqs = [
    {
      question: "Quels services propose YUCCAINFO ?",
      answer: "YUCCAINFO excelle en ingénierie logicielle, transformation digitale, intelligence artificielle, IoT, cybersécurité, optimisation SEO/AEO, et solutions POS/ERP via notre partenariat avec BIM POS, offrant des solutions sur mesure pour vos besoins.",
    },
    {
      question: "Comment YUCCAINFO garantit-il la qualité des projets ?",
      answer: "Nous intégrons les dernières technologies, des architectures modernes (microservices, API RESTful), et des tests rigoureux pour livrer des solutions performantes, sécurisées et évolutives.",
    },
    {
      question: "YUCCAINFO peut-il gérer des projets à grande échelle ?",
      answer: "Oui, nous accompagnons des entreprises de toutes tailles, des startups aux multinationales, avec des solutions évolutives adaptées à la croissance.",
    },
    {
      question: "Comment YUCCAINFO aborde-t-il la cybersécurité ?",
      answer: "Nous déployons des systèmes de détection d’intrusion, un chiffrement avancé, des sauvegardes intelligentes et une surveillance proactive pour sécuriser vos infrastructures.",
    },
    {
      question: "Comment démarrer un projet avec YUCCAINFO ?",
      answer: "Contactez-nous à contact@yuccainfo.com.tn ou au +216 23 198 524. Nous analyserons vos besoins et proposerons une solution personnalisée pour votre transformation digitale.",
    },
  ];

  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        className="relative min-h-screen w-full bg-neutral-950"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <Navbar />
        <BackgroundBeams />

        {/* Hero Section */}
        <motion.section
          id="hero"
          className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:pb-24"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
            <motion.div
              className="flex flex-col space-y-6"
              variants={heroTextVariants}
            >
              <motion.h1
                className="text-4xl md:text-5xl font-normal text-white mb-10"
                variants={heroTextVariants}
              >
                Solutions numériques{" "}
                <span className="font-bold text-yellow-400">innovantes</span>{" "}
                pour votre transformation
              </motion.h1>
              <motion.p
                className="text-lg text-neutral-300 mb-8"
                variants={heroTextVariants}
              >
                Vos défis, nos solutions : YUCCAINFO, votre partenaire pour
                l’innovation digitale.
              </motion.p>
              <motion.div
                variants={buttonVariants}

                whileHover="hover"
                whileTap="tap"
              >
                <a href="#services" onClick={handleScrollToServices}>
                  <Button className="w-fit mt-2 bg-yellow-400 text-gray-800 font-semibold py-3 px-6 md:py-4 md:px-8 lg:py-6 lg:px-10 rounded-full hover:bg-yellow-500 transition flex items-center gap-1 md:gap-2 lg:gap-3 uppercase text-sm md:text-base lg:text-lg">
                    <span>←</span> Découvrez nos services
                  </Button>
                </a>
              </motion.div>
            </motion.div>



            <div className="h-screen">
              <Scene/>
            </div>



          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="flex justify-center"
            variants={heroTextVariants}
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-12"
              style={{
                fontFamily: "'Cinzel', serif",
                textTransform: "uppercase",
              }}
            >
              À Propos de <span className="text-yellow-400">YUCCAINFO</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="flex justify-center md:justify-start"
              variants={heroImageVariants}
              animate={{
                x: [0, 5, 3, -5, 0],
                y: [0, -5, 5, -3, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <img
                src="/about.png"
                alt="Innovation technologique YUCCAINFO"
                className="max-w-[10rem] sm:max-w-[16rem] md:max-w-xs lg:max-w-sm h-auto object-cover rounded-lg"
              />
            </motion.div>

            <motion.div variants={heroTextVariants}>
              <motion.p
                className="text-white mb-6 text-base"
                variants={aboutItemVariants}
              >
                Votre partenaire stratégique dans la transformation numérique.
                Fondée par une équipe passionnée d'experts, YUCCAINFO crée des
                solutions sur mesure alliant technologie de pointe, créativité
                et vision d'avenir.
              </motion.p>
              <motion.div className="mt-6" variants={heroTextVariants}>
                <h3 className="text-2xl font-extralight text-white mb-4">
                  Nos solutions sont:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Cpu,
                      title: "Innovantes",
                      desc: "Technologies de pointe",
                    },
                    {
                      icon: Shield,
                      title: "Fiables",
                      desc: "Performance et sécurité",
                    },
                    {
                      icon: ChartBar,
                      title: "Évolutives",
                      desc: "Adaptées à votre croissance",
                    },
                    {
                      icon: Search,
                      title: "Centrées client",
                      desc: "Votre satisfaction avant tout",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      variants={featureItemVariants}
                    >
                      <div className="h-8 w-8 rounded-full bg-yellow-400/20 flex items-center justify-center mt-1">
                        <item.icon className="h-4 w-4 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-yellow-400 text-base">
                          {item.title}
                        </h4>
                        <p className="text-base text-neutral-400">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.p
                className="text-white mt-6 text-base"
                variants={aboutItemVariants}
              >
                Aujourd'hui, YUCCAINFO accompagne la modernisation des
                entreprises tunisiennes et internationales avec des solutions
                technologiques intelligentes et personnalisées.
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          id="services"
          className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="text-center" variants={heroTextVariants}>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{
                fontFamily: "'Cinzel', serif",
                textTransform: "uppercase",
              }}
            >
              Nos Domaines d’Excellence
            </h2>
            <p className="text-neutral-300 text-lg">
              Des solutions technologiques intelligentes pour moderniser votre
              entreprise
            </p>
          </motion.div>
          <AnimatedFlexCards cards={cardData} />
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          id="faq"
          className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="text-center mb-16" variants={heroTextVariants}>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{
                fontFamily: "'Cinzel', serif",
                textTransform: "uppercase",
              }}
            >
              Questions Fréquentes
            </h2>
            <p className="text-neutral-300 text-lg font-medium">
              Vous avez des questions ? Nous avons les réponses.
            </p>
          </motion.div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={faqItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-neutral-900/50 border border-neutral-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-white hover:text-yellow-400 text-left text-lg font-extralight px-6 py-4 flex items-center justify-between">
                    <span>{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-200 px-6 py-4 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.section>

        {/* Clients Section */}
        <motion.section
          id="clients"
          className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="text-center mb-24" variants={heroTextVariants}>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{
                fontFamily: "'Cinzel', serif",
                textTransform: "uppercase",
              }}
            >
              Nos Clients
            </h2>
            <p className="text-neutral-300 text-lg">
              Nos chers clients fidèles en Tunisie, satisfaits et confiants dans
              nos services.
            </p>
          </motion.div>
          <ClientSection />
        </motion.section>

        {/* Sponsors Section (Unchanged) */}
        <motion.section
          id="sponsors"
          className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-center mb-24">
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{
                fontFamily: "'Cinzel', serif",
                textTransform: "uppercase",
              }}
            >
              Nos Sponsors
            </h2>
            <p className="text-neutral-300 text-lg">
              Partenaires clés soutenant notre mission et nos projets.
            </p>
          </div>
          <Marquee pauseOnHover autoFill>
            {[
              "/sponsors/1.png",
              "/sponsors/2.png",
              "/sponsors/3.png",
              "/sponsors/4.png",
              "/sponsors/5.png",
              "/sponsors/6.png",
              "/sponsors/7.png",
              "/sponsors/8.png",
              "/sponsors/9.png",
              "/sponsors/10.png",
              "/sponsors/11.png",
              "/sponsors/12.png",
              "/sponsors/13.png",
              "/sponsors/14.png",
              "/sponsors/15.png",
              "/sponsors/16.png",
              "/sponsors/17.png",
              "/sponsors/18.png",
              "/sponsors/19.png",
              "/sponsors/20.png",
              "/sponsors/21.png",
              "/sponsors/22.png",
              "/sponsors/23.png",
            ].map((src, index) => (
              <div key={index} className="mx-8 flex items-center">
                <img
                  src={src}
                  alt={`Sponsor ${index + 1}`}
                  className="h-20 object-contain transition-all duration-75 rounded-md"
                  style={{ maxWidth: "180px" }}
                />
              </div>
            ))}
          </Marquee>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="text-center mb-16" variants={heroTextVariants}>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{
                fontFamily: "'Cinzel', serif",
                textTransform: "uppercase",
              }}
            >
              Contactez-Nous
            </h2>
            <p className="text-neutral-300 text-lg">
              Prenez contact avec nous pour toute question.
            </p>
          </motion.div>
          <ContactSection />
        </motion.section>
      </div>
    </>
  );
}