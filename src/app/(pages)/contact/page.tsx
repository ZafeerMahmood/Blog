import { Metadata } from "next";
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Spotlight } from "@/components/ui/lib/spotlight";
import { TextGenerateEffect } from "@/components/ui/lib/text-generate";
import Meteors from "@/components/ui/lib/meteors";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Zafeer Mahmood for any inquiries or collaborations.",
};

function Contact() {
    return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center w-full min-h-[80vh] relative overflow-hidden"
    >
      <div className="absolute top-32 left-0 z-0">
        <Meteors number={5} />
      </div>
      
      <Spotlight
        className="-top-20 left-1/6 md:left-1/4 md:-top-20"
        fill="white"
      />
      
      <div className="max-w-7xl w-full px-10 xl:px-0 z-10 mt-32 ">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h1 className="mb-6">Get in Touch</h1>
          <TextGenerateEffect
            className="text-2xl md:text-3xl text-wrap text-primary mb-8"
            words={"Let's build something amazing together"}
          />
          <p className="max-w-2xl">
            Feel free to reach out if you&apos;re looking for a developer, have a question, or just want to connect.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-8">
          <a 
            href="mailto:zafeer7460@gmail.com"
            className="flex items-center gap-4 p-6 rounded-lg bg-box border border-box-border hover:border-primary transition-all"
          >
            <FiMail className="text-3xl text-primary" />
            <div className="flex flex-col">
              <h2 className="text-xl">Email</h2>
              <p className="text-foreground-secondary">zafeer7460@gmail.com</p>
            </div>
            <span className="ml-4 text-sm text-foreground-secondary">
              Click to send an email
            </span>
          </a>

          <div className="flex flex-wrap gap-6 justify-center mt-8">
            <a 
              href="https://github.com/ZafeerMahmood" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-box border border-box-border hover:border-primary hover:text-primary transition-all"
            >
              <FiGithub className="text-2xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/zafeer-mahmood-20aa28280/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-full bg-box border border-box-border hover:border-primary hover:text-primary transition-all"
            >
              <FiLinkedin className="text-2xl" />
            </a>
          </div>
        </div>

        <div className="mt-20 p-8 rounded-lg gradientBG border border-box-border">
          <h2 className="text-xl mb-4">Looking for collaboration?</h2>
          <p className="mb-6">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a 
            href="mailto:zafeer7460@gmail.com"
            className="inline-block px-6 py-3 bg-primary text-background rounded-md hover:bg-primary-secondary transition-colors"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
