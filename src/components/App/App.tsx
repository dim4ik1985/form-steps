import "./App.css";
import React, { useState } from "react";
import { InputElement } from "../InputElement";
import { FormButton } from "../FormButton";
import { isValidDate } from "../../validator.ts";
import { Convertor } from "../../convertor.ts";
import { Listing } from "../Listing";
import { IForm } from "../../models.ts";

export const App = () => {
  const [stepsList, setStepsList] = useState<IForm[]>([]);
  const [form, setForm] = useState<IForm>({
    id: 0,
    date: "",
    passed: ""
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidDate(form.date)[0] && +form.passed > 0) {
      form.id = Convertor(form.date)[0];
      form.date = Convertor(form.date)[1];
      const doubleDate: IForm | undefined = stepsList.find((item) => item.id === form.id);
      if (doubleDate) {
        doubleDate.passed = String(+doubleDate.passed + +form.passed);
        setStepsList([...stepsList]);
        setForm({
          id: 0,
          date: "",
          passed: ""
        });
        return;
      }

      setStepsList([...stepsList, form]);
      setForm({
        id: 0,
        date: "",
        passed: ""
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  function removeItem(index: number) {
    const newStepsList = [...stepsList];
    newStepsList.splice(index, 1);
    setStepsList(newStepsList);
  }

  return (
    <>
      <div className={"container"}>
        <form onSubmit={handleSubmit} className={"form"} autoComplete="off">
          <div className={"form__item"}>
            <InputElement
              label={"Дата (ДД.ММ.ГГГГ)"}
              name={"date"}
              id={"date"}
              value={form.date}
              handleChange={handleChange}
            />
          </div>
          <div className={"form__item"}>
            <InputElement
              label={"Пройдено км"}
              name={"passed"}
              id={"passed"}
              value={form.passed}
              handleChange={handleChange}
            />
          </div>
          <FormButton typeBtn={"submit"} label={"OK"} />
        </form>
        <div className={"statistic"}>
          <div className={"statistic__title"}>
            <span>Дата</span>
            <span>Пройдено км</span>
            <span>Действия</span>
          </div>
          <div className={"statistic__list"}>
            <Listing stepsList={stepsList} removeItem={removeItem} />
          </div>
        </div>
      </div>
    </>
  );
};
