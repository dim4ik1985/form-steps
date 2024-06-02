export interface IForm {
  id: number;
  date: string;
  passed: string;
}

export interface IPropsButton {
  action?: () => void;
  img?: string;
  alt?: string;
}

export interface IPropsFormBtn {
  typeBtn: "submit" | "reset" | "button" | undefined;
  label: string;
  disabled?: boolean;
}

export interface IPropsListing {
  stepsList: IForm[];
  removeItem: (index: number) => void;
}
