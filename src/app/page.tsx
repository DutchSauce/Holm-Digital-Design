import Navbar from "@/components/navbar";

export default function Home() {
    return (
        <main className="">
            <div className="sticky top-0 z-10">
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
            <div className="flex flex-col justify-center w-full text-center text-[#050C69]">
                <h3 className="font-extrabold text-xl mb-3">
                    Holm Digital Design
                </h3>
                <div className="h-24">
                    <h2 className="text-6xl mb-3">
                        Digital design til din virksomhed
                    </h2>
                </div>
                <div className="flex justify-center">
                    <p className="text-xl w-[767px] h-[129px] mb-10 leading-8">
                        Jeg hedder Emma og jeg er en person, der er drevet af
                        kreativitet og optimisme. Jeg er hjernen og hjertet bag
                        Holm Digital Design. Den digitale verden er i konstant
                        udvikling. Derfor vil jeg skabe unikke, digitale
                        oplevelser, der sætter din virksomhed i rampelyset!
                    </p>
                </div>
                <div>
                    <button className="border-solid border-[1.5px] border-[#050C69] rounded-full w-48 h-12 bg-[#FAECC5] hover:bg-[#050C69] hover:text-[#FAECC5] transition duration-200 ease-out hover:ease-in ">
                        Portfolio
                    </button>
                </div>
            </div>
            {/* About section */}
            <div className="h-[881px] bg-[#050C69] text-[#FAECC5] mb-[1200px] mt-48">
                <div className="text-xl font-bold text-center pt-12">
                    Web design i Holm ånd
                </div>
                <div className="flex text-[#FAECC5] text-xl mt-14 mb-20 justify-evenly text-center px-[124px] gap-16">
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="text-6xl h-24">Æstetisk design</h3>
                        <p className="w-[397px] leading-10 font-extralight">
                            Et godt design skal selvfølgelig ikke kun være
                            æstetisk flot, det handler også om at skabe en
                            hjemmeside med høj funktionalitet og
                            brugervenlighed. Det handler i alt sin enkelthed om,
                            hvor nemt og intuitivt det er for dine kunder at
                            navigere sig rundt på din hjemmeside.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="text-6xl h-24">Brugervenlighed</h3>
                        <p className="w-[397px] leading-10 font-extralight">
                            Et godt design skal selvfølgelig ikke kun være
                            æstetisk flot, det handler også om at skabe en
                            hjemmeside med høj funktionalitet og
                            brugervenlighed. Det handler i alt sin enkelthed om,
                            hvor nemt og intuitivt det er for dine kunder at
                            navigere sig rundt på din hjemmeside.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="text-6xl h-24">Skræddersyet</h3>
                        <p className="w-[441px] leading-10 font-extralight">
                            Ikke alle virksomheder er ens, og jeres hjemmeside
                            skal repræsentere jeres visioner på en indbydende
                            måde. Jeg arbejder ud fra den overbevisning, at med
                            et direkte samarbejde og en tæt forbindelse i den
                            kreative proces, kan vi skabe en personlig og
                            skræddersyet hjemmeside til din virksomhed.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="relative flex flex-col justify-center items-center w-[962px] h-[1159px] bg-[#FCE374] rounded-t-full text-center text-xl text-[#050C69] z-0">
                        <h5 className="font-bold mb-7">Hvem er Emma?</h5>
                        <p className="font-light w-[451px] leading-8">
                            Jeg hedder Emma og jeg er en person, der er drevet
                            af kreativitet og optimisme. Jeg er hjernen og
                            hjertet bag Holm Digital Design. Den digitale verden
                            kan være svær at forstå, da den er i konstant
                            udvikling. Derfor vil jeg skabe unikke, digitale
                            oplevelser, der sætter din virksomhed i rampelyset!
                        </p>
                        <div className="absolute bg-[#050C69] w-[381px] h-[381px] rounded-full -bottom-40"></div>
                    </div>
                </div>
            </div>

            {/* Portfolio section */}
            <div className=""></div>
            {/* Kontakt section/footer */}
            <div className="h-[913px] bg-[#340BFB]"></div>
        </main>
    );
}
