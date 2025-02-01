import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowBigLeft } from "lucide-react";

// next notification react hot toadst
const User = () => {
  const { log } = console;
  const formRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { state: user } = location;
  log(user);
  const [loading, setLoading] = useState(false);

  const clearForm = () => {
    if (user.mode == "creation" && formRef.current) {
      formRef.current.reset();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    log(user.mode);

    let userData = {
      genre: e.target.genre.value,
      name: e.target.name.value,
      telephone: e.target.telephone.value,
      etat_civil: e.target.etat_civil.value,
      nb_enfant: e.target.nb_enfant.value,
      adresse: e.target.adresse.value,
      imgUrl:
        user.mode == "creation"
          ? "http://localhost:3000/usersPhoto/userDefault.png"
          : user.imgUrl,
    };

    setLoading(true);
    let url =
      user.mode == "creation"
        ? `http://localhost:3000/users`
        : `http://localhost:3000/users/${user.id}`;

    let method = user.mode == "creation" ? `POST` : `PUT`;
    let headers = { "Content-Type": "application/json" };

    fetch(url, {
      method,
      headers,
      body: JSON.stringify(userData),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        log(data);
        clearForm();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="px-6 mt-2 mb-3">
      <button className="hover:text-blue-500" onClick={() => navigate(-1)}>
        <ArrowBigLeft />
      </button>
      <h3
        className="text-center
       uppercase text-xl"
      >
        {user.mode == "creation"
          ? "Créer nouvel"
          : user.mode == "modification"
          ? "Modifier détails"
          : "Voir détails"}{" "}
        utilisateur
      </h3>

      <div id="user-info" className="flex mt-3 ">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="min-w-[25rem] space-y-3 p-2"
        >
          <div>
            <label htmlFor="genre" className="block font-semibold mb-1">
              Genre
            </label>
            <input
              disabled={user.mode == "visualisation"}
              name="genre"
              id="genre"
              defaultValue={user && user.genre}
              type="text"
              className="w-full bg-gray-100 border rounded p-1 text-gray-600 text-sm text-normal"
            />
          </div>
          <div>
            <label htmlFor="name" className="block font-semibold mb-1">
              Nom
            </label>
            <input
              disabled={user.mode == "visualisation"}
              name="name"
              id="name"
              defaultValue={user && user.name}
              type="text"
              className="w-full bg-gray-100 border text-gray-600 text-sm text-normal  rounded p-1"
            />
          </div>
          <div>
            <label htmlFor="telephone" className="block font-semibold mb-1">
              Telephone
            </label>
            <input
              disabled={user.mode == "visualisation"}
              name="telephone"
              id="telephone"
              defaultValue={user && user.telephone}
              type="text"
              className="w-full bg-gray-100  text-gray-600 text-sm text-normal border rounded p-1"
            />
          </div>

          <div>
            <label htmlFor="etat_civil" className="block font-semibold mb-1">
              Etat civil
            </label>
            <input
              disabled={user.mode == "visualisation"}
              name="etat_civil"
              id="etat_civil"
              defaultValue={user && user.etat_civil}
              type="text"
              className="w-full bg-gray-100 text-gray-600 text-sm text-normal border rounded p-1"
            />
          </div>
          <div>
            <label htmlFor="nb_enfant" className="block font-semibold mb-1">
              Nombre d'enfants
            </label>
            <input
              disabled={user.mode == "visualisation"}
              name="nb_enfant"
              id="nb_enfant"
              defaultValue={user && user.nb_enfant}
              type="text"
              className="w-full bg-gray-100 text-gray-600 text-sm text-normal  border rounded p-1"
            />
          </div>
          <div>
            <label htmlFor="adresse" className="block font-semibold mb-1">
              Adresse
            </label>
            <textarea
              disabled={user.mode == "visualisation"}
              name="adresse"
              id="adresse"
              defaultValue={user && user.adresse}
              rows={5}
              type="text"
              className="w-full bg-gray-100 border text-gray-600 text-sm text-normal rounded p-1"
            />
          </div>
          {user.mode != "visualisation" && (
            <div className="flex justify-end">
              <button
                type="submit"
                className={` ${
                  user.mode == "creation"
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-orange-500 hover:bg-orange-600"
                }  text-white p-1 px-2 rounded `}
              >
                {user.mode == "creation"
                  ? "Sauvegarder"
                  : user.mode == "modification"
                  ? "Modifier"
                  : ""}
              </button>
            </div>
          )}
        </form>
        <div className=" flex-1 flex justify-center">
          <img src={user.imgUrl} className="h-24 mt-6 rounded" alt="" />
        </div>
      </div>
    </div>
  );
};

export default User;
