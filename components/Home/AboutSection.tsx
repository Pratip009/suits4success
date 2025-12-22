import Image from "next/image";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800 py-20 lg:py-32 relative overflow-hidden"
        >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-30 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-300 rounded-full blur-3xl opacity-20 -z-10"></div>

            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">

                    {/* Section Heading */}
                    <div className="text-center mb-16">
                        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-gray-600 border-b-2 border-gray-800 pb-2 mb-4">
                            About Us
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
                            Empowering Communities Through Style
                        </h2>
                    </div>

                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left: Image */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                            <Image
                                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80"
                                alt="Professional person in business attire"
                                width={800}
                                height={500}
                                className="relative rounded-2xl shadow-2xl w-full h-125 object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent rounded-2xl"></div>
                        </div>

                        {/* Right: Text Content */}
                        <div className="space-y-8">

                            {/* About Text */}
                            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    <strong className="text-gray-900 text-xl">Suits 4 Success</strong> is a nonprofit organization based in
                                    Jersey City, New Jersey. We provide professional development services
                                    and professional clothing at no cost for low-income and unemployed
                                    individuals in Hudson County.
                                </p>
                            </div>

                            {/* Mission Card */}
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 lg:p-10 text-left shadow-2xl border border-gray-700 hover:shadow-gray-500/20 transition-all duration-300">
                                <h3 className="text-3xl font-bold text-white mb-6 font-serif flex items-center gap-3">
                                    <span className="w-1 h-8 bg-white rounded-full"></span>
                                    Our Mission
                                </h3>

                                <p className="text-gray-200 leading-relaxed mb-4">
                                    We believe that all individuals should have access to financial independence and
                                    stability, regardless of gender or economic status. We strive to empower underserved
                                    and low-income communities by providing access to professional development
                                    opportunities.
                                </p>

                                <p className="text-gray-300 leading-relaxed">
                                    By helping our clients look and feel their best, we support them
                                    in pursuing their goals and reaching their full potential.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};