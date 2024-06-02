import classes from "./button.module.css";
import { IPropsButton } from "../../models.ts";

export const Button = (props: IPropsButton) => {
  const { action, img, alt } = props;
  return (
    <>
      <img
        className={classes["button"]}
        width={"30px"}
        height={"30px"}
        src={img}
        alt={alt}
        onClick={action}
      />
    </>
  );
};
