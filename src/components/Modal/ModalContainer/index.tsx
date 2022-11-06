import { MouseEvent } from "react";
import { CgClose } from "react-icons/cg";
import { Modal } from "./style";
import { iContainerModalProps } from "./types";

export const ModalContainer = ({
  children,
  setIsModOpen,
}: iContainerModalProps) => {
  function closeModal() {
    setIsModOpen((oldIsMod) => !oldIsMod);
    console.log("Feshow");
  }

  function handleClick(e: MouseEvent) {
    let target = e.target as HTMLElement;
    target.className === "overlay" && closeModal();
  }

  return (
    <Modal>
      <div className="overlay" onClick={(e) => handleClick(e)}>
        <div className="content">
          <span onClick={closeModal}>
            <CgClose />
          </span>
          {children}
        </div>
      </div>
    </Modal>
  );
};
