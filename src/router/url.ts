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
  documentation: "/documentation",
  pricing: "/pricing",
  privacy_policy: "/privacy_policy",
  security: "/security",
  terms_of_use: "/terms_of_use",
  api: {
    login: "/signin",
    signup: "/signup",
    plan: "/plan",
    request_verification: "/request_verification",
    user: "/user",
  },
  external: {
    affiliate: "//afforai.getrewardful.com/signup",
    facebook: "//www.facebook.com/groups/afforai",
    helpCenter: "//help.afforai.com",
    linkedin: "//linkedin.com/company/afforai/",
    lifetime_access: "//appsumo.8odi.net/3eR3xn",
    medium: "//medium.com/@alec-afforai",
    our_story: "/our_story",
    product_hunt:
      "/https://www.producthunt.com/posts/afforai?utm_source=badge-top-post-badge&amp;utm_medium=badge&amp;utm_souce=badge-afforai",
    product_hunt_image:
      "https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=403202&amp;theme=light&amp;period=daily",
    roadmap: "//trello.com/b/98yNMfwA/afforai-roadmap",
    twitter: "//twitter.com/afforai",
  },
  params: {
    token: "token",
  },
};
