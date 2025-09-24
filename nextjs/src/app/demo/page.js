"use client";
import React, { use } from "react";
import { useLang } from "../context/LanguageContext";

export default function Home() {
  const { language } = useLang();
  return (
    <>{language == "english" ? <p>In progress</p> : <p>En progreso</p>}</>
    // <div className="min-h-screen flex flex-col items-center px-4 py-12 sm:px-6 md:px-12 bg-black text-white">
    //   <motion.div
    //     initial={{ opacity: 0, y: 30 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.5 }}
    //     className="w-full max-w-3xl flex flex-col sm:flex-col md:flex-col lg:flex-col"
    //   >
    //     {language === "english" ? (
    //       <>
    //         <ul className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-8 w-full text-md">
    //           <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
    //             <li>home</li>
    //             <Link href="/demo">see demo</Link>
    //           </div>
    //           <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
    //             <Link href="/files/Developer.pdf" download>
    //               resume
    //             </Link>
    //             <button onClick={toggleLanguage} className="p-0 font-thin">
    //               español
    //             </button>
    //           </div>
    //         </ul>

    //         <h4 className="text-2xl sm:text-3xl font-bold mb-6 tracking-tight leading-snug">
    //           Ecommerce (Next + Nest)
    //         </h4>

    //         <div className="text-left space-y-6">
    //           <p className="text-base sm:text-lg">
    //             I have nearly three years of full-stack studies, covering
    //             relational databases, object-oriented programming, APIs, markup,
    //             and testing. I’ve built full-stack projects using Java + React
    //             as well as Nest + Next. I have experience in responsive markup
    //             development, maintenance, localization, and real-time
    //             data-driven interfaces.
    //           </p>

    //           <ul className="flex flex-col gap-4 sm:gap-6 text-base sm:text-lg">
    //             <li>
    //               <span className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
    //                 2025
    //               </span>{" "}
    //               Freelance: Website production and localization
    //             </li>
    //             <li>
    //               <span className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
    //                 2024
    //               </span>{" "}
    //               Contractor: Integration Project for U.S. Financial Agents
    //             </li>
    //             <Link href={"/demo"}>
    //               <span className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
    //                 DEMO
    //               </span>{" "}
    //               Watch: Full Stack ecommerce (Next + Nest)
    //             </Link>
    //           </ul>
    //         </div>
    //       </>
    //     ) : (
    //       <>
    //         <ul className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-8 w-full text-md">
    //           <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
    //             <li>inicio</li>
    //           </div>
    //           <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
    //             <Link href="/demo/register" download className="p-0 font-thin">
    //               register
    //             </Link>
    //             <Link href="/demo/login" download className="p-0 font-thin">
    //               login
    //             </Link>
    //           </div>
    //         </ul>
    //         <div className="flex justify-evenly">
    //           <h4 className="text-2xl sm:text-3xl font-bold mb-6 tracking-tight leading-snug">
    //             Ecommerce Demo
    //           </h4>
    //           <SearchBar />
    //         </div>

    //         <div className="flex justify-evenly space-y-6">
    //           <ItemList />
    //           <Cart />
    //         </div>
    //       </>
    //     )}
    //   </motion.div>
    // </div>
  );
}
