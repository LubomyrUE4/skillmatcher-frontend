import authSlice from "./auth.slice";
import { authService, localStorageService } from "../../services";

const { succeed, loggedOut } = authSlice.actions;

const signUp =
  ({ router, ...payload }) =>
  async (dispatch) => {
    try {
      const { content } = await authService.registration(payload);
      localStorageService.setTokens(content);
      dispatch(succeed());
      router.push(content.role === "Candidate" ? "/cabinet" : "/");
    } catch (error) {
      console.log("signup error: ", error);
    }
  };

const signIn =
  ({ router, ...payload }) =>
  async (dispatch) => {
    try {
      const { content } = await authService.login(payload);
      console.log("sign in content: ", content);
      localStorageService.setTokens(content);
      dispatch(succeed(content.id));
      router.push(content.role === 'Candidate' ? '/cabinet' : '');
    } catch (error) {
      console.log("signin error: ", error);
    }
  };

const logOut = () => async (dispatch) => {
  dispatch(loggedOut());
  localStorageService.removeAuthData();
};

export { signUp, signIn, logOut };
