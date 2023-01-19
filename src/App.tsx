import { ModalProvider } from "./contexts/ModalContext";
import { UserProvider } from "./contexts/UserContext";
import { QuestionProvider } from "./contexts/QuestionContext";
import Routes from "./routes";

export const App = () => {
  return (
    <>
      <UserProvider>
        <ModalProvider>
          <QuestionProvider>
            <Routes />
          </QuestionProvider>
        </ModalProvider>
      </UserProvider>
    </>
  );
};
