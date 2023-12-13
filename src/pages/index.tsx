import Layout from "layouts/Default";
import { Link as MUILink, Typography, useMediaQuery, Unstable_Grid2 as Grid, Chip, AvatarGroup, Avatar, Card, CardMedia, CardContent, CardActionArea } from "@mui/material"
import { Link } from "react-router-dom"
import { url } from "router/url";
import Appsumo from "images/icons/appsumo.png"
import Laptop20Img from "images/graphics/laptop-landing-20.png"
import ReviewsImg from "images/graphics/ph-review.webp"
import LandingPC1Img from "images/graphics/laptop-landing-1.png"
import LandingPC4Img from "images/graphics/laptop-landing-4.png"
import LandingPC5Img from "images/graphics/laptop-landing-5.png"
import LandingPC11Img from "images/graphics/laptop-landing-11.png"
import LandingPC13Img from "images/graphics/laptop-landing-13.png"
import LandingPC14Img from "images/graphics/laptop-landing-14.png"
import LandingPC15Img from "images/graphics/laptop-landing-15.png"
import LandingPC17Img from "images/graphics/laptop-landing-17.png"
import LandingPC18Img from "images/graphics/laptop-landing-18.png"
import LandingPC19Img from "images/graphics/laptop-landing-19.png"
import Landing12Img from "images/graphics/mobile-landing-12.png"
import Avatar1 from "images/testimonials/1-1.webp";
import Avatar2 from "images/testimonials/1-2.webp";
import Avatar3 from "images/testimonials/1-3.webp";
import Avatar4 from "images/testimonials/1-4.webp";
import Avatar5 from "images/testimonials/1-5.webp";
import Avatar6 from "images/testimonials/1-6.webp";
import Avatar7 from "images/testimonials/0-2.webp";
import Avatar8 from "images/testimonials/0-3.webp";
import Avatar9 from "images/testimonials/0-4.webp";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FastForwardIcon from '@mui/icons-material/FastForward';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import FAQs from "components/FAQs";
import Testimonial from "components/Testimonial";
import BuiltForUser from "components/BuiltForUser";

