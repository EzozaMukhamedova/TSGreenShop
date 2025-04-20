// import React, { useState, useEffect } from "react";

// const PersonalInfoForm: React.FC = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     const userData = localStorage.getItem("loggedInUser");
//     if (userData) {
//       const user = JSON.parse(userData);
//       setFirstName(user.firstName || user.name || "");
//       setLastName(user.lastName || user.surname || "");
//       setEmail(user.email || "");
//       setPhone(user.phone || "");
//       setUsername(user.username || "");
//     }
//   }, []);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const updatedUserData = { firstName, lastName, email, phone, username };
//     localStorage.setItem("loggedInUser", JSON.stringify(updatedUserData));
//     alert("Ma'lumotlar yangilandi!");
//   };

//   return (
//     <div className="w-3/4 mx-auto border border-red-500">
//       <h2 className="text-left ml-[30px] font-bold text-[#3D3D3D] mb-[20px]">
//         Personal Information
//       </h2>
//       <form
//         className="p-8 pt-0 space-y-6 bg-white rounded-lg"
//         onSubmit={handleSubmit}
//       >
//         <div className="grid grid-cols-2 gap-6 mb-[30px]">
//           {[
//             {
//               id: "firstName",
//               label: "First name",
//               value: firstName,
//               setValue: setFirstName,
//             },
//             {
//               id: "lastName",
//               label: "Last name",
//               value: lastName,
//               setValue: setLastName,
//             },
//             {
//               id: "email",
//               label: "Email address",
//               value: email,
//               setValue: setEmail,
//               type: "email",
//             },
//             {
//               id: "phone",
//               label: "Phone Number",
//               value: phone,
//               setValue: setPhone,
//             },
//             {
//               id: "username",
//               label: "Username",
//               value: username,
//               setValue: setUsername,
//             },
//           ].map((field) => (
//             <div key={field.id}>
//               <label
//                 htmlFor={field.id}
//                 className="block font-semibold text-left text-[#3D3D3D]"
//               >
//                 * {field.label}
//               </label>
//               <input
//                 id={field.id}
//                 type={field.type || "text"}
//                 className="w-full p-2 border border-gray-300 rounded"
//                 placeholder={field.label}
//                 value={field.value}
//                 onChange={(e) => field.setValue(e.target.value)}
//               />
//             </div>
//           ))}
//         </div>
//         <button
//           type="submit"
//           className="w-full py-2 text-white bg-green-600 rounded"
//         >
//           Save changes
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PersonalInfoForm;
