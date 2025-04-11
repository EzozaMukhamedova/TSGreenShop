import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import search from "../../assets/images/search.png";
import bell from "../../assets/images/bell.png";
import savat from "../../assets/images/savat.png";
import green from "../../assets/images/green.svg";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithGoogle } from "../../../firebase";
import { Button } from "antd";
import axios from "axios";

function Navbar2() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState(null);

  const api = import.meta.env.VITE_API;
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const signInWidthGoogleFc = async () => {
    try {
      const result = await signInWithGoogle();
      const googleUser = {
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      };

      // Backendga yuborish
      await axios.post(
        `${api}/user/sign-in/google?access_token=64bebc1e2c6d3f056a8c85b7`,
        { email: googleUser.email }
      );

      // malumot saqlash
      localStorage.setItem("loggedInUser", JSON.stringify(googleUser));
      setUser(googleUser);
      setIsModalOpen(false);
      toast.success("Google orqali muvaffaqiyatli kirdingiz!");
    } catch (error) {
      console.error("Google login xatolik:", error);
      toast.error("Google orqali login bo‘lmadi!");
    }
  };

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Parollar mos emas!");
      return;
    }
    const existingUser = JSON.parse(localStorage.getItem(email));
    if (existingUser) {
      alert("Bu user allaqachon mavjud!");
      return;
    }
    const newUser = { name, surname, email, password };
    localStorage.setItem(email, JSON.stringify(newUser));
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    setUser(newUser);
    setIsModalOpen(false);
    alert("Ro‘yxatdan o‘tish muvaffaqiyatli!");
  };

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem(email));
    if (savedUser && savedUser.password === password) {
      localStorage.setItem("loggedInUser", JSON.stringify(savedUser));
      setUser(savedUser);
      setIsModalOpen(false);
      alert("Login muvaffaqiyatli yakunlandi!");
    } else {
      alert("Email yoki parol noto‘g‘ri!");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  return (
    <div>
      <ToastContainer />
      <nav className="flex items-center justify-between w-[1240px] p-6 mx-auto bg-white border-b border-green-500 fixed top-0 left-1/2 transform -translate-x-1/2 z-20">
        <img src={green} alt="Logo" />
        <div className="flex gap-[20px] text-[16px] font-600 ">
          <h2
            onClick={() => navigate("/")}
            className="transition cursor-pointer hover:text-green-500 hover:border-b hover:border-green-500"
          >
            Home
          </h2>
          <h2
            onClick={() => navigate("/blog")}
            className="transition cursor-pointer hover:text-green-500 hover:border-b hover:border-green-500"
          >
            Blog
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <img src={search} alt="Search" />
          <img src={bell} alt="Notifications" />
          <img src={savat} alt="Cart" />
          {user ? (
            <div className="flex items-center space-x-3">
              <div
                onClick={() => navigate("/profile")}
                className="px-4 py-2 text-white bg-green-600 rounded-lg cursor-pointer"
              >
                {user.name}
              </div>
              <button
                onClick={handleLogout}
                className="px-3 py-2 text-white bg-red-500 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 text-white bg-green-600 rounded-lg"
            >
              Login
            </button>
          )}
        </div>
      </nav>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-[400px] p-6 bg-white rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute text-gray-500 top-3 right-3 hover:text-gray-700"
            >
              X
            </button>
            <div className="flex justify-center mb-4 space-x-4">
              <button
                className={`px-3 py-2 text-lg font-semibold rounded ${
                  !isRegister ? "bg-green-600 text-white" : "text-gray-500"
                }`}
                onClick={() => setIsRegister(false)}
              >
                Login
              </button>
              <button
                className={`px-3 py-2 text-lg font-semibold rounded ${
                  isRegister ? "bg-green-600 text-white" : "text-gray-500"
                }`}
                onClick={() => setIsRegister(true)}
              >
                Register
              </button>
            </div>
            <form
              onSubmit={isRegister ? handleRegister : handleLogin}
              className="space-y-4"
            >
              {isRegister && (
                <>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="w-full p-2 border rounded-md"
                    required
                  />
                  <input
                    type="text"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    placeholder="Surname"
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </>
              )}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-2 border rounded-md"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-2 border rounded-md"
                required
              />
              {isRegister && (
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  className="w-full p-2 border rounded-md"
                  required
                />
              )}

              <button
                type="submit"
                className="w-full py-2 mt-4 text-white bg-green-600 rounded-md"
              >
                {isRegister ? "Register" : "Login"}
              </button>

              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-2 text-[14px] text-gray-600">
                  Or login with
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <div className="flex flex-col gap-[15px]">
                <Button onClick={signInWidthGoogleFc}>
                  Sign in with Google
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar2;
