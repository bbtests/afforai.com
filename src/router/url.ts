export const url = {
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:3000",
  home: "/",
  error404: "/",
  //Authentication
  signup: "/signup",
  login: "/login",
  forgotPass: "/forgotpassword",
  // other pages
  contactUs: "/contact",
  api: {
    login: "/signin",
    signup: "/signup",
    plan: "/plan",
    request_verification: "/request_verification",
    user: "/user",
  },
  external: {
    myGithub: "//github.com/Brotherbond",
  },
  params: {
    token: "token",
  },
};
