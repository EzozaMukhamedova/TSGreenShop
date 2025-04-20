// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import AccountSidebar from "../AccountSidebar/AccountSidebar";

// const Logout = () => {
//   const { data } = useSelector((state: any) => state.shopping);
//   const [activeItem, setActiveItem] = useState("AccountDetails");
//   const subtotal = data.reduce(
//     (acc: number, item: any) => acc + item.price * item.count,
//     0
//   );
//   const discount = 0.0;
//   const shipping = 16;
//   const total = subtotal - discount + shipping;

//   return (
//     <>
//       {/* <div className="mt-[100px] mx-auto"> */}
//       <div className="flex w-[1100px] mx-auto mt-[100px] my-[50px] border">
//         <AccountSidebar activeItem={activeItem} setActiveItem={setActiveItem} />
//         {/* <div className="w-[200px] border ">Devor </div> */}
//         <div className="w-full border  rounded-md p-4 space-y-4 mt-[100px] ml-[20px]">
//           <h3 className="text-lg font-semibold text-left">Logout</h3>

//         </div>
//       </div>
//     </>
//   );
// };

// export default Logout;

import React, { useState } from "react";
import LogoutModal from "./LogoutModal";
import AccountSidebar from "../AccountSidebar/AccountSidebar";

const Logout = () => {
  const [activeItem, setActiveItem] = useState("Logout");
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="flex w-full mt-[100px] px-[20px]">
      <AccountSidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="w-full p-6">
        <LogoutModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </div>
    </div>
  );
};

export default Logout;
