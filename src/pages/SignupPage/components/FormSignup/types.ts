import { iLogin } from "../../../LoginPage/components/FormLogin/types";

export interface iSignup extends iLogin {
  name: string;
  confirmPassword: string;
  bio?: string;
}
