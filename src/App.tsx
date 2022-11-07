import { QuestionProvider } from "./contexts/QuestionContext";
import { UserProvider } from "./contexts/UserContext";
import Routes from "./routes";

export const App = () => {
  return (
    <>
      <QuestionProvider>
        <UserProvider>
          <Routes />
        </UserProvider>
      </QuestionProvider>
    </>
  );
};
