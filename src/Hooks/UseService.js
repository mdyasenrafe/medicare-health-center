import { useEffect, useState } from "react";

const UseService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    // fetch("https://mocki.io/v1/cb637ac1-5225-4da6-ba3f-568ef173b801")
    fetch("/ServicesData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return { services, setServices };
};

export default UseService;
