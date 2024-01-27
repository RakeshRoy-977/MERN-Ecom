import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Section 1 */}
          <div>
            <h3 className="text-white text-lg font-bold">Section 1</h3>
            <p className="mt-4 text-gray-400">
              Content for section 1 goes here.
            </p>
          </div>
          {/* Section 2 */}
          <div>
            <h3 className="text-white text-lg font-bold">Section 2</h3>
            <p className="mt-4 text-gray-400">
              Content for section 2 goes here.
            </p>
          </div>
          {/* Section 3 */}
          <div>
            <h3 className="text-white text-lg font-bold">Section 3</h3>
            <p className="mt-4 text-gray-400">
              Content for section 3 goes here.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
