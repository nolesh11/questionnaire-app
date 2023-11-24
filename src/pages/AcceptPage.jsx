import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Heading } from "../components/Heading";
import { AcceptInput } from "../components/UI/Input";
import { AcceptCheckbox } from "../components/UI/AcceptCheckbox";
import { Button } from "../components/Button";

const regexUZB = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;

const acceptFormSchema = yup.object({
  username: yup
    .string()
    .required("Обязательное поле"),
  userphone: yup
    .string()
    .matches(regexUZB, "Введите узбекский номер телефона!")
    .required("Обязательное поле"),
  publicOffer: yup
    .boolean()
    .required("Обязательное поле"),
  agreePublicOffer: yup
    .boolean()
    .required("Обязательное поле"),
});

export const AcceptPage = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(acceptFormSchema),
    defaultValues: {
      username: "",
      userphone: "",
      publicOffer: false,
      agreePublicOffer: false,
    },
  });

  const onAcceptSumbit = (data) => {
    console.table("data ", data);
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="AcceptPage">
          <Heading
            text="АКЦЕПТ на предложение о заключении договора"
            headingType="h1"
          />
          <form onSubmit={handleSubmit(onAcceptSumbit)}>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <AcceptInput
                  inputLable="Ф.И:"
                  inputType="text"
                  inputPlaceholder="Ваш ответ"
                  errorMessage={errors.username?.message}
                  hasError={errors.username}
                  {...field}
                />
              )}
            />
            <Controller
              name="userphone"
              control={control}
              render={({ field }) => (
                <AcceptInput
                  inputLable="Номер телефона"
                  inputType="tel"
                  inputPlaceholder="+998 9- --- -- --"
                  hasError={errors.userphone}
                  {...field}
                />
              )}
            />
            <Controller
              name="publicOffer"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <AcceptCheckbox checkboxText="Ознакомился с публичной офертой" {...field} />
              )}
            />
            <Controller
              name="agreePublicOffer"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <AcceptCheckbox checkboxText="Согласен с условиями публичной оферты" {...field} />
              )}
            />
            <Button isDisabled={!!Object.keys(errors).length} buttonType="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AcceptPage;
