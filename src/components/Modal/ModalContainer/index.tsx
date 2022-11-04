import { Modal } from "./style";
import { iContainerModalProps } from "./types";

import { CgClose } from "react-icons/cg";

export const ModalContainer = ({ children }: iContainerModalProps) => {
  return (
    <Modal>
      <div className="overlay">
        <div className="content">
          <span>
            <CgClose />
          </span>
          {children}
        </div>
      </div>
    </Modal>
  );
};
