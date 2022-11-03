import { iGlobalButton } from "./types";

const GlobalButton = ({ children, className }: iGlobalButton) => {
  return <button className={className}>{children}</button>;
};

export default GlobalButton;
