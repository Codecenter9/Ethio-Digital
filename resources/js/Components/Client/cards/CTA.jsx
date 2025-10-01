import React, { useState } from "react";
import { AlertCircle, CheckCircle, Clock } from "lucide-react";
import { useForm } from "@inertiajs/react";

const CTA = () => {
    const [email, setEmail] = useState("");
    const {
        data: subData,
        setData: setSubData,
        post: subPost,
        processing: subProcessing,
        errors: subErrors,
        recentlySuccessful: subSuccess,
    } = useForm({
        email: "",
    });

    const handleSubscribe = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            alert(`Thank you for subscribing with ${email}!`);
            setEmail("");
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <section className="relative w-full max-w-6xl mx-auto ">
            <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="bg-gradient-to-br from-gray-900/40 to-purple-900/20 rounded-2xl p-8 border border-purple-500/20 shadow-2xl mt-6"
            >
                <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-purple-400" />
                    <h3 className="text-xl font-semibold text-white">
                        Stay Updated
                    </h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                    Get the latest insights, project updates, and exclusive
                    content delivered straight to your inbox.
                </p>

                {subSuccess ? (
                    <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-green-400 font-medium">
                            Thank you for subscribing!
                        </span>
                    </div>
                ) : (
                    <form onSubmit={handleSubscribe} className="flex gap-3">
                        <input
                            type="email"
                            name="email"
                            value={subData.email}
                            onChange={(e) =>
                                setSubData("email", e.target.value)
                            }
                            placeholder="Enter your email"
                            required
                            className="flex-1 px-4 py-3 rounded-xl bg-gray-900/30 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition text-white placeholder-gray-400"
                        />
                        <button
                            type="submit"
                            disabled={subProcessing}
                            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg transition transform hover:scale-105 disabled:opacity-50"
                        >
                            {subProcessing ? "Subscribing..." : "Subscribe"}
                        </button>
                    </form>
                )}
                {subErrors.email && (
                    <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {subErrors.email}
                    </p>
                )}
            </div>
        </section>
    );
};

export default CTA;
