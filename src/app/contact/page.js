import React from "react";
import Image from "next/image";
import contact from '../../../public/contact.png';
export const metadata = {
  title: "Lama Dev Contact Information",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <div className="">
     
      <h1 className="text-6xl text-center font-bold my-8">Lets Keep in Touch</h1>
      <div className=" flex justify-center items-center gap-12">
        <div className="">
          <Image
            src={contact}
            alt=""
            width={700} height={700}
            className=""
          />
     
      </div>
        <div>
        <form className="">
          <input type="text" placeholder="name"  className="border px-8 py-3 rounded-full border-green-500" />
          <input type="text" placeholder="email" className="border px-8 py-3 rounded-full ml-6 border-green-500" />

          <br />
          <textarea
            className="border p-4 rounded-lg my-6 border-green-500"
            placeholder="message"
            cols="60"
            rows="5"
          ></textarea>
          <button>Send</button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;