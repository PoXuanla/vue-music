import type { commonModel } from ".";

export interface LoginModel extends commonModel {
  message: string;
  user?: {};
  token: string;
}
