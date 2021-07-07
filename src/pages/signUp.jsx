import React, { useState } from "react";
// import Navbar from "../components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
// import Icon from "@material-ui/core/Icon";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { RegisterAction } from "../redux/actions/AuthActions";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  // eslint-disable-next-line
  const authResponse = useSelector((state) => state.userAuth.authResponse);

  const [fields, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    handle: "",
    password: "",
    password_confirmation: "",
  });

  const handleFieldChange = (e) => {
    setState({
      ...fields,
      [e.target.id]: e.target.value,
    });
  };

  const signIn = () => {
    history.push("/signin");
  };

  const RegisterUser = (e) => {
    e.preventDefault();
    console.log(fields);
    const passwordMatch = checkPasswordMatch(
      fields.password,
      fields.password_confirmation
    );

    if (passwordMatch === true) {
      alert("passwords dont match. please check your password again");
      return;
    }
    dispatch(RegisterAction(fields));
  };

  const checkPasswordMatch = (password, password_confirmation) => {
    return password !== password_confirmation ? true : false;
  };

  return (
    <div className="">
      {/* <Navbar></Navbar> */}
      <div className="container mt-5">
        <h4 className="text-center">Sign Up</h4>
        <div className="row justify-content-center text-center align-items-center">
          <div className="col-lg-6 col-12">
            <div className="card">
              <div className="card-body">
                <form onSubmit={RegisterUser}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      id="first_name"
                      value={fields.first_name}
                      onChange={handleFieldChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      id="last_name"
                      value={fields.last_name}
                      onChange={handleFieldChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      id="email"
                      value={fields.email}
                      onChange={handleFieldChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Handle"
                      id="handle"
                      value={fields.handle}
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
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      id="password_confirmation"
                      value={fields.password_confirmation}
                      onChange={handleFieldChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <Button
                      variant="contained"
                      color="default"
                      className={classes.button}
                      startIcon={<CreateOutlinedIcon />}
                      type="submit"
                    >
                      Sign Up
                    </Button>
                  </div>
                </form>

                <div className="row">
                  <div className="col-6">
                    <span onClick={signIn} className="signin_link text-info">
                      Registered? Sign In{" "}
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

export default SignUp;
