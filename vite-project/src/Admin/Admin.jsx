import React from "react";
import Admin_Sidebar from "./Admin_Sidebar";
import AddProduct from "./AddProduct";

const Admin = () => {
  return (
    <div className="flex">
      <Admin_Sidebar />
      <div>
        <AddProduct />
      </div>
    </div>
  );
};

export default Admin;
