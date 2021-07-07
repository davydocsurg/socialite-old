import * as ActionTypes from "../ActionTypes";
import {
  RegisterUserService,
  LogInUserService,
  LogOutUserService,
} from "../../services/AuthServices";
import { useHistory } from "react-router-dom";

export const RegisterAction = (credentials) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
    dispatch({ type: ActionTypes.LOADING });

    RegisterUserService(credentials).then(
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

export const LogInAction = (credentials) => {
  const history = useHistory();
  return (dispatch) => {
    dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });
    dispatch({ type: ActionTypes.LOADING });

    LogInUserService(credentials).then(
      (res) => {
        if (res.hasOwnProperty("success") && res.success === true) {
          localStorage.setItem("user-token", res.access_token);
          dispatch({ type: ActionTypes.LOGIN_SUCCESS });
          history.push("/");
        } else if (res.hasOwnProperty("success") && res.success === false) {
          dispatch({ type: ActionTypes.LOGIN_ERROR, res });
        }
      },
      (error) => {
        dispatch({ type: ActionTypes.CODE_ERROR, error });
      }
    );
  };
};

export const LogOutAction = () => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.RESTART_AUTH_RESPONSE });

    LogOutUserService().then(
      (res) => {
        if (res.hasOwnProperty("success") && res.success === true) {
          dispatch({ type: ActionTypes.LOGOUT_SUCCESS, res });
        } else if (res.hasOwnProperty("success") && res.success === false) {
          dispatch({ type: ActionTypes.LOGOUT_SUCCESS, res });
        }
      },
      (error) => {
        dispatch({ type: ActionTypes.CODE_ERROR, error });
      }
    );
  };
};
