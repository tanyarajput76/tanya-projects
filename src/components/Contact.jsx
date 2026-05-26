import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div name="contact" className="w-full min-h-screen bg-bg-primary text-text-primary py-20 px-4 sm:px-8 lg:px-20">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center h-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pb-8 text-center"
        >
          <p className="text-4xl font-bold inline border-b-4 border-accent-color text-gradient">
            Contact Me
          </p>
          <p className="py-6 text-text-secondary">Submit the form below or shoot me an email</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 mt-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/3 flex flex-col gap-6"
          >
            <div className="glass p-6 rounded-xl flex items-center gap-4 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-accent-color/10 flex items-center justify-center text-accent-color text-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-primary">Location</h4>
                <p className="text-text-secondary">Kanpur , Uttar pradesh</p>
              </div>
            </div>

            <div className="glass p-6 rounded-xl flex items-center gap-4 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-accent-color/10 flex items-center justify-center text-accent-color text-xl">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-primary">Email</h4>
                <p className="text-text-secondary">tr6340012@gmail.com</p>
              </div>
            </div>

            <div className="glass p-6 rounded-xl flex items-center gap-4 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-accent-color/10 flex items-center justify-center text-accent-color text-xl">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-primary">Call</h4>
                <p className="text-text-secondary">+91 9838116611</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-2/3"
          >
            <form

action="https://api.web3forms.com/submit"

method="POST"

className="flex flex-col gap-6 w-full glass p-8 rounded-2xl"

>

{/* Replace with your Web3Forms Access Key */}

<input

  type="hidden"

  name="access_key"

  value="30ec1ad1-4832-4e59-8c12-e5b124e98916"

/>

{/* Optional */}

<input

  type="hidden"

  name="subject"

  value="New Contact Form Submission"

/>

<input

  type="hidden"

  name="from_name"

  value="Portfolio Website"

/>

<div className="flex flex-col md:flex-row gap-6">

  <input

    type="text"

    name="name"

    placeholder="Your Name"

    className="w-full p-4 bg-bg-secondary border border-gray-300 dark:border-gray-700 rounded-lg text-text-primary focus:outline-none focus:border-accent-color focus:ring-2 focus:ring-accent-color/20 transition-all"

    required

  />

  <input

    type="email"

    name="email"

    placeholder="Your Email"

    className="w-full p-4 bg-bg-secondary border border-gray-300 dark:border-gray-700 rounded-lg text-text-primary focus:outline-none focus:border-accent-color focus:ring-2 focus:ring-accent-color/20 transition-all"

    required

  />

</div>

<input

  type="text"

  name="topic"

  placeholder="Subject"

  className="w-full p-4 bg-bg-secondary border border-gray-300 dark:border-gray-700 rounded-lg text-text-primary focus:outline-none focus:border-accent-color focus:ring-2 focus:ring-accent-color/20 transition-all"

  required

/>

<textarea

  name="message"

  rows="6"

  placeholder="Message"

  className="w-full p-4 bg-bg-secondary border border-gray-300 dark:border-gray-700 rounded-lg text-text-primary focus:outline-none focus:border-accent-color focus:ring-2 focus:ring-accent-color/20 transition-all resize-none"

  required

    ></textarea>

<button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 my-2 mx-auto md:mx-0 flex items-center justify-center rounded-lg font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-indigo-500/30 w-full md:w-auto">

  Send Message

</button>

</form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
