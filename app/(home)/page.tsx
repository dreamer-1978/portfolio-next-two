import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import { GridBackgroundDemo } from "@/components/ui/grid";

export default function Home() {
	return (
		<div className={"min-h-[400vh] bg-black overflow-hidden relative"}>
			<GridBackgroundDemo className={"absolute inset-0"} />
			<div className={"max-w-7xl mx-auto p-5 relative"}>
				<Navbar />
				<Hero />
			</div>
			<div className={"h-10 sm:h-32 bg-gradient-to-t from-black left-0" +
				" xl:bottom-0 w-full"}>
			</div>
			<div className={"max-w-7xl mx-auto p-5 mt-20"}>
				<Skills />
			</div>
		</div>
	);
}
