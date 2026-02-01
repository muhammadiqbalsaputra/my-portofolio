export default function contact() {
    return `
    <section id="contact" class="pt-24 md:pt-32 pb-12 md:pb-20 bg-gray-900 text-white flex-grow flex items-center animate-fade-in-up">
        <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center w-full">
            <h2 class="text-4xl md:text-5xl font-semibold mb-8">Let's work together.</h2>
            <p class="text-xl text-gray-400 mb-12 font-light">
                Have a project in mind or just want to discuss networking? I'm currently available for freelance work.
            </p>
            <a href="mailto:muhammad.iqbal.sap@gmail.com"
                class="inline-block px-10 py-5 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Say Hello
            </a>

            <div class="mt-20 flex justify-center space-x-12">
                <a href="https://github.com/muhammadiqbalsaputra" target="_blank"
                    class="text-gray-400 hover:text-white transition-colors">
                    <i class="fab fa-github text-2xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/miqbalptr/" target="_blank"
                    class="text-gray-400 hover:text-white transition-colors">
                    <i class="fab fa-linkedin text-2xl"></i>
                </a>
                <a href="https://www.instagram.com/balee.sa" target="_blank" class="text-gray-400 hover:text-white transition-colors">
                    <i class="fab fa-instagram text-2xl"></i>
                </a>
            </div>
        </div>
    </section>
    `;
}
