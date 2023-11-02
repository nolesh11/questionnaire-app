import React from "react";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

const Welcome = () => {
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
              id="username"
              isRequired
              inputLable="Ваше имя"
              inputPlaceholder="Ваш ответ"
              errorMessage="Введите ваше имя"
            />
            <Input
              id="phone"
              isRequired
              inputLable="Ваш номер"
              inputPlaceholder="Введите ваш номер телефона"
              errorMessage="Введите ваш номер в парильном формате"
            />
            <Button buttonType="submit" buttonText="Далее" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
