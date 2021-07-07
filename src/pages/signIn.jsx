import React, { useState } from "react";
// import Navbar from "../components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
// import Icon from "@material-ui/core/Icon";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import { LogInAction } from "../redux/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const history = useHistory();

  const dispatch = useDispatch();
  const authResponse = useSelector((state) => state.userAuth.authResponse);

  const [fields, setState] = useState({
    login: "",
    password: "",
  });

  const signUp = () => {
    history.push("/signup");
  };

  const handleFieldChange = (e) => {
    setState({
      ...fields,
      [e.target.id]: e.target.value,
    });
  };

  const LoginUser = (e) => {
    e.preventDefault();
    console.log(fields);

    dispatch(LogInAction(fields));
  };

  return (
    <div className="">
      <div className="container mt-5">
        <h4 className="text-center">Sign In</h4>
        <div className="row justify-content-center text-center align-items-center">
          <div className="col-lg-6 col-12">
            <div className="card">
              <div className="card-body">
                <form onSubmit={LoginUser}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email or Username"
                      id="login"
                      value={fields.login}
                      onChange={handleFieldChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                      id="password"
                      value={fields.password}
                      onChange={handleFieldChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <Button
                      variant="contained"
                      color="default"
                      className={classes.button}
                      startIcon={<ExitToAppOutlinedIcon />}
                      type="submit"
                    >
                      Sign In
                    </Button>
                  </div>
                </form>

                <div className="row">
                  <div className="col-6">
                    <span onClick={signUp} className="signin_link text-info">
                      Don't have an account? Sign Up
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
