import {
    Github,
    Linkedin,
    Mail,
    Globe,
    Code,
    Database,
} from "lucide-react"
import { Card } from "./ui/card";
import CurvedLoop from "./curveloop";

const links = [
    {
        title: "Portfolio Web",
        description: "Mis proyectos y trabajos",
        icon: Globe,
        url: "https://santiagomartinez-developer.vercel.app/",
        color: "from-purple-500 to-pink-500",
    },
    {
        title: "GitHub",
        description: "Código y repositorios",
        icon: Github,
        url: "https://github.com/devSantiagoM",
        color: "from-gray-500 to-gray-700",
    },
    {
        title: "LinkedIn",
        description: "Perfil profesional",
        icon: Linkedin,
        url: "https://linkedin.com/in/tu-perfil",
        color: "from-blue-500 to-blue-700",
    },
    {
        title: "Frontend Projects",
        description: "React, Next.js, Vue",
        icon: Code,
        url: "https://github.com/devSantiagoM?tab=repositories&q=&type=public&language=&sort=",
        color: "from-cyan-500 to-blue-500",
    },
    {
        title: "Backend APIs",
        description: "Node.js, Python, Databases",
        icon: Database,
        url: "https://github.com/devSantiagoM?tab=repositories&q=&type=public&language=&sort=",
        color: "from-green-500 to-emerald-500",
    },
    {
        title: "Contacto",
        description: "Hablemos de proyectos",
        icon: Mail,
        url: "https://santiagomartinez-developer.vercel.app/#contact",
        color: "from-yellow-500 to-orange-500",
    },
]

export default function Hero() {
    return (
        <div className=" min-h-screen w-full bg-black text-white font-sans flex items-center justify-center px-6 pointer-event-none ">

            <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10 py-20 ">
                {/* Izquierda */}

                <div className="md:w-1/2 flex flex-col justify-center  md:translate-y-[-20px] lg:translate-y-[-40px] ">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2 z-10 ">
                        Santiago Martinez Developer Full-Stack
                    </h1>
                    <p className="text-lg text-gray-300 z-10">
                        Bienvenido a mi espacio. Aquí encuentras mis redes, proyectos y más.
                    </p>
                    {/*With custom props */}
                    {/*  CurvedLoop aqui, fuera del contenido principal, con margen superior */}
                    <div className="w-full max-w-6xl px-6 mt-8 z-10 ">
                        <CurvedLoop
                            marqueeText="HTML/CSS ✦ React ✦ Next.js ✦ JavaScript ✦ Typescript ✦ Node.js ✦ Vite ✦ TailwindCSS ✦ Python ✦ PostgreSQL ✦ MySQL ✦ Git ✦"
                            speed={3}
                            curveAmount={0}
                            direction="left"
                            interactive={true}
                            className="custom-text-style"
                        />
                    </div>
                </div>

                {/* Derecha */}
                {/* Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {links.map((link, index) => {
                        const Icon = link.icon
                        return (
                            <Card
                                key={index}
                                onClick={() => window.open(link.url, "_blank")}
                                className="group relative cursor-pointer bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden backdrop-blur-sm"
                            >
                                <div className="w-full h-auto p-6 justify-start text-left relative z-10">
                                    <div className="flex items-center space-x-4 w-full">
                                        <div
                                            className={`p-3 rounded-lg bg-gradient-to-r ${link.color} group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                                {link.title}
                                            </h3>
                                            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                                {link.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover glow effect */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}
                                />

                                {/* Border glow */}
                                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-cyan-500/30 group-hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300" />
                            </Card>
                        )
                    })}
                </div>

            </div>
        </div>
    );
}