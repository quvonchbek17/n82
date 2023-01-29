import { useEffect, useState } from "react";
import Card from "../../UI/Card";
import "./index.scss";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/phones")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);

  return (
    <>
      <div className=" d-flex align-items-center flex-wrap justify-content-center gap-3">
        {phones.map((el) => {
          return <Card key={el.id} data={el} />;
        })}
      </div>
    </>
  );
};

export default Phones;
