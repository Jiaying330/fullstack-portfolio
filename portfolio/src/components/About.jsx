import aboutImg from "../assets/profile.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react";

export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        About Me
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex-col justify-center  text-center lg:justify-start lg:text-start">
            {ABOUT_TEXT.map((text, i) => (
              <p key={i} className="my-2 max-w-xl py-2 mx-auto">
                {text}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
