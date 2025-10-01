import { useForm } from "@inertiajs/react";
import { Send, Clock, CheckCircle, AlertCircle } from "lucide-react";

const ContactForm = ({ layout = "home" }) => {
    const { data, setData, post, processing, errors, recentlySuccessful } =
        useForm({
            name: "",
            email: "",
            subject: "",
            message: "",
        });

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

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/emails/send", {
            onSuccess: () => {
                reset();
            },
        });
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        subPost("/subscribe", {
            onSuccess: () => {
                reset("email");
            },
        });
    };

    return (
        <div className={`${(layout = "home" ? " max-w-6xl mx-auto" : "")}`}>
            {/* Contact Form */}
            <div
                data-aos="fade-left"
                data-aos-delay="50"
                className="bg-gray-900/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 shadow-2xl"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg">
                        <Send className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                        Send us a Message
                    </h2>
                </div>

                {recentlySuccessful && (
                    <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-2xl flex items-center gap-3 mb-4">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <p className="text-green-400 font-medium">
                            Thank you! Your message has been sent successfully.
                        </p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* name + email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                placeholder="Your Full Name"
                                className="w-full px-4 py-4 rounded-xl bg-gray-900/30 border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition text-white placeholder-gray-400"
                            />
                            {errors.name && (
                                <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                                    <AlertCircle size={14} />
                                    {errors.name}
                                </p>
                            )}
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                placeholder="your.email@example.com"
                                className="w-full px-4 py-4 rounded-xl bg-gray-900/30 border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition text-white placeholder-gray-400"
                            />
                            {errors.email && (
                                <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                                    <AlertCircle size={14} />
                                    {errors.email}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* subject */}
                    <div>
                        <input
                            type="text"
                            name="subject"
                            value={data.subject}
                            onChange={(e) => setData("subject", e.target.value)}
                            placeholder="What's this about?"
                            className="w-full px-4 py-4 rounded-xl bg-gray-900/30 border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition text-white placeholder-gray-400"
                        />
                        {errors.subject && (
                            <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                                <AlertCircle size={14} />
                                {errors.subject}
                            </p>
                        )}
                    </div>

                    {/* message */}
                    <div>
                        <textarea
                            name="message"
                            value={data.message}
                            onChange={(e) => setData("message", e.target.value)}
                            placeholder="Tell us about your project or inquiry..."
                            rows="6"
                            className="w-full px-4 py-4 rounded-xl bg-gray-900/30 border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition text-white placeholder-gray-400 resize-none"
                        ></textarea>
                        {errors.message && (
                            <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                                <AlertCircle size={14} />
                                {errors.message}
                            </p>
                        )}
                    </div>

                    {/* submit */}
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                    >
                        {processing ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>

            {/* Subscribe Section */}
            <div
                data-aos="fade-left"
                data-aos-delay="100"
                className={`bg-gradient-to-br from-gray-900/40 to-purple-900/20 rounded-2xl p-8 border border-purple-500/20 shadow-2xl mt-6 ${(layout =
                    "home" ? " hidden" : "")}`}
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
        </div>
    );
};

export default ContactForm;
