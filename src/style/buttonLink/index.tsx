import { Link } from "react-router-dom";
import { iButtonLink } from "./types";

const ButtonLink = ({ to, children, className }: iButtonLink) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default ButtonLink;
