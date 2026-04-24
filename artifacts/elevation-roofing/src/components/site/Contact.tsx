import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Please briefly describe what you need help with."),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent Successfully",
      description: "Thanks for reaching out! We'll be in touch shortly to schedule your inspection.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
                Request Your Estimate
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Fill out the form below and we'll get back to you within 24 hours to schedule your free inspection.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="h-12 bg-muted/50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(515) 686-7651" type="tel" {...field} className="h-12 bg-muted/50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" {...field} className="h-12 bg-muted/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How can we help?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="I need a roof inspection for a leak..." 
                            className="min-h-[120px] resize-y bg-muted/50"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full h-14 text-lg font-semibold" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Request"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-card-border p-8 md:p-12 rounded-2xl shadow-sm h-full"
            >
              <h3 className="text-2xl font-bold font-heading mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <a href="tel:+15156867651" className="flex items-start gap-4 group">
                  <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-lg mb-1">Call Us</div>
                    <div className="text-muted-foreground">(515) 686-7651</div>
                  </div>
                </a>

                <a href="mailto:hello@elevationroofing.com" className="flex items-start gap-4 group">
                  <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-lg mb-1">Email Us</div>
                    <div className="text-muted-foreground">hello@elevationroofing.com</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-lg mb-1">Office Address</div>
                    <div className="text-muted-foreground">314 Main Street<br/>Ames, IA 50010</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-lg mb-1">Business Hours</div>
                    <div className="text-muted-foreground">Mon–Fri: 7:00am – 6:00pm<br/>Sat: 8:00am – 2:00pm</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <h4 className="font-semibold text-foreground mb-2">Service Area</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Proudly serving Ames, Iowa and surrounding communities including Ankeny, Nevada, Story City, Huxley, and Boone. Story County's trusted roofing experts.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}