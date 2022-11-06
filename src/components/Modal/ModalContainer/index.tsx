import { Modal } from "./style";
import { iContainerModalProps } from "./types";

export const ModalContainer = ({ children }: iContainerModalProps) => {
  return (
    <Modal>
      <div className="overlay">
        <div className="content">{children}</div>
      </div>
    </Modal>
  );
};
