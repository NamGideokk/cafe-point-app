import React, { useState } from "react";
import PhoneNumberForm from "../components/login/PhoneNumberForm";
import TouchText from "../components/login/TouchText";
import MainBackground from "../components/mainBackground/MainBackground";

const Home: React.FC = () => {
  const [showInput, setShowInput] = useState<boolean>(false);
  return (
    <>
      <MainBackground />
      {showInput ? <PhoneNumberForm /> : <TouchText />}
    </>
  );
};

export default Home;
