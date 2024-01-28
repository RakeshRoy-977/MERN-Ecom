import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const Shop = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3003/api/product/getall");
      res.data ? setData(res.data) : [];
      console.log(data);
    };
    getData();
  }, []);
  return (
    <div>
      {data &&
        data.map((e) => (
          <div key={e._id}>
            <h1>{e.name}</h1>
            <h1>{e.description}</h1>
            <h1>{e.price}</h1>
            <img
              src={`http://localhost:3003/ProductsImgs/${e.image}`}
              alt={e.name}
            />
          </div>
        ))}
    </div>
  );
};

export default Shop;
