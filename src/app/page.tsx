import Navbar from "@/components/navbar";

export default function Home() {
    return (
        <main className="">
            <div className="sticky top-0">
                <Navbar />
            </div>
            <div className="flex justify-center h-[1067px] w-full">
                <div className="flex justify-center items-center mt-24 bg-[#340BFB] rounded-full h-[675px] w-[675px]">
                    <h1 className="text-[#FCE374] font-serif text-6xl">
                        Digital Design
                    </h1>
                </div>
            </div>
            {/* Intro text */}
            <div className="flex flex-col justify-center text-center text-[#050C69]">
                <h3 className="font-bold text-xl">Holm Digital Design</h3>

                <h2 className="text-6xl">Digital design til din virksomhed</h2>

                <p className="">
                    Jeg hedder Emma og jeg er en person, der er drevet af
                    kreativitet og optimisme. Jeg er hjernen og hjertet bag Holm
                    Digital Design. Den digitale verden er i konstant udvikling.
                    Derfor vil jeg skabe unikke, digitale oplevelser, der sætter
                    din virksomhed i rampelyset!
                </p>
                <div>
                    <button className="border-solid border-2 border-[#050C69] rounded-full w-48 h-12 bg-[#FAECC5]">
                        Potofolio
                    </button>
                </div>
            </div>
            {/* About section */}
            <div className=""></div>
            {/* Portfolio section */}
            <div className=""></div>
            {/* Kontakt section/footer */}
            <div className="h-[913px] bg-[#340BFB]"></div>
        </main>
    );
}
