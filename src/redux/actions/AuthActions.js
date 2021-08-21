import * as ActionTypes from "../ActionTypes";
import {
  SignUpUserService,
  SignInUserService,
  SignOutUserService,
} from "../../services/AuthServices";
// import { useHistory } from "react-router-dom";

export const SignUpAction = (credentials) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
    dispatch({ type: ActionTypes.LOADING });

    SignUpUserService(credentials).then(
      (res) => {
        if (res.hasOwnProperty("success") && res.success === true) {
          dispatch({ type: ActionTypes.SIGNUP_SUCCESS, res });
        } else if (res.hasOwnProperty("success") && res.success === false) {
          dispatch({ type: ActionTypes.SIGNUP_ERROR, res });
        }
      },
      (error) => {
        dispatch({ type: ActionTypes.CODE_ERROR, error });
      }
    );
  };
};

export const SignInAction = (credentials) => {
  // const history = useHistory();
  return (dispatch) => {
    dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
    dispatch({ type: ActionTypes.LOADING });

    SignInUserService(credentials).then(
      (res) => {
        if (res.hasOwnProperty("success") && res.success === true) {
          localStorage.setItem("user-token", res.access_token);
          dispatch({ type: ActionTypes.SIGNIN_SUCCESS });
          // history.push("/home");
          // history.pushState(state, title [, '/home'])
          window.location.replace("/home");
        } else if (res.hasOwnProperty("success") && res.success === false) {
          dispatch({ type: ActionTypes.SIGNIN_ERROR, res });
        }
      },
      (error) => {
        dispatch({ type: ActionTypes.CODE_ERROR, error });
      }
    );
  };
};

export const SignOutAction = () => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });

    SignOutUserService().then(
      (res) => {
        if (res.hasOwnProperty("success") && res.success === true) {
          localStorage.removeItem("user_token");
          // window.location.replace("/");

          dispatch({ type: ActionTypes.SIGNOUT_SUCCESS, res });
        } else if (res.hasOwnProperty("success") && res.success === false) {
          dispatch({ type: ActionTypes.SIGNOUT_SUCCESS, res });
        }
      },
      (error) => {
        dispatch({ type: ActionTypes.CODE_ERROR, error });
      }
    );
  };
};
