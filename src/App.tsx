import { ModalProvider } from "./contexts/ModalContext";
import { UserProvider } from "./contexts/UserContext";
import Routes from "./routes";

export const App = () => {
  return (
    <>
      <UserProvider>
        <ModalProvider>
          <Routes />
        </ModalProvider>
      </UserProvider>
    </>
  );
};