export default function Home(): JSX.Element {
    const isMobile = useMediaQuery('(max-width:992px)');
    return <>
        <Layout>
            <Typography component={"section"} my={15} className="container-fluid d-flex flex-column mb-5 px-lg-5">
                <Typography sx={{}} component={"div"} className="row d-flex flex-column align-items-center mt-5 text-md-center" >
                    <Typography component={"div"}>
                        <Chip className="col-12 col-md-auto bg-orange " sx={{
                            borderRadius: 3,
                            border: "2px solid #333333",
                            p: "6px 6px 6px 10px", height: "fit-content", "& *": { borderRadius: 0 }
                        }} label={<div className="d-flex justify-content-center align-items-center gap-1">
                            <Typography sx={{ width: "26px" }}><img src={Appsumo} alt="Appsumo" /></Typography>
                            <Typography component={"small"} sx={{ fontWeight: 600, fontSize: 13 }}>Now on AppSumo</Typography>
                            <MUILink to={url.external.lifetime_access} component={Link} sx={{
                                padding: "2px 2px 2px 6px", gap: "2px",
                                textDecoration: "none",
                                fontWeight: 600,
                                fontSize: 13,
                                borderRadius: "6px", border: "1px solid rgb(51, 51, 51)",
                                background: "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50.04%, rgba(255, 255, 255, 0.5) 50.85%)"
                            }}
                                className="d-flex justify-content-between align-items-center"
                            >
                                Get Lifetime Deal
                                <ChevronRightIcon />
                            </MUILink>

                        </div>} />
                    </Typography>
                    <h1 className="col-md-9 mt-4 text-center">Your second brain for maximizing productivity</h1>
                    <Typography component={"div"} className="mb-3 col-md-9 col-xl-7" >
                        Afforai is an AI chatbot that searches, summarizes, and translates info from multiple sources to produce trustworthy research. Feed lengthy research documents to stacks of dry compliance requirements and extract the key findings you need.
                    </Typography>
                    <Typography component={"div"} className="pt-3 bg-lap3" sx={{ pb: 15 }} >
                        <Typography component={"div"} className="mb-5 d-lg-flex justify-content-center" sx={{}} >
                            <Typography component={"div"} className="col-lg-11 col-xl-9" sx={{}} >
                                <swiper-container
                                    free-mode
                                    watch-slides-progress
                                    resize-observer
                                    centered-slides
                                    centered-slides-bounds
                                    disable-on-interaction={false}
                                    {...(isMobile ? {
                                        speed: 20000,
                                        delay: 1,
                                        autoplay: true,
                                        loop: true,
                                        "space-between": "5",
                                        "slides-per-view": 3,
                                    } : {
                                        loop: false,
                                        "space-between": 0,
                                        "slides-per-view": 4,
                                        autoplay: false
                                    })}>
                                    {
                                        ["Summarize Key Findings", "Compare Between Documents", "Search For Answers", "Ask in Any Language"].map((slide, i) => (
                                            <swiper-slide key={i}>
                                                <Chip label={
                                                    <>
                                                        <CheckOutlinedIcon />
                                                        {slide}
                                                    </>
                                                } sx={{
                                                    borderRadius: 1,
                                                    background: (theme) => `${theme.palette.background.default}`,
                                                    border: (theme) => `1px solid ${theme.palette.tertiary.light}`,
                                                }} />
                                            </swiper-slide>
                                        ))
                                    }
                                </swiper-container>
                            </Typography>
                        </Typography>
                        <Typography component={"div"} className="d-md-flex justify-content-center mb-5 gap-3" >
                            <Link to={url.signup} className="col-12 col-md-auto my-2 btn btn-violet-fill text-white">Try for free</Link>
                            <Link to={url.pricing} className="col-12 col-md-auto  my-2 btn btn-gray">View Pricing</Link>
                        </Typography>
                    </Typography>
                </Typography>
                <Typography component={"div"} sx={{ mt: -12 }} className="d-flex justify-content-center" >
                    <Typography component={"div"} className="mx-5 d-none d-md-block">
                        <img src={LandingPC1Img} alt="Welcome" />
                    </Typography>
                </Typography>
                <Typography component={"div"} className="gap-1 mt-5 mb-2 d-flex justify-content-center align-items-center">
                    <span>Loved by </span>
                    <Typography color={"secondary.light"} > 20,000+</Typography>
                    <span> users around the world</span>
                </Typography>
                <Typography component={"div"} className="d-flex justify-content-center align-items-center">
                    <AvatarGroup max={isMobile ? 4 : 10} renderSurplus={(surplus) => <span>+{surplus.toString().slice(0, 2)}k</span>}
                        total={20251}>
                        {[Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6, Avatar7, Avatar8, Avatar9].map((avatar, i) => <Avatar alt="Remy Sharp" src={avatar} key={i} />
                        )}
                    </AvatarGroup>
                </Typography>
            </Typography>
            <Typography component={"section"} my={15} className="container-fluid d-lg-flex gap-lg-2">
                <Typography component={"div"} className="mt-5 " >
                    <h2>Say goodbye to long, tiresome documents</h2>
                    <Typography component={"div"} className="mb-3" >
                        Afforai seamlessly translates documents, files, spreadsheets & websites, filtering out what you don’t need & answering your specific questions within seconds.
                    </Typography>
                    <Typography component={"div"} className="gap-2">
                        <ul className="ps-0"> {[
                            "A whip smart research assistant",
                            "We speak every language",
                            "Reliable data citation for answers",
                            "Fort-Knox level data security",
                        ].map((item: string, i: number) => <li key={i} className="d-flex align-items-center gap-4">
                            <CheckCircleOutlinedIcon color={"success"} />
                            <span>{item}</span>
                        </li>)}
                        </ul>
                    </Typography>
                </Typography>
                <img className="col-lg-6" src={LandingPC4Img} alt="Afforai masters the documents you upload" />
            </Typography>
            <Typography component={"section"} my={15} className="container-fluid flex-column">
                <Typography component={"div"} className="mt-5 text-center d-md-flex justify-content-center align-items-center flex-column" >
                    <button className="btn btn-violet mb-4">10x your productivity</button>
                    <h2 >
                        Save yourself from stress & streamline your workflow
                    </h2>
                    <Typography component={"div"} className="mb-5 col-md-9 col-xl-7" >
                        The average worker spends 9 hours per week looking through & gathering information from thick stacks of documents. With Afforai, you can save yourself 8 hours per week (plus a lot of headaches).
                    </Typography>
                </Typography>
                <img src={LandingPC5Img} alt="productivity" />
            </Typography>
            <Typography component={"section"} my={15} className="container-fluid flex-column">
                <Typography component={"div"} className="d-flex flex-column justify-content-center align-items-center text-center">
                    <button className="btn btn-violet">Why choose us?</button>
                    <h2 className="my-4">
                        Built for the user
                    </h2>
                    <Typography component={"div"} className="mb-5" >
                        Afforai is where exceptional customer focus meets exceptional technology.
                    </Typography>
                </Typography>
                <Typography component={"div"} sx={{ mt: 5 }}>
                    <BuiltForUser />
                </Typography>
            </Typography>
            <Typography component={"section"} my={15} className="container-fluid">
                <Typography component={"div"} className="row mt-5 flex-column flex-md-row d-md-flex" >
                    <Typography component={"div"} className="mt-5 col-md-6" >
                        <button className="btn btn-violet mb-4">Most versatile</button>
                        <h2>
                            Create multiple chatbots for different purposes
                        </h2>
                        <Typography component={"div"} className="mb-5" >
                            Legal documents? Summarising a book? Extracting data from a website? We allow you to create multiple chatbots at one time, so you can use Afforai for a whole range of purposes.
                        </Typography>
                        <Typography className="d-flex gap-3">
                            <Link to={url.signup} className="btn btn-violet-fill text-white">Get Started</Link>
                            <Link to={url.pricing} className="btn btn-gray ">View Pricing</Link>
                        </Typography>
                    </Typography>
                    <img className="col-12 col-md-6" src={LandingPC11Img} alt="Afforai masters the documents you upload" />
                </Typography>
            </Typography>
            <Typography component={"section"} sx={{ mb: 30, mt: 15 }} className="container-fluid">
                <Typography component={"div"} className="d-md-flex justify-content-end gap-3 position-relative">
                    <Typography component={"div"} className="mt-5 col-12 col-md-6" >
                        <button className="btn btn-violet">Different Modes Available</button>
                        <h2 className="my-4">
                            Customize your assistant with a range of different modes
                        </h2>
                        <Typography component={"div"} >
                            <Typography component={"div"} className="" >
                                Further power your questions with additional modes. Afforai allows you to switch between three different modes, each which have unique ways of utilising our AI tools to answer your question(s).
                                <Typography sx={{ position: { smm: "absolute" }, left: 0, top: "25%" }} className="d-flex justify-content-center my-3 col-md-6">
                                    <img className="col-8 col-md-12" src={Landing12Img} alt="mobile landing 14" />
                                </Typography>
                                <Typography component={"div"} className="mt-3" >
                                    <ul className="p-0">
                                        <li className="d-flex gap-3">
                                            <FastForwardIcon color="secondary" />
                                            <Typography component={"div"} className="" >
                                                <Typography component={"div"} className=" d-flex align-items-center" >
                                                    <span className="me-2">Fast Mode (default)</span>
                                                    <Chip className="text-purple" sx={{
                                                        background: "#efe6ff",
                                                        borderRadius: 5, p: "4px 8px",
                                                        "& span": { p: 0 }
                                                    }} label={<>1 credit</>} />
                                                </Typography>
                                                <Typography component={"div"} className="" >
                                                    Quickly ask a question and receive an answer from the AI. This mode is most suited for applications that require only a small part of the documents to be scanned (ex. FAQ Chatbot, Search).
                                                </Typography>
                                            </Typography>
                                        </li>
                                        <li className="d-flex gap-3 my-4">
                                            <PowerSettingsNewIcon color="secondary" />
                                            <Typography component={"div"} className="" >
                                                <Typography component={"div"} className=" d-flex align-items-center" >
                                                    <span className="me-2">Powerful Mode</span>
                                                    <Chip className="text-purple" sx={{
                                                        background: "#efe6ff",
                                                        borderRadius: 5, p: "4px 8px",
                                                        "& span": { p: 0 }
                                                    }} label={<>4 credits</>} />
                                                </Typography>
                                                <Typography component={"div"} className="" >
                                                    Get answers of extra high quality from the AI. This mode is most suited for applications that require inferences as well as the full documents to be scanned (ex. Textual Data Analysis, Search with Inference, Report Generation).
                                                </Typography>
                                            </Typography>
                                        </li>
                                        <li className="d-flex gap-3">
                                            <ZoomInIcon color="secondary" />
                                            <Typography component={"div"} className="" >
                                                <Typography component={"div"} className=" d-flex align-items-center" >
                                                    <span className="me-2">Google Mode </span>
                                                    <Chip className="text-purple" sx={{
                                                        background: "#efe6ff",
                                                        borderRadius: 5, p: "4px 8px",
                                                        "& span": { p: 0 }
                                                    }} label={<>5 credits</>} />
                                                </Typography>
                                                <Typography component={"div"} className="" >
                                                    Supplement your answers with the top 3 results from Google Search. This adds extra reliability to back up our already incredibly accurate answers.
                                                </Typography>
                                            </Typography>
                                        </li>
                                    </ul>
                                </Typography>
                            </Typography>
                        </Typography>
                    </Typography>
                </Typography>
            </Typography>
            <Typography component={"section"} sx={{ mb: 15, mt: 30 }} className="container-fluid">
                <Typography component={"div"} className="row d-md-flex justify-content-between align-items-center" >
                    <Typography component={"div"} className="col-md-6" >
                        <button className="btn btn-violet">Multiple Language Supported</button>
                        <h2 className="my-3">
                            Regardless of where you are from, Afforai is for you
                        </h2>
                        <Typography component={"div"} className="mb-5" >
                            We support more than 100 Languages, meaning you can seamlessly use our services regardless of where you are from. Our Cross Language Querying feature also allows flawless translation of documents.
                        </Typography>
                    </Typography>
                    <div className="col-md-6 d-flex justify-content-center align-content-center">
                        <img className="col-8 col-md-12" src={LandingPC13Img} alt="mobile landing 14" />

                    </div>
                </Typography>
            </Typography>
            <Typography component={"section"} my={15} className="container-fluid d-flex flex-column align-items-center flex-md-row">
                <Typography component={"div"} className="col-md-6" >
                    <button className="btn btn-violet">Get more out of your files</button>
                    <h2 className="my-4">
                        File Wizard - a game changing new feature
                    </h2>
                    <Typography component={"div"} className="mb-5" >
                        Convert your files with less effort than ever. Afforai’s File Wizard feature allows you to transform your files, in limitless different ways. We can translate, summarize, or explain your upload in no time.
                    </Typography>
                </Typography>
                <img className="col-md-6" src={LandingPC14Img} alt="mobile landing 14" />
            </Typography>
            <Typography component={"section"} my={15} className="container-fluid">
                <Typography component={"div"} className="d-md-flex flex-column align-items-center" >
                    <button className="btn btn-violet">Seamless Integrations - Coming Soon</button>
                    <h2 className="my-4 text-md-center">
                        Upload Files directly from Google Drive, One Drive & Dropbox
                    </h2>
                    <Typography component={"div"} className="col-md-8 text-md-center" >
                        Afforai allows you to upload files directly from Google Drive, One Drive & Dropbox, meaning your experience will be smooth sailing regardless of your preferred
                    </Typography>
                    <img className="col-md-8" src={LandingPC15Img} alt="mobile landing 15" />
                </Typography>
            </Typography>
            <Typography component={"section"} my={15} className="container-fluid">
                <Typography component={"div"} className="text-center d-flex flex-column align-items-center" >
                    <h2 className="col-9 col-md-8">
                        Unquestionable accuracy & reliability
                    </h2>
                    <Typography component={"div"} className="col-9 col-md-8">
                        We pride ourselves on the quality of our chatbot’s responses, and go the extra mile to ensure the accuracy & reliability of our answers.
                    </Typography>
                </Typography>
                <Grid className="my-5 justify-content-center" spacing={2} container>
                    {[
                        {
                            img: LandingPC17Img,
                            title: "Trusted by users all over the World",
                            description: "Afforai is used all around the World, saving thousands of people time and money with our speed & accuracy."
                        },
                        {
                            img: LandingPC18Img,
                            title: "Information filtering",
                            description: "Afforai gives you the highest quality answers, and filters out any irrelevant information."
                        },
                        {
                            img: LandingPC19Img,
                            title: "Built in Comprehension Model",
                            description: "Our powerful comprehension model increases the power of our data retrieval."
                        },

                    ].map((card, i) => <Grid {...{ xs: 12, smm: 6, lg: 3 }} key={i}>
                        <Card sx={{ maxWidth: "100%" }}>
                            <CardActionArea>
                                <CardMedia
                                    component={"img"}
                                    image={card.img}
                                />
                                <CardContent sx={{ height: 125 }}>
                                    <Typography gutterBottom fontWeight={500} component="div">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {card.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    )}
                </Grid>
            </Typography>
            <Typography component={"section"} my={15} className="testimonial">
                <Typography component={"div"} className="text-center mt-5 d-flex justify-content-center align-items-center flex-column" >
                    <div className="d-flex justify-content-center">
                        <img className="col-9" src={ReviewsImg} alt="Product Hunt Review 4.9/5" />
                    </div>
                    <h2>
                        See what our users say
                    </h2>
                    <Typography component={"div"}>
                        Loved by thousands, all around the World
                    </Typography>
                </Typography>
                <Typography component={"div"} my={8} ><Testimonial /></Typography>
            </Typography>
            <Typography component={"section"} my={15} className="container-fluid">
                <Typography component={"div"} className="d-flex flex-column flex-md-row mb-5 gap-3 align-items-md-center">
                    <Typography component={"div"} className="d-flex flex-column align-items-start gap-2 col-12 col-md-6">
                        <button className="btn btn-violet" >My promise to you</button>
                        <h2>100% money back guaranteed if you are not satisfied</h2>
                        <Typography>We crafted Afforai with total belief in our ability to make a chatbot that is not only powerful and reliable, but able to maximise your satisfaction as a user. This is why we have implemented a money back guarantee if you find yourself not satisfied with the capabilities of Afforai.
                        </Typography>
                    </Typography>
                    <div className="col-md-6">
                        <img className="col-12" src={Laptop20Img} alt="laptop landing 20" />
                    </div>
                </Typography>
                <Typography component={"div"} mt={20} className="bg-lap16 text-center d-flex flex-column align-items-center" pb={18}>
                    <h2 className="text-center">Start saving time today!</h2>
                    <Typography component={"div"} className="my-4" >Join an ever-growing community, and get with Afforai started free of charge!</Typography>
                    <button className="btn btn-violet-fill text-white">Get Started for Free</button>
                </Typography>
            </Typography>
            <Typography component={"section"} my={15} className="FAQs container-fluid d-flex flex-column align-items-center justify-content-center">
                <Typography component={"div"} className="d-flex justify-content-center flex-column align-items-center">
                    <h2 className="text-center">FAQs</h2>
                    <Typography component={"div"} >
                        For more information, check out our
                        <Link to={url.external.helpCenter} target="_blank">Help
                            Center</Link>.
                    </Typography>
                </Typography>
                <Typography component={"div"} className="col-12 col-md-10 col-xl-8">
                    <FAQs />
                </Typography>
            </Typography>
        </Layout>
    </>
}