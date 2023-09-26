import { ReactNode, useEffect } from "react";
import style from "./Modal.module.scss";

type Props = {
  children?: ReactNode;
};

const Modal = ({ children }: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className={style.root}>
      <div className={style.card}>{children}</div>
    </div>
  );
};

export default Modal;
