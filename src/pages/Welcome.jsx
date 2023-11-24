import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Heading } from "../components/Heading";
// import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { LinkButton } from "../components/LinkButton";
import { ThemeContext, themes } from "../contexts/themeContext";

const regexUZB = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;

const welcomeFormSchema = yup.object({
  username: yup.string().required("Обязательное поле"),
  userphone: yup
    .string()
    .matches(regexUZB, "Введите узбекский номер телефона!")
    .required("Обязательное поле"),
});

const Welcome = () => {
  const { control, handleSubmit, formState: errors } = useForm({
    resolver: yupResolver(welcomeFormSchema),
    defaultValues: {
      username: "",
      userphone: "",
    },
  });

  const onWelcomeSubmit = (data) => {
    console.table(data);
  };

  const navigate = useNavigate();

  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);

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
    <div className={`container ${theme === themes.dark && "_dark"}`}>
      <div className="wrapper">
        <div className="welcome">
          <button
            style={{ marginBottom: 16 }}
            type="button"
            onClick={toggleTheme}
          >
            преключи меня
          </button>
          <Heading text="Добро пожаловать" headingType="h1" />
          <form className="welcome__form" onSubmit={handleSubmit(onWelcomeSubmit)}>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <Input
                  hasError={nameError}
                  value={nameValue}
                  onChange={(value) => handleNameInput(value)}
                  id="username"
                  isRequired
                  inputLable="Ваше имя"
                  inputPlaceholder="Ваш ответ"
                  errorMessage="Введите ваше имя"
                  isError={errors.userphone}
                  {...field}
                />
              )}
            />
            <Controller
              render={({ field }) => (
                <Input
                  hasError={phoneError}
                  value={phoneValue}
                  onChange={(value) => handlePhoneInput(value)}
                  id="phone"
                  isRequired
                  inputLable="Ваш номер"
                  inputPlaceholder="Введите ваш номер телефона"
                  errorMessage="Введите ваш номер в парильном формате"
                  {...field}
                />
              )}
            />
            <LinkButton
              buttonText="Далее"
              buttonType="button"
              isDisabled={!nameValue || !phoneValue}
              onClick={clickHandler}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
