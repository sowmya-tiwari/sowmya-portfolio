"use client"

import { useState } from "react"
import { SectionHeading } from "./section-heading"
import { AnimateOnScroll } from "./animate-on-scroll"
import { Mail, User, MessageSquare, Send, Loader2 } from "lucide-react"

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Check if EmailJS is loaded
      if (!(window as any).emailjs) {
        console.error("EmailJS is not loaded")
        setSubmitStatus("error")
        alert("EmailJS is not loaded. Please check your internet connection and try again.")
        return
      }

      console.log("Attempting to send email...")
      
      // Initialize EmailJS with your public key
      await (window as any).emailjs.init("YOUR_PUBLIC_KEY") // Replace with your EmailJS public key
      
      console.log("EmailJS initialized")
      
      // Send email using EmailJS
      const response = await (window as any).emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "sowmyatiwari11@gmail.com" // Your email address
        }
      )

      console.log("EmailJS response:", response)

      if (response.status === 200) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
        alert("Message sent successfully!")
      } else {
        setSubmitStatus("error")
        alert(`Failed to send message. Status: ${response.status}`)
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
      
      // Show more detailed error message
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"
      alert(`Error: ${errorMessage}. Please check your EmailJS configuration.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-form" className="px-6 py-24 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Get In Touch"
          title="Send Me a Message"
          description="Have a question or want to collaborate? Send me a message and I'll get back to you soon."
        />

        <AnimateOnScroll animation="fade-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="size-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="size-5 text-muted-foreground" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="relative">
              <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                <MessageSquare className="size-5 text-muted-foreground mt-1" />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Your Message"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center space-y-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-primary to-primary/80 px-8 py-3 text-sm font-medium text-primary-foreground hover:from-primary/90 hover:to-primary/70 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="size-4 group-hover:rotate-12 transition-transform duration-300" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-lg">
                  <Mail className="size-4" />
                  <span className="text-sm font-medium">Message sent successfully!</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-2 rounded-lg">
                  <MessageSquare className="size-4" />
                  <span className="text-sm font-medium">Failed to send message. Please try again.</span>
                </div>
              )}
            </div>
          </form>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
