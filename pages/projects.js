export default function projects() {
    return `
    <section id="projects" class="pt-24 md:pt-32 pb-12 md:pb-20 flex-grow animate-fade-in-up">
        <div class="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 class="text-sm font-semibold text-gray-900 uppercase tracking-widest mb-10 md:mb-16">Selected Work</h2>

            <div class="grid grid-cols-1 gap-12 md:gap-20">
                <!-- Project 1 -->
                <div class="group grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div class="bg-gray-100 rounded-2xl overflow-hidden aspect-[4/3] relative">
                        <div class="absolute inset-0 flex items-center justify-center text-gray-300">
                            <i class="fas fa-laptop-code text-6xl opacity-50"></i>
                        </div>
                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500">
                        </div>
                    </div>
                    <div class="space-y-6">
                        <h3 class="text-3xl font-medium text-gray-900">IniGadget</h3>
                        <p class="text-gray-600 leading-relaxed font-light">
                            A comprehensive e-commerce platform for gadgets. Features real-time inventory management,
                            secure checkout, and a responsive admin dashboard.
                        </p>
                        <div class="flex gap-4 text-sm text-gray-500">
                            <span>Laravel</span>
                            <span>&bull;</span>
                            <span>MySQL</span>
                            <span>&bull;</span>
                            <span>Tailwind</span>
                        </div>
                        <a href="#"
                            class="inline-block text-black border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all">View
                            Project</a>
                    </div>
                </div>

                <!-- Project 2 -->
                <div class="group grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
                    <div class="md:order-2 bg-gray-100 rounded-2xl overflow-hidden aspect-[4/3] relative">
                        <div class="absolute inset-0 flex items-center justify-center text-gray-300">
                            <i class="fas fa-network-wired text-6xl opacity-50"></i>
                        </div>
                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500">
                        </div>
                    </div>
                    <div class="md:order-1 space-y-6">
                        <h3 class="text-3xl font-medium text-gray-900">NetMonitor</h3>
                        <p class="text-gray-600 leading-relaxed font-light">
                            Real-time network monitoring dashboard using SNMP. Visualizes bandwidth usage, device
                            health, and sends automated alerts via Telegram API.
                        </p>
                        <div class="flex gap-4 text-sm text-gray-500">
                            <span>Python</span>
                            <span>&bull;</span>
                            <span>SNMP</span>
                            <span>&bull;</span>
                            <span>JS Charts</span>
                        </div>
                        <a href="#"
                            class="inline-block text-black border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all">View
                            Project</a>
                    </div>
                </div>

                <!-- Project 3 -->
                <div class="group grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div class="bg-gray-100 rounded-2xl overflow-hidden aspect-[4/3] relative">
                        <div class="absolute inset-0 flex items-center justify-center text-gray-300">
                            <i class="fas fa-route text-6xl opacity-50"></i>
                        </div>
                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500">
                        </div>
                    </div>
                    <div class="space-y-6">
                        <h3 class="text-3xl font-medium text-gray-900">Rempah Tour</h3>
                        <p class="text-gray-600 leading-relaxed font-light">
                            An immersive travel platform dedicated to the spice routes. Explore historical destinations,
                            book guided tours, and discover the rich heritage of spices.
                        </p>
                        <div class="flex gap-4 text-sm text-gray-500">
                            <span>PHP</span>
                            <span>&bull;</span>
                            <span>MySQL</span>
                            <span>&bull;</span>
                            <span>Bootstrap</span>
                        </div>
                        <a href="#"
                            class="inline-block text-black border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all">View
                            Project</a>
                    </div>
                </div>

                <!-- Project 4 -->
                <div class="group grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
                    <div class="md:order-2 bg-gray-100 rounded-2xl overflow-hidden aspect-[4/3] relative">
                        <div class="absolute inset-0 flex items-center justify-center text-gray-300">
                            <i class="fas fa-eye text-6xl opacity-50"></i>
                        </div>
                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500">
                        </div>
                    </div>
                    <div class="md:order-1 space-y-6">
                        <h3 class="text-3xl font-medium text-gray-900">Jagamata</h3>
                        <p class="text-gray-600 leading-relaxed font-light">
                            A smart surveillance solution for community safety. Features AI-powered object detection,
                            real-time alerts, and cloud storage integration.
                        </p>
                        <div class="flex gap-4 text-sm text-gray-500">
                            <span>Flutter</span>
                            <span>&bull;</span>
                            <span>Firebase</span>
                            <span>&bull;</span>
                            <span>TensorFlow</span>
                        </div>
                        <a href="#"
                            class="inline-block text-black border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all">View
                            Project</a>
                    </div>
                </div>

            </div>
        </div>
    </section>
    `;
}
