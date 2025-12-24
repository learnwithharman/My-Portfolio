import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MagicCard, MagicContainer } from '@/components/ui/MagicCard';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "officialharman69@gmail.com",
      href: "mailto:officialharman69@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9915012768",
      href: "tel:+919915012768"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Punjab, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rohit-kumar-325a40204",
      color: "hover:text-neon-blue"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/Harmxn_2005",
      color: "hover:text-neon-purple"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/cozy.monkk/",
      color: "hover:text-pink-500"
    }
  ];

  return (
    <footer id="contact" className="py-20 px-6 border-t border-space-deep" aria-labelledby="contact-heading">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2
            id="contact-heading"
            className="font-raleway text-4xl md:text-5xl font-bold text-text-primary mb-6 glow-text"
          >
            Let's Connect
          </h2>
          <p className="font-raleway text-xl text-text-secondary max-w-2xl mx-auto">
            Looking for an enthusiastic intern? Let's connect and discuss opportunities to learn and contribute.
          </p>
        </div>

        <MagicContainer className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <MagicCard
            className="rounded-xl p-8 border-white/5"
            glowColor="0, 242, 255"
            particleCount={5}
          >
            <h3 className="font-raleway text-2xl font-bold text-text-primary mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-space-deep border border-neon-cyan/30 group-hover:border-neon-cyan mr-4 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-neon-cyan" />
                  </div>
                  <div>
                    <div className="text-sm text-text-muted">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-text-primary hover:text-neon-cyan transition-colors duration-300 focus-glow"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-text-primary">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-space-deep">
              <h4 className="font-plus font-semibold text-text-primary mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 rounded-full bg-space-deep border border-transparent hover:border-neon-cyan text-text-secondary ${social.color} transition-all duration-300 focus-glow group`}
                    aria-label={`Follow on ${social.label}`}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </MagicCard>

          {/* CTA Section */}
          <MagicCard
            className="rounded-xl p-8 text-center border-white/5"
            glowColor="132, 0, 255"
            particleCount={5}
          >
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-neon rounded-full mx-auto mb-6 flex items-center justify-center">
                <Mail className="w-12 h-12 text-space-black" />
              </div>
              <h3 className="font-raleway text-2xl font-bold text-text-primary mb-4">
                Start a Project
              </h3>
              <p className="text-text-secondary mb-8">
                Looking for a motivated intern? I'm eager to learn and contribute to your team.
              </p>
            </div>

            <Button
              className="bg-neon-purple hover:bg-neon-purple/80 text-space-black font-semibold px-8 py-3 rounded-xl shadow-purple hover:shadow-neon transition-all duration-300 focus-glow w-full"
              asChild
            >
              <a href="mailto:officialharman69@gmail.com">
                Get In Touch
              </a>
            </Button>
          </MagicCard>
        </MagicContainer>

        {/* Footer Bottom */}
        <div className="text-center pt-8 border-t border-space-deep">
          <p className="text-text-muted">
            © 2024 Harman. Designed and built with{' '}
            <span className="text-neon-cyan">{'<'}</span>
            <span className="text-neon-purple">passion</span>
            <span className="text-neon-cyan">{' />'}</span>
            {' '}and lots of{' '}
            <span className="text-neon-blue">☕</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;