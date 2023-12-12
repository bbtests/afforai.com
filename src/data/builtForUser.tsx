import { Chip, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { url } from "router/url"
import Landing6PCImg from "images/graphics/laptop-landing-6.png"
import Landing7PCImg from "images/graphics/laptop-landing-7.png"
import Landing8PCImg from "images/graphics/laptop-landing-8.png"
import Landing9PCImg from "images/graphics/laptop-landing-9.png"
import Landing10PCImg from "images/graphics/laptop-landing-10.png"
import Landing6Img from "images/graphics/mobile-landing-6.png"
import Landing7Img from "images/graphics/mobile-landing-7.png"
import Landing8Img from "images/graphics/mobile-landing-8.png"
import Landing9Img from "images/graphics/mobile-landing-9.png"
import Landing10Img from "images/graphics/mobile-landing-10.png"


const builtForUser = [
    {
        img: [Landing6Img, Landing6PCImg],
        titleComponent: <Typography component={"div"}>
            <Typography component={"h2"}>Cross Language Querying</Typography>
            <Chip label="NEW" />
            <p>
                Afforai is able to translate your documents to more than 100 languages, meaning wherever you’re from, you can be assured we can help.
            </p>
        </Typography>,
    },
    {
        img: [Landing7Img, Landing7PCImg],
        titleComponent: <Typography component={"div"}>
            <Typography component={"h2"}>Multiple file types supported</Typography>
            <p>
                Afforai can extract data from a multitude of formats, including; PDF, URL, DOCX, PPTX & XLSX, as well as your own text & links from Websites. The possibilities are limitless!
            </p>
        </Typography>,
    },
    {
        img: [Landing8Img, Landing8PCImg],
        titleComponent: <Typography component={"div"}>
            <Typography component={"h2"}>Valuable Data Citation</Typography>
            <Chip label="NEW" />
            <p>
                Afforai is able to show exactly where your data has been extracted from & highlight it for you, so you never loose your time validating information again.
            </p>
        </Typography>,
    },
    {
        img: [Landing9Img, Landing9PCImg],
        titleComponent: <Typography component={"div"}>
            <Typography component={"h2"}>Built in Document Viewer</Typography>
            <p>
                Never Switch tabs again. Afforai’s document viewer means that you can have your uploaded files right next to your chatbot, giving you the ability to search the file, and refer to it for data citations.
            </p>
        </Typography>,
    },
    {
        img: [Landing10Img, Landing10PCImg],
        titleComponent: <Typography component={"div"}>
            <Typography component={"h2"}>Unbreakable Security</Typography>
            <Chip label="NEW" />
            <p>
                Afforai uses Azure Server & Azure OpenAI API. In other words, your data is more than safe with us. <Link to={url.security}>Learn more</Link>.
            </p>
        </Typography>,
    },
]

export default builtForUser