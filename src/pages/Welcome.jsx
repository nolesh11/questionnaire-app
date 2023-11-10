import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heading } from "../components/Heading";
// import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { LinkButton } from "../components/LinkButton";

const Welcome = () => {
  const navigate = useNavigate();

  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const goToNextPage = () => {
    if (nameValue && phoneValue) {
      navigate("/step-one");
    }
  };

  const validateName = () => {
    if (!nameValue) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };
  const validatePhone = () => {
    if (!phoneValue) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  const handleNameInput = (value) => {
    setNameValue(value);
    validateName();
  };

  const handlePhoneInput = (value) => {
    setPhoneValue(value);
    validatePhone();
  };

  const clickHandler = () => {
    validateName();
    validatePhone();
    goToNextPage();
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Heading text="Добро пожаловать" headingType="h1" />
          <form className="welcome__form">
            <Input
              hasError={nameError}
              value={nameValue}
              onChange={(value) => handleNameInput(value)}
              id="username"
              isRequired
              inputLable="Ваше имя"
              inputPlaceholder="Ваш ответ"
              errorMessage="Введите ваше имя"
            />
            <Input
              hasError={phoneError}
              value={phoneValue}
              onChange={(value) => handlePhoneInput(value)}
              id="phone"
              isRequired
              inputLable="Ваш номер"
              inputPlaceholder="Введите ваш номер телефона"
              errorMessage="Введите ваш номер в парильном формате"
            />
            <LinkButton
              path="/step-one"
              buttonText="Далее"
              buttonType="button"
              isDisabled={!nameValue || !phoneValue}
              onClick={clickHandler}
            />
            {/* <Button onClick={clickHandler} buttonType="submit" buttonText="Далее" /> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
