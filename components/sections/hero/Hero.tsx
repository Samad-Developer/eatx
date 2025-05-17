"use client";
import Header from "../header/Header";
import { motion } from "motion/react";

const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100
        }
    }
};

const gradientPulse = {
    initial: { backgroundPosition: '0% 50%' },
    animate: {
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: 'linear'
        }
    }
};

// Animation variants
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};


export default function Hero() {
    return (
        <div className="bg-gray-5">
            <Header />

            <div className="relative isolate px-6 pt-14 lg:px-8">
                {/* Background gradient elements */}
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-orange-600 to-orange-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>

                {/* Main hero content */}
                <div className="mx-auto max-w-5xl pt-26 sm:pt-30">

                    {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm/6 text-black ring-1 ring-gray-100 hover:ring-gray-200  transition-all">
                            <span className="absolute inset-0 rounded-full bg-indigo-100/30 backdrop-blur-md animate-"></span>
                            <span className="relative">Trusted by 5,000+ restaurants worldwide</span>
                            <a href="#testimonials" className="font-semibold text-orange-600 ml-2">
                                See success stories <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div> */}

                    <div className="text-center">
                        <motion.div
                            className="text-center"
                            variants={container}
                            initial="hidden"
                            animate="show"
                        >
                            <motion.h1
                                className="text-4xl font-bold tracking-tight text-balance text-gray-900 sm:text-6xl lg:text-7xl"
                                variants={item}
                            >
                                <span className="block">
                                    Power Your Restaurant Experience with{' '}
                                    <motion.span
                                        className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent"
                                        variants={gradientPulse}
                                        initial="initial"
                                        animate="animate"
                                        style={{
                                            backgroundSize: '200% 200%'
                                        }}
                                    >
                                        EatX
                                    </motion.span>
                                </span>
                            </motion.h1>

                            <motion.p
                                className="mt-6 text-lg font-medium text-pretty text-gray-600 sm:text-xl lg:text-2xl/8"
                                variants={item}
                            >
                                The all-in-one POS and online ordering system that boosts your revenue by 30% while delighting your customers
                            </motion.p>

                            <motion.div
                                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
                                variants={item}
                            >
                                <motion.a
                                    href="#pricing"
                                    className="relative rounded-full bg-orange-600 px-6 py-3 text-base sm:text-lg font-semibold text-white hover:shadow-xl transition-all hover:bg-orange-700 "
                                    whileHover={{
                                        y: -2,
                                        scale: 1.02,
                                        boxShadow: '0 10px 25px -5px rgba(234, 88, 12, 0.4)'
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Schedule a Demo

                                </motion.a>


                            </motion.div>

                        </motion.div>
                    </div>

                </div>

                {/* Background blur */}
                {/* <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                    <div className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-amber-400 to-amber-400 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                    }} ></div>

                </div> */}
                 

            </div>
        </div>
    )
}