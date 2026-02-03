export default function home() {
    return `
    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center pt-24 pb-12 flex-grow animate-fade-in-up">
        <div class="max-w-6xl mx-auto px-6 lg:px-8 w-full">
            <div class="flex flex-col md:flex-row items-center justify-between gap-12">
                <div class="max-w-3xl flex-1 order-1 md:order-1">
                    <p class="text-gray-500 font-medium mb-6 uppercase tracking-wider text-xs md:text-sm">Hello, I'm
                        Iqbal</p>
                    <h1 class="text-4xl md:text-7xl font-semibold tracking-tight leading-tight mb-8">
                        Network Specialist & <br> <span class="text-gray-400">Web Developer.</span>
                    </h1>
                    <p class="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mb-10 font-light">
                        I build robust digital infrastructure and craft minimal, functional web experiences. Focusing on
                        performance, security, and clean code.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <a href="/projects" data-link
                            class="group relative px-8 py-4 bg-gray-900 text-white rounded-full overflow-hidden transition-all hover:bg-gray-800 text-center cursor-pointer">
                            <span class="relative z-10 font-medium">View Projects</span>
                        </a>
                        <a href="/contact" data-link
                            class="px-8 py-4 text-gray-900 border border-gray-200 rounded-full hover:border-gray-900 transition-colors font-medium text-center cursor-pointer">
                            Contact Me
                        </a>
                    </div>
                </div>
                <div class="flex-1 max-w-xs md:max-w-md w-full order-2 md:order-2">
                    <div
                        class="aspect-square rounded-full overflow-hidden border-4 border-gray-100 shadow-2xl relative transition-transform duration-500 hover:scale-110">
                        <img src="images/Untitled design (24).png" alt="Muhammad Iqbal Saputra"
                            class="w-full h-full object-cover">
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}
