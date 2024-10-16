import Link from "next/link";
import {
	IconFlagCheckered,
	CalendarIcon,
	ChevronRightIcon,
	BookIcon,
	IconGift,
} from "@/components/ui/icons";
import Image from "next/image";
import logo_text_image from "@/public/logo-text.webp";

export default function Home() {
	return (
		<>
			<Image
				src={logo_text_image}
				placeholder="blur"
				className="m-0 mt-11 sm:mt-10 pb-2 w-11/12 sm:w-4/12"
				alt="tikum"
			/>
			<nav className="w-full max-w-md grid gap-2 px-4">
				<Link
					href="/peraturan"
					className="bg-background text-secondary-foreground rounded-lg p-4 flex items-center justify-between hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
					prefetch={false}
				>
					<div className="flex items-center gap-2">
						<BookIcon className="w-6 h-6" />
						<span>Peraturan</span>
					</div>
					<ChevronRightIcon className="w-6 h-6" />
				</Link>
				<Link
					href="/livescore"
					className="bg-background text-secondary-foreground rounded-lg p-4 flex items-center justify-between hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
					prefetch={true}
				>
					<div className="flex items-center gap-2">
						<IconFlagCheckered className="w-6 h-6" />
						<div className="flex flex-col">Live Hasil Race</div>
					</div>
					<div className="relative">
						<ChevronRightIcon className="w-6 h-6" />
						<span className="absolute -top-3 -right-4 transform -translate-x-1/2 flex h-3 w-3 z-10">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
							<span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
						</span>
					</div>
				</Link>
				<Link
					href="/jadwal"
					className="bg-background text-secondary-foreground rounded-lg p-4 flex items-center justify-between hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
					prefetch={false}
				>
					<div className="flex items-center gap-2">
						<CalendarIcon className="w-6 h-6" />
						<span>Jadwal Race</span>
					</div>
					<ChevronRightIcon className="w-6 h-6" />
				</Link>
				<Link
					href="/doorprize"
					className="bg-background text-secondary-foreground rounded-lg p-4 flex items-center justify-between hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
					prefetch={false}
				>
					<div className="flex items-center gap-2">
						<IconGift className="w-6 h-6" />
						<span>Doorprize</span>
					</div>
					<ChevronRightIcon className="w-6 h-6" />
				</Link>
			</nav>
		</>
	);
}
