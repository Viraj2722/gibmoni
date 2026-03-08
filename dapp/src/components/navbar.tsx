import Link from 'next/link';
import { WalletButton } from "../app/context/solanaProvider"

export default function Navbar() {
    return (
        <div className="absolute top-0 left-0 right-0 w-full px-4 pt-4 lg:px-6 lg:pt-6 z-50">
            <div className="relative w-full">
                <nav className="relative w-full border border-zinc-800 bg-zinc-950/90 backdrop-blur-md px-6 py-3 lg:px-8">

                    <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-zinc-500 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-zinc-500 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-zinc-500 pointer-events-none"></div>
                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-zinc-500 pointer-events-none"></div>

                    <div className="flex items-center justify-between">

                        <Link href="/" className="flex items-center gap-3 group">
                            <span className="flex items-center gap-1.5 text-zinc-500 font-mono text-xs group-hover:text-zinc-300 transition-colors">
                                {`[$]`}            
                            </span>
                            <span className="text-sm sm:text-base tracking-[0.15em] text-zinc-100 font-Pixel">
                                gibMoni
                            </span>
                        </Link>

                        <div className="flex items-center gap-6">
                            <div className="p-1">
                                <WalletButton />
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
        </div>
    )
}