import { CONTACT } from "../constants";
import { motion } from "motion/react";
export default function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.3 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a
          href="#"
          className="border-b block w-fit mx-auto my-4 hover:text-blue-400 hover:border-b-blue-400 transition"
        >
          {CONTACT.email}
        </a>
        <a
          href={CONTACT.resume}
          className="border-b hover:text-blue-400 hover:border-b-blue-400 transition"
          target="blank_"
        >
          RESUME
        </a>
      </div>
    </div>
  );
}
