export default function Footer() {
    return (
        <>
            {/* Footer */}
            <div className="relative text-center mt-12 space-y-4 pb-8 z-10 ">
                <div className="flex justify-center space-x-6">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
                </div>

                <p className="text-white text-sm font-mono ">{"</>"} Creado con pasion & cafeina</p>

                <div className="text-xs text-white">
                    © 2025 •{' '}
                    <a
                        href="https://santiagomartinez-developer.vercel.app/" // ← Cambia esto por tu URL real (GitHub, LinkedIn, portfolio...)
                        className="underline hover:text-purple-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Santiago Martinez Developer
                    </a>{' '}
                    • Siempre aprendiendo, siempre codeando
                </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-br-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-cyan-500/20 to-transparent rounded-tl-full blur-2xl" />
        </>
    );
}