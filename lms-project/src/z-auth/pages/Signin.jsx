import React, { useState } from "react";
import { Check, CircleAlert, Lock } from "lucide-react";
import toast from "react-hot-toast";
import Marquee from "react-fast-marquee";
import { motion } from "motion/react";

const Signin = () => {
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

  return (
    <div className="flex justify-center items-center h-screen  ">
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
                <Lock className="text-xl text-center " />
              </h2>
              <h2 className="text-center font-medium text-xl mb-4">
                Formulaire de connexion
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
                Email
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
                Mot de passe
              </label>
              <input
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
                Se connecter
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Signin;
