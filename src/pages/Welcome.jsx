import React, { useState } from "react";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

const Welcome = () => {
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const clickHandler = () => {
    if (!nameValue) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!phoneValue) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Heading
            text="Добро пожаловать"
            headingType="h1"
          />
          <form className="welcome__form">
            <Input
              hasError={nameError}
              value={nameValue}
              onChange={setNameValue}
              id="username"
              isRequired
              inputLable="Ваше имя"
              inputPlaceholder="Ваш ответ"
              errorMessage="Введите ваше имя"
            />
            <Input
              hasError={phoneError}
              value={phoneValue}
              onChange={setPhoneValue}
              id="phone"
              isRequired
              inputLable="Ваш номер"
              inputPlaceholder="Введите ваш номер телефона"
              errorMessage="Введите ваш номер в парильном формате"
            />
            <Button onClick={clickHandler} buttonType="submit" buttonText="Далее" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
