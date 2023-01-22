import { useModalContext } from "../../../contexts/ModalContext";
import { ModalContainer } from "../ModalContainer";
import { useDropzone } from "react-dropzone";
import { useUserContext } from "../../../contexts/UserContext";
import { useCallback } from "react";
import { FiUpload } from "react-icons/fi";

export const ProfileImageModal = () => {
  const { setIsModProfileImageIsOpen } = useModalContext();
  const { editUserImage } = useUserContext();

  const onDrop = useCallback(async (file: any) => {
    await editUserImage(file[0].path);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <ModalContainer setIsModOpen={setIsModProfileImageIsOpen}>
      <div {...getRootProps()}>
        {" "}
        <input {...getInputProps()} />{" "}
        {isDragActive ? (
          <>
            <FiUpload></FiUpload>
            <p> Solte os arquivos aqui ... </p>
          </>
        ) : (
          <>
            <FiUpload></FiUpload>
            <p>
              {" "}
              Arraste e solte um arquivo aqui ou clique para selecionar arquivos{" "}
            </p>
          </>
        )}{" "}
      </div>
    </ModalContainer>
  );
};
