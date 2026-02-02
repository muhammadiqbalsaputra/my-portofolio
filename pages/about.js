export default function about() {
    return `
    <section id="about" class="pt-24 md:pt-32 pb-12 md:pb-20 bg-gray-50 flex-grow animate-fade-in-up">
        <div class="max-w-6xl mx-auto px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
                <div>
                    <h2 class="text-sm font-semibold text-gray-900 uppercase tracking-widest mb-12">About Me</h2>
                    <h3 class="text-3xl md:text-4xl font-medium leading-tight mb-8">
                        Bridging the gap between hardware and software.
                    </h3>
                    <div class="space-y-6 text-gray-600 leading-relaxed font-light">
                        <p>
                            Based in Tegal, Indonesia. I specialize in Network Administration and Web Programming. My
                            journey began at SMK N 3 Tegal and continues at Universitas Harkat Negeri.
                        </p>
                        <p>
                            I don't just write code; I ensure the underlying infrastructure is solid. From configuring
                            Cisco routers to deploying full-stack web applications, I enjoy the entire technical
                            spectrum.
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-1 gap-8">
                    <div class="border-l border-gray-200 pl-8 py-2">
                        <span class="block text-4xl font-semibold text-gray-900 mb-2">3+</span>
                        <span class="text-gray-500">Years Experience</span>
                    </div>
                    <div class="border-l border-gray-200 pl-8 py-2">
                        <span class="block text-4xl font-semibold text-gray-900 mb-2">20+</span>
                        <span class="text-gray-500">Projects Completed</span>
                    </div>

                    <!-- Skills Minimalist List -->
                    <div class="mt-8">
                        <h4 class="text-sm font-semibold text-gray-900 uppercase tracking-widest mb-6">Tech Stack</h4>
                        <div class="flex flex-wrap gap-3">
                            <span
                                class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600">HTML5/CSS3</span>
                            <span
                                class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600">JavaScript</span>
                            <span class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600">PHP
                                & Laravel</span>
                            <span
                                class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600">Python</span>
                            <span
                                class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600">MySQL</span>
                            <span
                                class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600">Cisco
                                Networking</span>
                            <span
                                class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600">Linux
                                Administration</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}
