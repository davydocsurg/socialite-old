import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";
import { SignUpAction } from "../redux/actions/AuthActions";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const history = useHistory();

  const [fields, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    handle: "",
    password: "",
    password_confirmation: "",
    errors: [],
  });

  const handleFieldChange = (e) => {
    setState({
      ...fields,
      [e.target.id]: e.target.value,
    });
  };

  const RegisterUser = (e) => {
    e.preventDefault();
    // console.log(fields);
    const passwordMatch = checkPasswordMatch(
      fields.password,
      fields.password_confirmation
    );

    if (passwordMatch === true) {
      alert("passwords don't match. please check your password again");
      return;
    }
    dispatch(SignUpAction(fields));
  };

  const checkPasswordMatch = (password, password_confirmation) => {
    return password !== password_confirmation ? true : false;
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={RegisterUser}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="first_name"
                name="first_name"
                value={fields.first_name}
                required
                onChange={handleFieldChange}
                fullWidth
                helperText={fields.errors.first_name}
                error={fields.errors.first_name ? true : false}
                id="first_name"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                value={fields.last_name}
                onChange={handleFieldChange}
                fullWidth
                id="last_name"
                label="Last Name"
                name="last_name"
                autoComplete="last_name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                value={fields.email}
                onChange={handleFieldChange}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                value={fields.handle}
                onChange={handleFieldChange}
                fullWidth
                id="handle"
                label="Handle"
                name="handle"
                autoComplete="handle"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                value={fields.password}
                onChange={handleFieldChange}
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                value={fields.password_confirmation}
                onChange={handleFieldChange}
                fullWidth
                name="password_confirmation"
                label="Confirm Password"
                type="password"
                id="password_confirmation"
                autoComplete="password_confirmation"
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>{/* <Copyright /> */}</Box>
    </Container>
  );
}

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(2),
//       // width: "45ch",
//     },
//   },
//   button: {
//     margin: theme.spacing(1),
//   },
// }));

// const SignIn = () => {
//   const classes = useStyles();
//   return (
//     <div className="container mt-5">
//       <h4 className="text-center">Sign Up</h4>
//       <div className="row justify-content-center text-center align-items-center">
//         <div className="col-lg-6 col-12">
//           <div className="card">
//             <div className="card-body">
//               <form className={classes.root} noValidate autoComplete="off">
//                 <div className="form-group">
//                   <TextField
//                     id="standard-basic"
//                     label="Name"
//                     className="form-control"
//                   />
//                 </div>

//                 <div className="form-group">
//                   <TextField
//                     id="standard-basic"
//                     label="Email"
//                     className="form-control"
//                   />
//                 </div>

//                 <div className="form-group">
//                   <TextField
//                     id="standard-basic"
//                     label="Handle"
//                     className="form-control"
//                   />
//                 </div>

//                 <div className="form-group">
//                   <TextField
//                     id="standard-password-input"
//                     label="Password"
//                     type="password"
//                     autoComplete="current-password"
//                     className="form-control"
//                   />{" "}
//                 </div>

//                 <div className="form-group">
//                   <TextField
//                     id="standard-password-input"
//                     label="Confirm Password"
//                     type="password"
//                     autoComplete="current-password"
//                     className="form-control"
//                   />{" "}
//                 </div>
//                 <div className="form-group">
//                   <Button
//                     variant="contained"
//                     color="default"
//                     className={classes.button}
//                     startIcon={<ExitToAppOutlinedIcon />}
//                     type="submit"
//                   >
//                     Sign Up
//                   </Button>
//                 </div>
//               </form>

//               <div className="text-info">
//                 <small className="text-dark">
//                   Already have an account? <Link to="/">Sign In</Link>
//                 </small>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SignIn;
