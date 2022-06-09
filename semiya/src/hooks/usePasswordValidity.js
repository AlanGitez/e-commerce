import { useState } from "react";

const usePasswordValidity = () => {
  const [value, setValue] = useState("");
  const [validity, setValidity] = useState(true);
  const validPassword = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

  const onChange = (e) => {
    setValue(e.target.value);
    validPassword.test(e.target.value) ? setValidity(true) : setValidity(false);
  };
  return { value, validity, onChange };
};

export default usePasswordValidity;
