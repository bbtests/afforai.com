import { ReactNode, Suspense, useState } from "react";
import Loader from "./loader";
import Logo from "images/graphics/logo-new-violet.webp"
import { Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { url } from "router/url";
import Menu from '@mui/icons-material/Menu';
import Sputnikatx from "images/logos/sputnikatx.png"
interface DefaultProps {
    children: ReactNode;
}


const Header = (): JSX.Element => {
    const [openMenu, setOpenMenu] = useState(false)

    return <>
        <Typography component={"header"} className="fixed-top">
            <nav className="d-flex justify-content-between  align-items-center container-fluid px-4  px-md-5 py-0 py-md-4">
                <Typography component={"div"} className="d-flex gap-1" sx={{ "& img": { width: 24, height: 24, m: 0 } }}>
                    <img src={Logo} alt="Afforai Logo" />
                    <span>Afforai</span>
                </Typography>
                <Typography component={"div"} sx={{ position: { xs: "absolute", md: "static" }, top: 0, left: 0 }} className={`${!openMenu ? 'd-none' : ''} d-md-flex mt-4 mt-md-0`}>
                    <ul className="m-0 p-0 d-flex gap-2 gap-md-4 flex-column flex-md-row">
                        <li><Link to={url.external.affiliate}>Affiliate</Link></li>
                        <li><Link to={url.pricing}>Pricing</Link></li>
                        <li><Link to={`${url.home}#testimonials`}>Testimonials</Link></li>
                        <li><Link to={url.external.helpCenter} target="_blank">Help Center</Link></li>
                    </ul>
                </Typography>
                <Typography component={"div"} className="d-flex">
                    <ul className="m-0 p-0 d-flex align-items-center gap-2">
                        <li><Link className="" to={url.login}>Log in</Link></li>
                        <li><Link className="btn btn-violet-fill text-white" to={url.signup}>Try for free</Link></li>
                    </ul>
                    <Menu className="d-md-none" onClick={() => { setOpenMenu(!openMenu) }} />
                </Typography>
            </nav>
        </Typography>
    </>
}
const Footer = (): JSX.Element => {

    return <>
        <Typography component={"footer"} className="d-flex justify-content-between flex-wrap container-fluid">
            <Typography component={"div"} className="d-flex flex-column col-12 col-sm-3">
                <Typography component={"div"} className="d-flex gap-1" sx={{ "& img": { width: 24, height: 24, m: 0 } }}>
                    <img src={Logo} alt="Afforai Logo" />
                    <span>Afforai</span>
                </Typography>
                <Typography component={"div"}>Afforai is your
                    research tool in to damn near anything. Helping you summarise,
                    translate, and withdraw data from documents.</Typography>
                <Typography component={"div"}>Copyright © 2023
                    Afforai Inc. All rights reserved.
                </Typography>
                <Typography component={"div"} className="d-flex flex-column">
                    <Link to={url.external.product_hunt} target="_blank"><img src={url.external.product_hunt_image} alt="product hunt" /></Link>
                    <Typography component={"div"}>Backed by</Typography>
                    <img src={Sputnikatx} alt="product hunt" />
                </Typography>
            </Typography>
            <Typography component={"div"}>
                <div>Company</div>
                <ul className="m-0 p-0 d-flex gap-1 flex-column ">
                    <li><Link to={url.external.our_story}>Our Story</Link></li>
                    <li><Link to={url.external.affiliate}>Affiliate</Link></li>
                    <li><Link to={url.external.affiliate}>Security</Link></li>
                    <li><Link to={url.external.roadmap}>Roadmap</Link></li>
                    <li><Link to={url.contactUs}>Contact Us</Link></li>
                </ul>
            </Typography>
            <Typography component={"div"}>
                <div>Resources</div>
                <ul className="m-0 p-0 d-flex gap-1 flex-column ">
                    <li><Link to={url.external.helpCenter} target="_blank">Help Center</Link></li>
                    <li><Link to={url.documentation}>API Docs</Link></li>
                    <li><Link to={url.terms_of_use}>Terms of Use</Link></li>
                    <li><Link to={url.privacy_policy}>Help Center</Link></li>
                </ul>
            </Typography>
            <Typography component={"div"}>
                <div>Follow Us</div>
                <ul className="m-0 p-0 d-flex gap-1 flex-column ">
                    <li><Link to={url.external.facebook} target="_blank">Facebook Group</Link></li>
                    <li><Link to={url.external.linkedin} target="_blank">Linkedin</Link></li>
                    <li><Link to={url.external.twitter} target="_blank">Twitter</Link></li>
                    <li><Link to={url.external.medium} target="_blank">Medium Blog</Link></li>
                </ul>
            </Typography>
            <Typography component={"div"}>
                <div>Language</div>
                <ul className="m-0 p-0 d-flex gap-1 flex-column ">
                    <li><Link to="">English</Link></li>
                    <li><Link to="">Vietnamese</Link></li>
                </ul>
            </Typography>
        </Typography>
    </>
}


export default function Default({ children }: DefaultProps): JSX.Element {

    return <>
        <Header />
        <Typography component={"main"} className="mt-5">
            <Suspense fallback={<Loader />}>
                {children}
            </Suspense>
        </Typography>
        <Footer />
    </>
}