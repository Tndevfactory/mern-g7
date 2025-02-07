import React, { useState, useEffect } from "react";
import { Plus, Search, Eye, Edit, Trash, RefreshCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ManageUsers = () => {
  const { log } = console;
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);

  const handleGetUsers = () => {
    setLoading(true);
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setUsers(data);
          setSelectedUsers(data);
          log(data);
          setLoading(false);
        }, 1000);
      })
      .catch((err) => console.error(err));
  };

  const handleDeleteUser = () => {
    setLoading(true);
    fetch(`http://localhost:3000/users/${user.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          // setUsers(users.filter((u) => u.id !== user.id));
          handleGetUsers();
          setVisibleDelete(false);
        } else {
          setLoading(false);
          console.error(res.statusText);
          throw new Error(res.statusText);
        }
      })
      .catch((err) => console.log(err));
  };

  const DeletePanel = () => {
    return (
      <div
        id="delete-modal"
        className="bg-black/30 fixed inset-0 flex justify-center items-center "
      >
        <div className=" mb-[32rem] shadow inline-block border-2 p-2 rounded bg-white ">
          <h2 className=" text-xl">Suppression utilisateur</h2>
          <p>Confimez-vous la suppression de cet utilisateur ? </p>
          <div className="flex justify-end gap-2 my-2">
            <button
              onClick={() => {
                setVisibleDelete(false);
                setUser({});
              }}
              className="bg-gray-100 px-2 rounded"
            >
              Annuler
            </button>
            <button
              onClick={() => {
                handleDeleteUser();
              }}
              className="bg-red-500 text-white px-2 rounded"
            >
              Confirmer
            </button>
          </div>
        </div>
      </div>
    );
  };

  const LoadingComponent = () => {
    return (
      <div className=" flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  };

  const handleSearch = (e) => {
    e.preventDefault();
    let search = e.target.searchItem.value;
    const filteredUsers = users.filter((u) =>
      u.name.toLowerCase().includes(search.toLowerCase())
    );
    setSelectedUsers(filteredUsers);
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <div className="px-6 mt-2 mb-3">
      <h3
        className="text-center
       uppercase text-xl"
      >
        gestion des utilisateurs
      </h3>

      <div id="search" className="my-3 flex justify-between items-center ">
        <form onSubmit={handleSearch}>
          <div>
            <input
              name="searchItem"
              type="search"
              className="bg-gray-100 border rounded mr-1 px-1"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600  text-white px-2 rounded "
            >
              <Search size={16} className="inline mb-0.5" />
            </button>
          </div>
        </form>

        <div className="flex justify-center gap-1 items-center">
          <button
            onClick={handleGetUsers}
            className="text-blue-500  bg-white hover:bg-gray-100 p-0.5 px-2 rounded flex items-center"
          >
            <RefreshCcw size={16} className="inline-block " />
          </button>
          <button
            onClick={() =>
              navigate("/user", {
                state: { mode: "creation" },
              })
            }
            className="bg-blue-500 hover:bg-blue-600 text-white px-2 rounded flex items-center"
          >
            <Plus size={16} className="inline " />
            Creer
          </button>
        </div>
      </div>

      <div id="list-users">
        <table className="w-full">
          <thead className="bg-gray-100 h-8">
            <tr>
              <th>ID</th>
              <th>Photo</th>
              <th>Nom</th>
              <th>Adresse</th>
              <th>Telephone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="h-8 bg-white">
            {loading ? (
              <tr>
                <td colSpan="6">
                  <LoadingComponent />
                </td>
              </tr>
            ) : (
              selectedUsers.map((v, i) => (
                <tr key={i}>
                  <td className="text-center">{v.id}</td>
                  <td className="text-center p-1">
                    <img
                      src={v.imgUrl}
                      className="h-8 w-8 rounded-full "
                      alt=""
                    />
                  </td>
                  <td className="text-left pl-4">{v.name}</td>
                  <td className="text-left pl-5">{v.adresse}</td>
                  <td className="text-center">{v.telephone}</td>
                  <td className="text-center">
                    <div className="space-x-2">
                      <button
                        onClick={() =>
                          navigate("/user", {
                            state: { ...v, mode: "visualisation" },
                          })
                        }
                      >
                        <Eye size="18" className="text-blue-600" />
                      </button>
                      <button
                        onClick={() =>
                          navigate("/user", {
                            state: { ...v, mode: "modification" },
                          })
                        }
                      >
                        <Edit size="18" className="text-orange-600" />
                      </button>
                      <button
                        onClick={() => {
                          setVisibleDelete(true);
                          setUser(v);
                        }}
                      >
                        <Trash size="18" className="text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {visibleDelete && <DeletePanel />}
    </div>
  );
};

export default ManageUsers;
