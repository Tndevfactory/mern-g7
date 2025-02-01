import React, { useState } from "react";
import { Check, CircleAlert, ReceiptText } from "lucide-react";
import toast from "react-hot-toast";
import Marquee from "react-fast-marquee";
import { motion } from "motion/react";
import { IKImage, IKUpload } from "imagekitio-react";

const mData = [
  {
    id: 1,
    url: "http://google.com",
    urlImg:
      "https://ik.imagekit.io/tndev/marquee/marquescroll/2.jpg?updatedAt=1736549988433",
    service: "formation",
  },
  {
    id: 2,
    url: "http://facebook.com",
    urlImg:
      "https://ik.imagekit.io/tndev/marquee/marquescroll/6.jpg?updatedAt=1736549988475",
    service: "Cours particuliers",
  },
  {
    id: 3,
    url: "http://instagram.com",
    urlImg:
      "https://ik.imagekit.io/tndev/marquee/marquescroll/2.jpg?updatedAt=1736549988433",
    service: "pratiques",
  },
  {
    id: 4,
    url: "http://linkedin.com",
    urlImg:
      "https://ik.imagekit.io/tndev/marquee/marquescroll/3.jpg?updatedAt=1736549988267",
    service: "visio-conf",
  },
  {
    id: 5,
    url: "http://google.com",
    urlImg:
      "https://ik.imagekit.io/tndev/marquee/marquescroll/9.jpg?updatedAt=1736549988453",
    service: "certification",
  },
  {
    id: 6,
    url: "http://google.com",
    urlImg:
      "https://ik.imagekit.io/tndev/marquee/marquescroll/6.jpg?updatedAt=1736549988475",
    service: "stages",
  },
  {
    id: 7,
    url: "http://google.com",
    urlImg:
      "https://ik.imagekit.io/tndev/marquee/marquescroll/5.jpg?updatedAt=1736549988421",
    service: "alternances",
  },
  {
    id: 8,
    url: "http://google.com",
    urlImg:
      "https://ik.imagekit.io/tndev/marquee/marquescroll/8.jpg?updatedAt=1736549988471",
    service: "cooperation",
  },
  {
    id: 9,
    url: "http://google.com",
    urlImg:
      "https://ik.imagekit.io/tndev/marquee/marquescroll/1.jpg?updatedAt=1736549988629",
    service: "recherches scientifiques",
  },
];

const Contact = () => {
  const { log } = console;
  const { stringify: s, parse: p } = JSON;
  const [sujet, setSujet] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState({});

  const validate = (data) => {
    const errors = {};
    const valid = {};

    if (!data.sujet) {
      errors.sujet = "Champ sujet est requis";
    } else {
      valid.sujet = "valid";
    }
    if (!data.description) {
      errors.description = "Champ description est requis";
    } else {
      valid.description = "valid";
    }
    return { valid, errors };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { sujet, description };
    const { valid, errors } = validate(data);
    setErrors(errors);
    setValid(valid);
    log(s(valid));

    if (Object.keys(errors).length > 0) {
      toast.error(errors.sujet ?? "" + " " + errors.description) ?? "";
    }
  };

  const AnimationComponent = ({ data }) => {
    return (
      <a href={data.url} target="_blank" className="mx-5 hover:shadow-xl block">
        <div className=" border-2  border-gray-400 p-1 rounded-lg">
          <img src={data.urlImg} alt="" className="rounded-lg" />
          <div className=" capitalize text-lg text-center font-bold text-gray-600">
            {data.service}
          </div>
        </div>
      </a>
    );
  };

  const handleUploadSuccess = (res) => {
    console.log("Upload successful:", res);
  };

  const handleUploadError = (err) => {
    console.error("Upload failed:", err);
  };

  return (
    <div className="  ">
      <div className=" flex justify-center items-center my-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 0.3 } }}
          className="   w-96 rounded-lg  border shadow flex justify-center items-center my-5"
        >
          <form
            onSubmit={handleSubmit}
            className="  rounded w-80 p-4 space-y-2"
          >
            <div>
              <h2 className="flex justify-center  ">
                <ReceiptText className="text-xl text-center " />
              </h2>
              <h2 className="text-center font-medium text-xl mb-4">
                Formulaire de contact
              </h2>
            </div>
            <div className="relative">
              <span className="absolute right-2 top-9 ">
                {valid.sujet && <Check size={18} className="text-green-600" />}
                {errors.sujet && (
                  <CircleAlert size={18} className="text-red-500" />
                )}
              </span>
              <label htmlFor="" className="block">
                Sujet
              </label>
              <input
                onChange={(e) => {
                  setSujet(e.target.value);
                  setErrors({});
                  setValid({});
                }}
                value={sujet}
                type="text"
                className={`p-2 w-full border ${
                  errors.sujet && "border-red-500"
                }  ${valid.sujet && "border-green-500"}  bg-gray-100 rounded`}
              />
              {/* {errors.sujet && (
            <span className="text-red-500 text-xs">{errors.sujet}</span>
          )} */}
            </div>
            <div className="relative">
              <span className="absolute right-2 top-9">
                {valid.description && (
                  <Check size={18} className="text-green-600" />
                )}
                {errors.description && (
                  <CircleAlert size={18} className="text-red-500" />
                )}
              </span>
              <label htmlFor="" className="block">
                Description
              </label>
              <textarea
                onChange={(e) => {
                  setDescription(e.target.value);
                  setErrors({});
                  setValid({});
                }}
                value={description}
                type="text"
                rows={4}
                className={`p-2 w-full border ${
                  errors.description && "border-red-500"
                }    ${
                  valid.description && "border-green-500"
                }  bg-gray-100 rounded`}
              />
              {/* {errors.description && (
            <span className="text-red-500 text-xs">{errors.description}</span>
          )} */}
            </div>
            <div className="flex justify-end">
              <button
                disabled={Object.keys(errors).length > 0}
                className="disabled:bg-slate-300 
            disabled:cursor-not-allowed 
            bg-blue-600 hover:bg-blue-800 text-white px-2 rounded p-1"
              >
                Envoyer
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      <hr className="px-2 border-orange-500 max-w-xl mx-auto" />

      <div className="  my-6">
        <h1 className="text-center font-medium my-2 text-lg">Nos services</h1>
        <div id="marquee" className="w-full   bg-gray-100 p-3 ">
          <Marquee
            pauseOnHover
            pauseOnClick
            speed={20}
            gradient
            gradientColor="lightgray"
            gradientWidth={50}
          >
            {mData.map((v, i) => {
              return <AnimationComponent key={i} data={v} />;
            })}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Contact;
