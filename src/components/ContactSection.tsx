import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, LinkedinIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = "service_20nwjvo"; 
    const templateID = "template_1mwbiej"; 
    const publicKey = "IOHveLFy9ViJ2hjn7"; 

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      to_email: "contact@yuccainfo.com.tn",
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
        toast({
          title: "Message envoyé !",
          description: "Nous vous répondrons dans les plus brefs délais.",
          duration: 5000,
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        toast({
          title: "Erreur",
          description: "Une erreur s'est produite. Veuillez réessayer.",
          variant: "destructive",
          duration: 5000,
        });
      });
  };

  return (
    <section className="pb-20 text-neutral-200">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-neutral-900 p-8 rounded-xl shadow-lg border border-neutral-700">
            <h3 className="text-2xl font-semibold mb-6 font-heading text-white">
              Envoyez-nous un message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-400 mb-1"
                  >
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                    className="w-full bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-400 mb-1"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                    className="w-full bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-neutral-400 mb-1"
                  >
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+216 23 198 524"
                    className="w-full bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-neutral-400 mb-1"
                  >
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Objet de votre message"
                    required
                    className="w-full bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-400 mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Comment pouvons-nous vous aider ?"
                  required
                  rows={5}
                  className="w-full bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 py-6 text-sm text-black font-bold"
              >
                Envoyer le message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 text-white p-8 rounded-xl shadow-lg h-full border border-neutral-700">
              <h3 className="text-2xl font-semibold mb-8 font-heading">
                Informations de contact
              </h3>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-yellow-400/20 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <a
                      href="mailto:contact@yuccainfo.com.tn"
                      className="text-neutral-400 hover:text-white"
                    >
                      contact@yuccainfo.com.tn
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-400/20 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Téléphone</h4>
                    <a className="text-neutral-400 hover:text-white">
                      +216 23 198 524
                    </a>
                    <br />
                    <a className="text-neutral-400 hover:text-white">
                      +216 97 131 795
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-400/20 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Adresse</h4>
                    <p className="text-neutral-400">
                      Dar Chaabane Fehri, Nabeul, Tunisia
                      <br />
                      Technopole Sousse, Tunisia
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-400/20 p-3 rounded-full mr-4">
                    <LinkedinIcon className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/company/yuccainfo/"
                      className="text-neutral-400 hover:text-white"
                    >
                      YUCCAINFO
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
