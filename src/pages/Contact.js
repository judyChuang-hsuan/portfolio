import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { send } from "emailjs-com";
import { init } from "@emailjs/browser";
import { ArrowCircleUpIcon } from "@heroicons/react/outline";

const Contact = () => {
  //init user ID
  init("borwYEiCwC_07idXa");
  //take content from the contact form
  const [toSend, setToSend] = useState({
    from_name: "",
    subject: "",
    message: "",
    reply_to: "",
  });
  const changeHandler = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  //send email function
  const submitHandler = (e) => {
    e.preventDefault();
    send("service_jp476kn", "template_8f9mfo4", toSend, "borwYEiCwC_07idXa")
      .then((res) => {
        alert("I will reply to you ASAP!");
        setToSend({
          from_name: "",
          subject: "",
          message: "",
          reply_to: "",
        });
      })
      .catch((err) => {
        alert("Sorry, there is a mistake.");
      });
  };

  //scroll to top
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  //scroll animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="min-h-screen bg-dark-blue" id="contact">
      <div className="w-11/12 py-8 m-auto">
        <h1 className="text-5xl text-white font-light mb-4">Contact</h1>
        <div className="bg-light-blue ml-8 w-56 h-2 mb-8"></div>
        <div className="lg:flex lg:gap-10">
          <div data-aos="fade-right" className="w-10/12 m-auto lg:w-1/3">
            <h3 className="text-cyan tracking-wider text-2xl lg:text-lg 2xl:text-2xl">
              I'm always interested about cool stuff. Are you minding a project?
              Do you have any request or question about me? Don't hesitate to
              send an email to me.
              <br />
              <span className="text-xl">
                (Or you just wanna say hello to me.)
              </span>
            </h3>
          </div>
          <div
            data-aos="fade-left"
            className="message h-screen lg:w-2/3 lg:h-screen"
          >
            <form
              onSubmit={submitHandler}
              className="rounded-xl w-11/12 h-2/3 m-auto py-4 flex flex-col gap-4 mt-8 lg:h-70 lg:gap-8"
            >
              <div className="flex flex-col gap-4 lg:flex-row ">
                <input
                  className="rounded-lg py-4 px-4 text-lg bg-light-blue lg:text-2xl lg:w-1/2"
                  type="text"
                  name="from_name"
                  value={toSend.from_name}
                  onChange={changeHandler}
                  placeholder="Name"
                />
                <input
                  className="rounded-lg py-4 px-4 text-lg bg-light-blue lg:text-2xl lg:w-1/2"
                  type="email"
                  placeholder="Email"
                  name="reply_to"
                  value={toSend.reply_to}
                  onChange={changeHandler}
                />
              </div>
              <input
                className="rounded-lg py-4 px-4 text-lg bg-light-blue lg:text-2xl"
                type="text"
                placeholder="Subject"
                name="subject"
                value={toSend.subject}
                onChange={changeHandler}
              />
              <textarea
                className="rounded-lg py-4 px-4 text-lg bg-light-blue lg:text-2xl"
                type="text"
                placeholder="Message"
                name="message"
                value={toSend.message}
                onChange={changeHandler}
              ></textarea>
              <button
                type="submit"
                className="close font-bold border-2 w-1/3 m-auto text-white py-3 px-8 text-xl mt-8 md:text-2xl lg:w-1/4 lg:text-xl 2xl:w-1/6"
              >
                Say Hi!
              </button>
            </form>
          </div>
        </div>
        <button
          onClick={() => scrollToTop()}
          className="w-full flex justify-center"
        >
          <ArrowCircleUpIcon className=" m-auto text-cyan h-9 w-9 animate-bounce" />
        </button>
      </div>
    </div>
  );
};

export default Contact;
