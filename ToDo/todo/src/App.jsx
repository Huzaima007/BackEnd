import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [user, setUser] = useState();
  const [todo, setTodo] = useState({
    name: null,
    email: null,
  });
  const fetchApi = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_URL}/data`);
      console.log(data);
      setUser(data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleClick = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_URL}/send`, todo);
      fetchApi()
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <div className="flex flex-wrap gap-4">
        {user?.map((v, i) => (
          <div key={i} className="container shadow-2xl p-4 rounded-2xl">
            <p>Id: {v.id}</p>
            <p>Name: {v.name}</p>
            <p>Email: {v.email}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col justify-center w-[50%] p-4 gap-4 shadow-2xl rounded-2xl">
          <p className="text-center">Add Todo</p>
          <div>
            <label
              htmlFor="price"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Name
            </label>
            <div className="">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  N
                </div>
                <input
                  id="price"
                  name="name"
                  type="text"
                  placeholder="John"
                  onChange={(e) => setTodo({ ...todo, name: e.target.value })}
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email
            </label>
            <div className="">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  E
                </div>
                <input
                  id="price"
                  name="name"
                  type="email"
                  placeholder="John"
                  onChange={(e) => setTodo({ ...todo, email: e.target.value })}
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleClick}
            class="px-4 py-2 bg-blue-500 text-white font-medium w-full rounded-lg duration-300 ease-in-out ..."
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
