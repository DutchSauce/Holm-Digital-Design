import { config } from "@/config/envs";

type Nav = {
    title: string;
    url: string;
};
const navs: Nav[] = [
    {
        title: "Portfolio",
        url: "#portfolio",
    },
    {
        title: "Om",
        url: "#om",
    },
    {
        title: "Kontakt",
        url: "#kontakt",
    },
];

export default function Navbar() {
    return (
        <div className="flex justify-between w-full px-36 h-28 drop-shadow-2xl bg-[#FAECC5]">
            <div className="flex items-center">LOGO HER</div>
            <div className="flex items-center">
                {navs.map((nav, index) => (
                    <a
                        key={`nav-${index}`}
                        className={`px-12 text-xl  text-[#050C69]  ${
                            index === navs.length - 1 ? "pr-0" : ""
                        }`}
                        href={`${config.HOME}${nav.url}`}
                    >
                        {nav.title}
                    </a>
                ))}
            </div>
        </div>
    );
}
