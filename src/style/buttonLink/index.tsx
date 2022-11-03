import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface iButtonLink {
  to: string;
  children: ReactNode;
  className?: string | undefined;
}

const ButtonLink = ({ to, children, className }: iButtonLink) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default ButtonLink;
