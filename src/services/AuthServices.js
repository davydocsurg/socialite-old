import HttpService from "./HttpServices";

export const RegisterUserService = (credentials) => {
  const http = new HttpService();
  let signUpUrl = "signup";
  return http
    .postData(credentials, signUpUrl)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const LogInUserService = (credentials) => {
  const http = new HttpService();
  let logInUrl = "login";
  return http
    .postData(credentials, logInUrl)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const LogOutUserService = () => {
  const http = new HttpService();
  let logInUrl = "logout";
  const tokenId = "user-token";
  return http
    .getData(logInUrl, tokenId)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      return error;
    });
};
