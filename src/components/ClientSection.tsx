import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { User, Star, MessageSquare, Award, Quote, Presentation, MessageCircleCode } from "lucide-react";

const clients = [
    {
      name: "Couvoir Med Istamed",
      description: "« YUCCAINFO nous a aidé à moderniser notre infrastructure IT avec des solutions innovantes et efficaces. »",
      image: "./clients/med.png"
    },
    {
      name: "Metalaser Techno&Design",
      description: "« L'expertise de YUCCAINFO en transformation digitale a été cruciale pour notre croissance. »",
      image: "./clients/meta.png"
    },
    {
      name: "Tunisia Led Company",
      description: "« Une équipe professionnelle qui a su répondre à nos besoins spécifiques avec des solutions adaptées. »",
      image: "./clients/TLC.png"
    }
  ];
  

const clientVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.2, ease: "easeOut" }
  })
};

const ClientSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {clients.map((client, index) => (
        <motion.div
          key={index}
          variants={clientVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={index}
        >
          <Card className="bg-neutral-900/50 border border-neutral-700 hover:border-yellow-400/50 transition-all duration-300 h-full">
            <div className="flex flex-col h-full p-6 space-y-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <img
                  src={client.image}
                  alt={client.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-yellow-400" />
                <p className="text-neutral-300 italic">{client.description}</p>
              </div>
              <div className="mt-auto flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
                  <MessageCircleCode className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-yellow-400 font-medium">{client.name}</h4>
                </div>

              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default ClientSection;