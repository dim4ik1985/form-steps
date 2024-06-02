import classes from "./listing.module.css";
import { Button } from "../Button";
import btnEdit from "../../assets/icons8-редактировать.svg";
import btnDelete from "../../assets/icons8-96.svg";
import { IPropsListing } from "../../models.ts";

export const Listing = (props: IPropsListing) => {
  const { stepsList, removeItem } = props;
  return (
    <>
      {stepsList
        .sort((a, b) => b.id - a.id)
        .map((step) => {
          return (
            <div className={classes["list__item"]} key={step.id}>
              <span>{step.date}</span>
              <span>{step.passed}</span>
              <div className={classes["btn"]}>
                <Button img={btnEdit} alt={"btn-del"} />
                <Button
                  action={() => removeItem(stepsList.indexOf(step))}
                  img={btnDelete}
                  alt={"btn-del"}
                />
              </div>
            </div>
          );
        })}
    </>
  );
};
