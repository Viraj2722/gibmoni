import React from 'react';
import Link from 'next/link';
import { ArrowRight } from "lucide-react";

export default function LandingPage() {
    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">

            {/* HERO SECTION */}
            <section className="relative w-full px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-32 overflow-hidden bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] dark:bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:24px_24px]">

                {/* Background Fade Mask */}
                <div className="absolute inset-0 bg-zinc-50/80 dark:bg-zinc-950/80 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)] pointer-events-none transition-colors duration-300"></div>

                <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">

                    <h1 className="font-pixel text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-widest text-zinc-900 dark:text-zinc-100 mb-2 select-none uppercase transition-colors duration-300">
                        Raise. Escrow.
                    </h1>

                    <h1 className="font-pixel text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-widest text-zinc-900 dark:text-zinc-100 mb-8 select-none uppercase transition-colors duration-300">
                        Vote. Unlock.
                    </h1>

                    <p className="text-base lg:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mb-12 leading-relaxed font-sans transition-colors duration-300">
                        A decentralized crowdfunding protocol on Solana. Capital is secured in escrow and released in strict tranches only when the community verifies proof-of-work. Zero upfront payouts. Complete accountability.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center w-full sm:w-auto">

                        {/* Primary CTA */}
                        <Link href="/create" className="group flex items-center w-full sm:w-auto bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-sm font-mono tracking-wider uppercase border border-zinc-900 dark:border-zinc-100 hover:opacity-90 transition-all">
                            <span className="flex items-center justify-center w-12 h-12 bg-zinc-800 dark:bg-zinc-200 text-zinc-50 dark:text-zinc-900 transition-colors">
                                <ArrowRight size={18} strokeWidth={2} className="transition-transform group-hover:translate-x-1" />
                            </span>
                            <span className="px-6 py-3 font-bold whitespace-nowrap">
                                Launch a Project
                            </span>
                        </Link>

                        {/* Secondary CTA */}
                        <Link href="/projects" className="text-sm font-mono tracking-wider uppercase text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline underline-offset-4 transition-colors py-3">
                            Back a Builder
                        </Link>

                    </div>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="w-full px-6 py-20 lg:px-12 max-w-7xl mx-auto">

                {/* Section label */}
                <div className="flex items-center gap-4 mb-10">
                    <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-zinc-500 font-mono whitespace-nowrap">
                        {"// CORE_MECHANICS"}
                    </span>
                    <div className="flex-1 border-t border-zinc-300 dark:border-zinc-800 transition-colors duration-300" />
                    <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-zinc-500 font-mono">
                        001
                    </span>
                </div>

                {/* 2x2 Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-300 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-800 transition-colors duration-300">

                    {/* Feature 1: Escrow */}
                    <div className="group bg-zinc-50 dark:bg-zinc-950 p-8 sm:p-10 flex flex-col hover:bg-white dark:hover:bg-zinc-900/50 transition-colors">
                        <div className="text-zinc-400 dark:text-zinc-600 font-mono text-xs mb-8">{"[ 01 ]"}</div>
                        <h3 className="text-zinc-900 dark:text-zinc-100 font-pixel text-xl sm:text-2xl tracking-wider mb-4 uppercase transition-colors duration-300">
                            Escrowed Tranches
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed transition-colors duration-300">
                            Zero upfront payouts. All contributions are held securely in an on-chain vault and released in strict, predefined sequential tranches.
                        </p>
                    </div>

                    {/* Feature 2: Bicameral Voting */}
                    <div className="group bg-zinc-50 dark:bg-zinc-950 p-8 sm:p-10 flex flex-col hover:bg-white dark:hover:bg-zinc-900/50 transition-colors">
                        <div className="text-zinc-400 dark:text-zinc-600 font-mono text-xs mb-8">{"[ 02 ]"}</div>
                        <h3 className="text-zinc-900 dark:text-zinc-100 font-pixel text-xl sm:text-2xl tracking-wider mb-4 uppercase transition-colors duration-300">
                            Bicameral Voting
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed transition-colors duration-300">
                            Quadratic-weighted voting power meets a strict headcount chamber. Prevents both whale domination and mob veto attacks.
                        </p>
                    </div>

                    {/* Feature 3: Bounded Trust */}
                    <div className="group bg-zinc-50 dark:bg-zinc-950 p-8 sm:p-10 flex flex-col hover:bg-white dark:hover:bg-zinc-900/50 transition-colors">
                        <div className="text-zinc-400 dark:text-zinc-600 font-mono text-xs mb-8">{"[ 03 ]"}</div>
                        <h3 className="text-zinc-900 dark:text-zinc-100 font-pixel text-xl sm:text-2xl tracking-wider mb-4 uppercase transition-colors duration-300">
                            Bounded Trust
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed transition-colors duration-300">
                            Structural mitigation for cold-start developers. Caps total raise sizes and restricts first-milestone payouts to strictly bound worst-case funder loss.
                        </p>
                    </div>

                    {/* Feature 4: Proof of Work */}
                    <div className="group bg-zinc-50 dark:bg-zinc-950 p-8 sm:p-10 flex flex-col hover:bg-white dark:hover:bg-zinc-900/50 transition-colors">
                        <div className="text-zinc-400 dark:text-zinc-600 font-mono text-xs mb-8">{"[ 04 ]"}</div>
                        <h3 className="text-zinc-900 dark:text-zinc-100 font-pixel text-xl sm:text-2xl tracking-wider mb-4 uppercase transition-colors duration-300">
                            Verified Shipped Code
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed transition-colors duration-300">
                            Time progression means nothing. Capital is only unlocked when the community actively verifies programmatic milestone completion and proof-of-work.
                        </p>
                    </div>

                </div>
            </section>

        </main>
    );
}