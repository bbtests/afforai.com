import Layout from "layouts/Default";
import { ImageList, ImageListItem, Typography, Unstable_Grid2 as Grid, Chip } from "@mui/material"
import { Link } from "react-router-dom"
import { url } from "router/url";
import Appsumo from "images/icons/appsumo.png"
import Laptop20Img from "images/graphics/laptop-landing-20.png"
import ReviewsImg from "images/graphics/ph-review.webp"
import LandingPC1Img from "images/graphics/laptop-landing-1.png"
import LandingPC4Img from "images/graphics/laptop-landing-4.png"
import LandingPC5Img from "images/graphics/laptop-landing-5.png"
import LandingPC11Img from "images/graphics/laptop-landing-11.png"
import Landing11Img from "images/graphics/mobile-landing-11.png"
import Landing12Img from "images/graphics/mobile-landing-12.png"
import Landing13Img from "images/graphics/mobile-landing-13.png"
import Landing14Img from "images/graphics/mobile-landing-14.png"
import Landing15Img from "images/graphics/mobile-landing-15.png"
import builtForUser from "data/builtForUser";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';


export default function Home(): JSX.Element {

    return <>
        <Layout>
            <section className="container-fluid d-flex flex-column">
                <Typography component={"div"} className="mt-5 text-center" >
                    <Typography component={"div"}>
                        <Chip sx={{}} label={<div className="d-flex justify-content-center align-items-center">
                            <img src={Appsumo} alt="Appsumo" />
                            <span>Now on AppSumo</span>
                            <Link to={url.external.lifetime_access} className="btn">Get Lifetime Deal</Link>
                        </div>} />
                    </Typography>
                    <Typography component={"h2"} >
                        Your second brain for maximizing productivity
                    </Typography>
                    <Typography component={"div"} className="mb-3" >
                        Afforai is an AI chatbot that searches, summarizes, and translates info from multiple sources to produce trustworthy research. Feed lengthy research documents to stacks of dry compliance requirements and extract the key findings you need.
                    </Typography>
                    <Typography component={"div"} className="mb-5" >
                        <Typography component={"div"} className="mb-5" >

                        </Typography>
                        <Typography component={"div"} className="mb-5 gap-3" >
                            <Link to={url.signup} className="btn btn-violet-fill text-white">Try for free</Link>
                            <Link to={url.pricing} className="btn ">View Pricing</Link>
                        </Typography>
                    </Typography>
                </Typography>
                <img src={LandingPC1Img} alt="Welcome" />
            </section>
            <section className="container-fluid d-flex">
                <Typography component={"div"} className="mt-5" >
                    <button className="btn btn-violet">Most versatile</button>
                    <Typography component={"h2"} className="" >
                        Say goodbye to long, tiresome documents
                    </Typography>
                    <Typography component={"div"} className="mb-5" >
                        Afforai seamlessly translates documents, files, spreadsheets & websites, filtering out what you don’t need & answering your specific questions within seconds.
                    </Typography>
                    <Typography component={"div"} className="gap-2">
                        <ul> {[
                            "A whip smart research assistant",
                            "We speak every language",
                            "Reliable data citation for answers",
                            "Fort-Knox level data security",
                        ].map((item: string, i: number) => <li key={i} className="d-flex align-items-center gap-2">
                            <CheckCircleOutlinedIcon color={"success"} />
                            <span>{item}</span>
                        </li>)}
                        </ul>
                    </Typography>
                </Typography>
                <img src={LandingPC4Img} alt="Afforai masters the documents you upload" />
            </section>
            <section className="container-fluid d-flex flex-column">
                <Typography component={"div"} className="mt-5 text-center" >
                    <button className="btn btn-violet">10x your productivity</button>
                    <Typography component={"h2"} >
                        Save yourself from stress & streamline your workflow
                    </Typography>
                    <Typography component={"div"} className="mb-5" >
                        The average worker spends 9 hours per week looking through & gathering information from thick stacks of documents. With Afforai, you can save yourself 8 hours per week (plus a lot of headaches).
                    </Typography>
                </Typography>
                <img src={LandingPC5Img} alt="productivity" />
            </section>
            <section className="container-fluid d-flex flex-column">
                <Typography component={"div"} className="mt-5 text-center" >
                    <button className="btn btn-violet">Why choose us?</button>
                    <Typography component={"h2"} >
                        Built for the user
                    </Typography>
                    <Typography component={"div"} className="mb-5" >
                        Afforai is where exceptional customer focus meets exceptional technology.
                    </Typography>
                </Typography>
                <Typography component={"div"} sx={{ mt: 5 }}>
                    <ImageList className="w-100" sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
                        {builtForUser.map((item) => (
                            <ImageListItem key={item.img[0]}>
                                <img
                                    srcSet={`${item.img[1]}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img[0]}?w=161&fit=crop&auto=format`}
                                    alt={item.img[0]}
                                    loading="lazy"
                                />
                                {item.titleComponent}
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Typography>
            </section>
            <section className="container-fluid d-flex">
                <Typography component={"div"} className="mt-5" >
                    <button className="btn btn-violet">Most versatile</button>
                    <Typography component={"h2"} className="" >
                        Create multiple chatbots for different purposes
                    </Typography>
                    <Typography component={"div"} className="mb-5" >
                        Legal documents? Summarising a book? Extracting data from a website? We allow you to create multiple chatbots at one time, so you can use Afforai for a whole range of purposes.
                    </Typography>
                    <Typography className="gap-2">
                        <Link to={url.signup} className="btn btn-violet-fill text-white">Get Started</Link>
                        <Link to={url.pricing} className="btn ">View Pricing</Link>
                    </Typography>
                </Typography>
                <img src={LandingPC11Img} alt="Afforai masters the documents you upload" />
            </section>
            <section className="container-fluid d-flex">
                <img src={Landing12Img} alt="mobile landing 14" />
                <Typography component={"div"} className="mt-5" >
                    <button className="btn btn-violet">Different Modes Available</button>
                    <Typography component={"h2"} className="" >
                        Customize your assistant with a range of different modes
                    </Typography>
                    <Typography component={"div"} className="" >
                        <Typography component={"div"} className="" >
                            Further power your questions with additional modes. Afforai allows you to switch between three different modes, each which have unique ways of utilising our AI tools to answer your question(s).
                            <Typography component={"div"} className="" >
                                <span>Fast Mode (default)</span>
                                <button>1 credit</button>
                                <Typography component={"div"} className="" >
                                    Quickly ask a question and receive an answer from the AI. This mode is most suited for applications that require only a small part of the documents to be scanned (ex. FAQ Chatbot, Search).
                                </Typography>
                            </Typography>
                            <Typography component={"div"} className="" >
                                <span>Powerful Mode</span>
                                <button>4 credit</button>
                                <Typography component={"div"} className="" >
                                    Quickly ask a question and receive an answer from the AI. This mode is most suited for applications that require only a small part of the documents to be scanned (ex. FAQ Chatbot, Search).
                                </Typography>
                            </Typography>
                            <Typography component={"div"} className="" >
                                <span>Google Mode</span>
                                <button>5 credit</button>
                                <Typography component={"div"} className="" >
                                    Quickly ask a question and receive an answer from the AI. This mode is most suited for applications that require only a small part of the documents to be scanned (ex. FAQ Chatbot, Search).
                                </Typography>
                            </Typography>
                        </Typography>
                    </Typography>
                </Typography>
            </section>
            <section className="container-fluid d-flex">
                <Typography component={"div"} className="mt-5" >
                    <button className="btn btn-violet">Multiple Language Supported</button>
                    <Typography component={"h2"} className="" >
                        Regardless of where you are from, Afforai is for you
                    </Typography>
                    <Typography component={"div"} className="mb-5" >
                        We support more than 100 Languages, meaning you can seamlessly use our services regardless of where you are from. Our Cross Language Querying feature also allows flawless translation of documents.
                    </Typography>
                </Typography>
                <img src={Landing13Img} alt="mobile landing 14" />
            </section>
            <section className="container-fluid d-flex">
                <img src={Landing14Img} alt="mobile landing 14" />
                <Typography component={"div"} className="mt-5" >
                    <button className="btn btn-violet">Get more out of your files</button>
                    <Typography component={"h2"} className="" >
                        File Wizard - a game changing new feature
                    </Typography>
                    <Typography component={"div"} className="mb-5" >
                        Convert your files with less effort than ever. Afforai’s File Wizard feature allows you to transform your files, in limitless different ways. We can translate, summarize, or explain your upload in no time.
                    </Typography>
                </Typography>
            </section>
            <section className="container-fluid">
                <Typography component={"div"} className="text-center mt-5" >
                    <button className="btn btn-violet">Seamless Integrations - Coming Soon</button>
                    <Typography component={"h2"}>
                        Upload Files directly from Google Drive, One Drive & Dropbox
                    </Typography>
                    <Typography component={"div"} className="mb-5" >
                        Afforai allows you to upload files directly from Google Drive, One Drive & Dropbox, meaning your experience will be smooth sailing regardless of your preferred
                    </Typography>
                    <img src={Landing15Img} alt="mobile landing 15" />
                </Typography>
            </section>
            <section className="container-fluid">
                <Typography component={"div"} className="text-center mt-5" >
                    <Typography component={"h2"} >
                        Unquestionable accuracy & reliability
                    </Typography>
                    <Typography component={"div"}>
                        We pride ourselves on the quality of our chatbot’s responses, and go the extra mile to ensure the accuracy & reliability of our answers.
                    </Typography>
                </Typography>
                <Grid className="swiper"></Grid>
            </section>
            <section id="testimonial" className="container-fluid">
                <Typography component={"div"} className="text-center mt-5" >
                    <img src={ReviewsImg} alt="Product Hunt Review 4.9/5" />
                    <Typography component={"h2"}>
                        See what our users say
                    </Typography>
                    <Typography component={"div"}>
                        Loved by thousands, all around the World
                    </Typography>
                </Typography>
                <Grid className="swiper"></Grid>
            </section>
            <section id="founders" className="container-fluid my-5">
                <Typography component={"div"} className="d-flex mb-5">
                    <Typography component={"div"} className="d-flex flex-column gap-2">
                        <button>My promise to you</button>
                        <Typography component={"h2"}>100% money back guaranteed if you are not satisfied</Typography>
                        <Typography>We crafted Afforai with total belief in our ability to make a chatbot that is not only powerful and reliable, but able to maximise your satisfaction as a user. This is why we have implemented a money back guarantee if you find yourself not satisfied with the capabilities of Afforai.</Typography>
                    </Typography>
                    <img src={Laptop20Img} alt="laptop landing 20" />
                </Typography>
                <Typography component={"div"} className="text-center mt-5" >
                    <Typography component={"h2"}>Start saving time today!</Typography>
                    <Typography component={"div"} >Join an ever-growing community, and get with Afforai started free of charge!</Typography>
                    <button className="btn btn-violet-fill text-white">Get Started for Free</button>
                </Typography>
            </section>
            <section id="FAQs" className="container-fluid my-5">
                <Typography component={"h2"} className="text-center">FAQs</Typography>
                <Typography component={"div"} >
                    For more information, check out our
                    <Link to={url.external.helpCenter} target="_blank">Help
                        Center</Link>.
                </Typography>
                <Typography component={"div"}></Typography>
            </section>
        </Layout>
    </>
}