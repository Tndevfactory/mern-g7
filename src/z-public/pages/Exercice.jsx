import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const data = [
  { id: 1, url: "https:picsum.photos/200/200" },
  { id: 2, url: "https:picsum.photos/200/201" },
  { id: 3, url: "https:picsum.photos/201/200" },
  { id: 4, url: "https:picsum.photos/200/202" },
];

const Exercice = () => {
  const [result, setResult] = useState(
    () => localStorage.getItem("result") || 0
  );
  const [num, setNum] = useState(() => localStorage.getItem("num") || 0);

  const handleConversion = (e) => {
    e.preventDefault();

    if (num) {
      const f = parseFloat(num) * 1.8 + 32;
      setResult(f);
    } else {
      toast.error("merci d'entrer un nombre");
    }
  };

  useEffect(() => {
    if (result) {
      localStorage.setItem("num", num);
      localStorage.setItem("result", result);
    }
  }, [result]);

  const Card = (props) => {
    console.log(props);
    const { id, url } = props;

    return (
      <div className="p-2">
        <img src={url} alt="image" className="p-2" />
        <span className="pl-2">{id}</span>
      </div>
    );
  };

  return (
    <div>
      <div className=" flex justify-center items-center">
        <form
          onSubmit={handleConversion}
          className="border-2 w-80 p-2 space-y-3 my-5"
        >
          <div>
            <h1 className="text-xl text-center uppercase font-medium">
              Convertisseur{" "}
            </h1>
          </div>
          <div>
            <label className="block mb-2">Temperature</label>
            <input
              onChange={(e) => setNum(e.target.value)}
              value={num}
              type="text"
              className="p-1 px-2 border border-blue-600 rounded bg-gray-100 w-full "
            />
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-600 text-white px-2 p-1 rounded">
              Convertir
            </button>
          </div>
        </form>
      </div>

      {/* <div className=" text-3xl m-4">{result}</div> */}

      <div>
        <h1 className="text-3xl m-4">Photos</h1>
        <div className="flex flex-wrap justify-center">
          {data.map((v, i) => (
            <Card key={i} {...v} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exercice;
