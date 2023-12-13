import { ReactNode, Suspense, useEffect, useState } from "react";
import Loader from "./loader";
import Logo from "images/graphics/logo-new-violet.webp"
import { Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { url } from "router/url";
import Menu from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Sputnikatx from "images/logos/sputnikatx.png"
interface DefaultProps {
    children: ReactNode;
    title?: string;
}


const Header = (): JSX.Element => {
    const [openMenu, setOpenMenu] = useState(false)

    return <>
        <Typography component={"header"} className="py-0 fixed-top">
            <nav className="d-flex justify-content-center  align-items-center container-fluid px-4  px-lg-5 py-3 py-md-4">
                <Typography sx={{
                    maxWidth: "1264px",
                    padding: "8px 24px",
                    border: (theme) => `1px solid ${theme.palette.tertiary.main}`,
                    background: (theme) => theme.palette.background.paper,
                    borderRadius: 2,
                    backdropFilter: "blur(16px)",
                    "& a": { color: (theme) => theme.palette.primary.dark, fontWeight: 500 }
                }} component={"div"} className="w-100 d-flex justify-content-between  align-items-center" >
                    <Typography component={"div"} className="d-flex gap-1" sx={{ "& img": { width: 24, height: 24, m: 0 } }}>
                        <img src={Logo} alt="Afforai Logo" />
                        <span>Afforai</span>
                    </Typography>
                    <Typography
                        component={"div"}
                        sx={{
                            position: { xs: "absolute", smm: "static" },
                            top: 0,
                            left: 0,
                            zIndex: -100,
                            borderBottom: (theme) => `1px solid ${theme.palette.tertiary.main}`,
                            borderRadius: 0,
                            backdropFilter: "blur(16px)",
                            background: (theme) => `${theme.palette.background.default}`
                        }}
                        className={`${!openMenu ? 'd-none' : ''} bg-md-transparent  d-md-flex col-12 col-md-auto pt-3 pt-md-0 mt-0`}
                    >
                        <ul className="my-5 my-md-0 mx-4 mx-md-0 p-0 d-flex gap-2 gap-md-4 flex-column flex-md-row">
                            <li><Link to={url.external.affiliate}>Affiliate</Link></li>
                            <li><Link to={url.pricing}>Pricing</Link></li>
                            <li><Link to={`${url.home}#testimonials`}>Testimonials</Link></li>
                            <li><Link to={url.external.helpCenter} target="_blank">Help Center</Link></li>
                        </ul>
                    </Typography>
                    <Typography component={"div"} className="d-flex gap-2 justify-content-between align-items-center">
                        <ul className="m-0 p-0 d-flex align-items-center gap-2">
                            <li><Link className="" to={url.login}>Log in</Link></li>
                            <li><Link className="btn btn-violet-fill text-white" to={url.signup}>Try for free</Link></li>
                        </ul>
                        {openMenu ?
                            <CloseIcon className="d-md-none" onClick={() => { setOpenMenu(!openMenu) }} />
                            :
                            <Menu className="d-md-none" onClick={() => { setOpenMenu(!openMenu) }} />
                        }
                    </Typography>
                </Typography>
            </nav>
        </Typography>
    </>
}
const Footer = (): JSX.Element => {

    return <>
        <footer className="p-5 container-fluid">
            <Typography component={"div"} sx={{ p: 4, "& *": { color: (theme) => theme.palette.primary.light }, "& .title": { fontWeight: 500, color: (theme) => theme.palette.primary.dark } }} className="d-flex justify-content-between flex-wrap border border-grey rounded-4">
                <Typography component={"div"} sx={{ "& *": { fontSize: 13 } }} className="d-flex flex-column col-12 col-sm-6 col-md-3">
                    <Typography component={"div"} className="d-flex gap-1 mb-3" sx={{ "& img": { width: 24, height: 24, m: 0 } }}>
                        <img src={Logo} alt="Afforai Logo" />
                        <span>Afforai</span>
                    </Typography>
                    <p>Afforai is your
                        research tool in to damn near anything. Helping you summarise,
                        translate, and withdraw data from documents.
                    </p>
                    <Typography component={"div"}>Copyright © 2023
                        Afforai Inc. All rights reserved.
                    </Typography>
                    <Typography component={"div"} className="d-flex flex-column">
                        <Link to={url.external.product_hunt} target="_blank"><img className="my-4" src={url.external.product_hunt_image} alt="product hunt" /></Link>
                        <Typography component={"div"}>Backed by</Typography>
                        <img className="my-3 col-6" src={Sputnikatx} alt="product hunt" />
                    </Typography>
                </Typography>
                <Typography component={"div"} className="col-6 col-sm-4 col-md-auto">
                    <div className="title">Company</div>
                    <ul className="m-0 p-0 d-flex gap-1 flex-column ">
                        <li><Link to={url.external.our_story}>Our Story</Link></li>
                        <li><Link to={url.external.affiliate}>Affiliate</Link></li>
                        <li><Link to={url.external.affiliate}>Security</Link></li>
                        <li><Link to={url.external.roadmap}>Roadmap</Link></li>
                        <li><Link to={url.contactUs}>Contact Us</Link></li>
                    </ul>
                </Typography>
                <Typography component={"div"} className="col-6 col-sm-4 col-md-auto">
                    <div className="title">Resources</div>
                    <ul className="m-0 p-0 d-flex gap-1 flex-column ">
                        <li><Link to={url.external.helpCenter} target="_blank">Help Center</Link></li>
                        <li><Link to={url.documentation}>API Docs</Link></li>
                        <li><Link to={url.terms_of_use}>Terms of Use</Link></li>
                        <li><Link to={url.privacy_policy}>Help Center</Link></li>
                    </ul>
                </Typography>
                <Typography component={"div"} className="col-6 col-sm-4 col-md-auto">
                    <div className="title">Follow Us</div>
                    <ul className="m-0 p-0 d-flex gap-1 flex-column ">
                        <li><Link to={url.external.facebook} target="_blank">Facebook Group</Link></li>
                        <li><Link to={url.external.linkedin} target="_blank">Linkedin</Link></li>
                        <li><Link to={url.external.twitter} target="_blank">Twitter</Link></li>
                        <li><Link to={url.external.medium} target="_blank">Medium Blog</Link></li>
                    </ul>
                </Typography>
                <Typography component={"div"} className="col-6 col-sm-4 col-md-auto">
                    <div className="title">Language</div>
                    <ul className="m-0 p-0 d-flex gap-1 flex-column ">
                        <li><Link to="">English</Link></li>
                        <li><Link to="">Vietnamese</Link></li>
                    </ul>
                </Typography>
            </Typography>
        </footer>
    </>
}


export default function Default({ children, title }: DefaultProps): JSX.Element {
    useEffect(() => {
        if (title) document.title = `${title}`
        return () => {
            document.title = 'Afforai - Research anything with an AI assistant';
        };
    }, [title]);
    return <>
        <Header />
        <Typography component={"main"} className="mt-5 d-flex flex-column align-items-center overflow-hidden">
            <Suspense fallback={<Loader />}>
                {children}
            </Suspense>
        </Typography>
        <Footer />
    </>
}