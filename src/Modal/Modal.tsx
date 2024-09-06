import React from "react";
import { CSSTransition } from "react-transition-group";

import { Close } from "../Close";

import "./style.css";

export const Modal: React.FC<{
  opened: boolean;
  onClose: Function;
  children?: React.ReactNode;
}> = ({ opened, onClose, children }) => {
  const [isOpen, setOpen] = React.useState(opened);

  React.useEffect(() => {
    setOpen(opened);
  }, [opened]);
  
  return (
    <>
      <CSSTransition
        classNames={{
          enter: "modal_enter",
          enterActive: "modal_enter-active",
          enterDone: "modal_enter-done",
          exit: "modal_exit",
          exitActive: "modal_exit-active",
          exitDone: "modal_exit-done",
        }}
        in={isOpen}
        timeout={300}
      >
        <div style={{ display: isOpen ? undefined : "none" }} className="modal">
          <div className="modal--content">
            <Close onClick={() => onClose()} />
            {children}
          </div>
        </div>
      </CSSTransition>
    </>
  );
};
