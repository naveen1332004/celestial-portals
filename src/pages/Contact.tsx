import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { PageTransition } from "@/components/PageTransition";
import { Mail, Phone, MapPin, Github, Linkedin, Code2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// Form validation schema with resume field
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

// EmailJS configuration with public key
const EMAIL_CONFIG = {
  SERVICE_ID: "service_3niiuwk",
  TEMPLATE_ID: "template_5wwhwag",
  PUBLIC_KEY: "ZoZ1SBPDe8inzgWUQ",
  TO_EMAIL: "naveen20thkids@gmail.com",
  RESUME_LINK: "https://drive.google.com/file/d/1Y2MDzzoKyDBdgGEjzNdJ_XyjdSLlsT1t/view?usp=sharing"
} as const;

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "naveen20thkids@gmail.com",
    href: "mailto:naveen20thkids@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9443735495",
    href: "tel:+919443735495",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, India",
    href: "https://maps.google.com/?q=Bengaluru,India",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/naveen1332004",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/naveen-kumar-v-9388b8292",
  },
  {
    icon: Code2,
    label: "LeetCode",
    href: "https://leetcode.com/u/naveen1332004/", // Add your LeetCode profile URL when available
  },
];

export function ContactInfo() {
  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/avatar.jpg" alt="Naveen Kumar V" />
            <AvatarFallback className="text-2xl">NK</AvatarFallback>
          </Avatar>
        </div>
        <CardTitle className="text-2xl font-bold">Contact Details</CardTitle>
        <CardDescription>Connect with me</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          {contactDetails.map((contact) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.label === "Location" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center p-4 rounded-lg bg-card hover:bg-accent transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <contact.icon className="h-5 w-5 mr-3 text-primary" />
              <div>
                <div className="font-medium">{contact.label}</div>
                <div className="text-sm text-muted-foreground">{contact.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="flex justify-center gap-4 pt-4">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <social.icon className="h-5 w-5 text-primary" />
            </motion.a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Contact() {
  // Initialize EmailJS once
  useEffect(() => {
    emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_email: EMAIL_CONFIG.TO_EMAIL,
          resume_link: EMAIL_CONFIG.RESUME_LINK // Include resume link in email
        },
        EMAIL_CONFIG.PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle resume download
  const handleDownloadResume = () => {
    window.open(EMAIL_CONFIG.RESUME_LINK, '_blank');
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl font-bold gradient-text">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a question or want to work together? Let's talk!
            </p>
          </motion.div>

          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ContactInfo />
          </motion.div>

          {/* Existing Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Your Name"
                {...register("name")}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your Email"
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Textarea
                placeholder="Your Message"
                rows={6}
                {...register("message")}
                className={errors.message ? "border-red-500" : ""}
              />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </PageTransition>
  );
}

export const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      {socialLinks.map((social) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-accent transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <social.icon className="w-5 h-5 text-primary hover:text-secondary transition-colors" />
        </motion.a>
      ))}
    </div>
  );
};
