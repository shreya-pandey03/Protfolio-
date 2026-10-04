import { motion } from "framer-motion";



const CONTACT = {
   phoneNo: "+12 3333 777 888 ",
  email: "shreya@gmail.com",
};

function Contact() {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl">Get in Touch</motion.h2>
      <div className="text-center tracking-tighter text-stone-500">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}

          className="my-4">{CONTACT.address}</motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }} className="my-4">{CONTACT.phoneNo}</motion.p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="border-b border-dotted border-stone-400 hover:text-stone-300"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
}

export default Contact;



