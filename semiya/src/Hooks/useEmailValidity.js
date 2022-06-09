import { useState } from "react";

const useEmailValidity = () => {
  const [value, setValue] = useState("");
  const [validity, setValidity] = useState(true);
  const validEmail = new RegExp(
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  const onChange = (e) => {
    setValue(e.target.value);
    validEmail.test(e.target.value) ? setValidity(true) : setValidity(false);
  };
  return { value, validity, onChange };
};

export default useEmailValidity;
