import React from "react";
import { Link } from "react-router-dom";

const Admin_Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-[15vw] h-full p-4">
      <div className="mb-4">
        <div className="mb-2">
          <Link
            to="/add-products"
            className="block py-2 px-4 hover:bg-gray-700"
          >
            Add Products
          </Link>
        </div>
        <div className="mb-2">
          <Link
            to="/view-products"
            className="block py-2 px-4 hover:bg-gray-700"
          >
            View Products
          </Link>
        </div>
        <div className="mb-2">
          <Link
            to="/edit-products"
            className="block py-2 px-4 hover:bg-gray-700"
          >
            Edit Products
          </Link>
        </div>
        <div className="mb-2">
          <Link
            to="/delete-products"
            className="block py-2 px-4 hover:bg-gray-700"
          >
            Delete Products
          </Link>
        </div>
        <div className="mb-2">
          <Link
            to="/total-orders"
            className="block py-2 px-4 hover:bg-gray-700"
          >
            Total Orders
          </Link>
        </div>
        <div>
          <Link
            to="/total-earnings"
            className="block py-2 px-4 hover:bg-gray-700"
          >
            Total Earnings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admin_Sidebar;
