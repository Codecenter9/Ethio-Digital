import React from "react";
import { Star } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/Carousel";
import SectionHeading from "../Layout/SectionHeading";

const testimonials = [
    {
        name: "Sara Bekele",
        role: "Business Owner",
        avatar: "/images/about.webp",
        comment:
            "Working with Meskot Digitals was a game changer for my business. They built a modern website and gave us the digital presence we needed to reach more customers.",
        rating: 5,
    },
    {
        name: "Michael Tesfaye",
        role: "Startup Founder",
        avatar: "/images/about.webp",
        comment:
            "Their team was creative, reliable, and fast. From design to launch, everything was smooth, and the final product exceeded our expectations.",
        rating: 5,
    },
    {
        name: "Hana Yared",
        role: "Marketing Manager",
        avatar: "/images/about.webp",
        comment:
            "Meskot Digitals helped us grow our online campaigns with smart strategies and great content. They really understand how to connect with audiences.",
        rating: 5,
    },
    {
        name: "Daniel Mekonnen",
        role: "E-commerce Manager",
        avatar: "/images/about.webp",
        comment:
            "Our online sales increased by 120% after Meskot Digitals redesigned our website and implemented their SEO strategies.",
        rating: 5,
    },
    {
        name: "Liya Abraham",
        role: "Non-profit Director",
        avatar: "/images/about.webp",
        comment:
            "They perfectly captured our mission and vision in our website design. The donation system they implemented has been seamless.",
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <section className="relative overflow-hidden" aria-labelledby="testimonials-heading">
            <div className="absolute w-full -top-[170px] md:-top-[420px]">
                <img
                    src="/images/image1.webp"
                    loading="lazy"
                    className="w-full h-full object-cover opacity-30 rounded-3xl"
                    alt="Background"
                />
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

            <div className="relative max-w-7xl  py-12 md:pt-24 px-6 md:px-12 mx-auto z-10">
                {/* Section heading */}
                <SectionHeading
                    subtitle="Testimonials"
                    title="What Our Clients Say"
                    description="Hear from our satisfied clients and see how Meskot Digitals is making a difference for businesses like yours."
                />

                {/* Carousel */}
                <div className="mt-12 md:mt-16">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem
                                    key={index}
                                    className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                                >
                                    <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col gap-5 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                                        {/* Rating */}
                                        <div
                                            className="flex gap-1 mb-2"
                                            aria-label={`Rating: ${testimonial.rating} out of 5`}
                                        >
                                            {Array.from({ length: 5 }).map(
                                                (_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-5 h-5 ${
                                                            i <
                                                            testimonial.rating
                                                                ? "text-yellow-400 fill-yellow-400"
                                                                : "text-gray-600"
                                                        }`}
                                                        aria-hidden="true"
                                                    />
                                                )
                                            )}
                                        </div>

                                        {/* Comment */}
                                        <p className="text-gray-200 leading-relaxed flex-grow text-lg italic">
                                            {testimonial.comment}
                                        </p>

                                        {/* Avatar & Name */}
                                        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-700/50">
                                            <div className="w-12 h-12 relative">
                                                <img
                                                    src={testimonial.avatar}
                                                    loading="lazy"
                                                    alt={`${testimonial.name} avatar`}
                                                    className="rounded-full object-cover border-2 border-cyan-500/30 w-full h-full"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-white">
                                                    {testimonial.name}
                                                </h3>
                                                <p className="text-sm text-cyan-400">
                                                    {testimonial.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Custom positioned arrows at bottom center */}
                        <div className="flex justify-center mt-10 gap-4">
                            <CarouselPrevious className="bg-cyan-600 hover:bg-cyan-500 text-white border-0 w-12 h-12 rounded-full" />
                            <CarouselNext className="bg-cyan-600 hover:bg-cyan-500 text-white border-0 w-12 h-12 rounded-full" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
