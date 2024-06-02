import classes from "./formButton.module.css";
import { IPropsFormBtn } from "../../models.ts";

export const FormButton = (props: IPropsFormBtn) => {
  const { typeBtn, label, disabled } = props;
  return (
    <button type={typeBtn} className={classes["button"]} disabled={disabled}>
      {label}
    </button>
  );
};
