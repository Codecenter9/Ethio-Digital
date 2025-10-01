import { SharedHero } from "@/Components/Client/Layout/SharedHero";
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Youtube,
    Github,
    MessageCircle,
} from "lucide-react";
import { Link, Head } from "@inertiajs/react";
import ClientLayout from "@/Layouts/ClientLayout/ClientLayout";
import ContactForm from "@/Components/Client/cards/Form";

const Contact = () => {
    const meta = {
        title: "Contact Us | Meskot Digital Solutions",
        description:
            "Get in touch with Meskot Digital Solutions for software development, design, and digital services. Reach us for inquiries, collaborations, and support.",
        keywords:
            "Meskot Digital Solutions contact, software company Ethiopia, digital services support, tech collaboration Ethiopia, software inquiries",
        url: "https://meskotdigitalsolutions.com/contact",
        image: "https://meskotdigitalsolutions.com/images/contact-cover.jpg",
    };

    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Youtube, href: "#", label: "YouTube" },
        { icon: Github, href: "#", label: "GitHub" },
        { icon: MessageCircle, href: "#", label: "Messenger" },
    ];

    const contactDetails = [
        {
            icon: MapPin,
            text: "Addis Ababa, Ethiopia",
            subtext: "Our Headquarters",
            delay: "50",
        },
        {
            icon: Phone,
            text: "+251 912 345 678",
            subtext: "Mon-Fri, 9AM-6PM",
            delay: "100",
        },
        {
            icon: Mail,
            text: "info@meskotdigitals.com",
            subtext: "We reply within 24 hours",
            delay: "150",
        },
    ];

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:site_name"
                    content="Meskot Digital Solutions"
                />
                <meta property="og:url" content={meta.url} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
            </Head>

            <main className="bg-gray-950 text-gray-100 min-h-screen">
                <SharedHero
                    title="Contact Us"
                    description="Ready to bring your ideas to life? Get in touch with us and let's create something amazing together."
                />

                <section className="relative py-16 md:py-24">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10" />

                    <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                            {/* Contact Information */}
                            <div className="flex-1 space-y-8">
                                <div data-aos="fade-right" data-aos-delay="50">
                                    <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
                                        Get in Touch
                                    </h2>
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        We're here to help you transform your
                                        digital vision into reality. Reach out
                                        and let's discuss how we can work
                                        together.
                                    </p>
                                </div>

                                {/* Contact Details */}
                                <div className="space-y-6">
                                    {contactDetails.map((item, index) => {
                                        const Icon = item.icon;
                                        return (
                                            <div
                                                key={index}
                                                data-aos="fade-right"
                                                data-aos-delay={item.delay}
                                                className="flex items-start gap-4 p-4 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-pink-500/30 transition-all duration-300"
                                            >
                                                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl">
                                                    <Icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <p className="text-lg font-semibold text-white">
                                                        {item.text}
                                                    </p>
                                                    <p className="text-sm text-gray-400 mt-1">
                                                        {item.subtext}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Social Links */}
                                <div data-aos="fade-right" data-aos-delay="200">
                                    <h3 className="text-xl font-semibold text-white mb-4">
                                        Follow Us
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {socialLinks.map((social, index) => {
                                            const Icon = social.icon;
                                            return (
                                                <Link
                                                    key={index}
                                                    href={social.href}
                                                    className="group p-3 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500 hover:bg-pink-500/10 transition-all duration-300"
                                                    aria-label={social.label}
                                                >
                                                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-colors" />
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form & Subscribe */}
                            <div className="flex-2 space-y-8">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Contact;

Contact.layout = (page) => <ClientLayout children={page} />;
