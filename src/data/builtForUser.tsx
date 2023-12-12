import { Link } from "react-router-dom"
import { url } from "router/url"
import Landing6PCImg from "images/graphics/laptop-landing-6.png"
import Landing7PCImg from "images/graphics/laptop-landing-7.png"
import Landing8PCImg from "images/graphics/laptop-landing-8.png"
import Landing9PCImg from "images/graphics/laptop-landing-9.png"
import Landing10PCImg from "images/graphics/laptop-landing-10.png"


const builtForUser = [
    {
        img:  Landing6PCImg,
        title: "Cross Language Querying",
        isNew: true,
        description: "Afforai is able to translate your documents to more than 100 languages, meaning wherever you’re from, you can be assured we can help.",
        rows: 1,
        cols: 3,
    },
    {
        img: Landing7PCImg,
        title: "Multiple file types supported",
        description: "Afforai can extract data from a multitude of formats, including; PDF, URL, DOCX, PPTX & XLSX, as well as your own text & links from Websites. The possibilities are limitless!",
        rows: 1,
        cols: 4,
    },
    {
        img: Landing8PCImg,
        title: "Valuable Data Citation",
        isNew: true,
        description: "Afforai is able to show exactly where your data has been extracted from & highlight it for you, so you never loose your time validating information again.",
        rows: 1,
        cols: 4,
    },
    {
        img: Landing9PCImg,
        title: "Unbreakable Security",
        isNew: true,
        description: <>
            Afforai uses Azure Server & Azure OpenAI API. In other words, your data is more than safe with us. <Link to={url.security}>Learn more</Link>.,
        </>,
        rows: 2,
        cols: 3,
    },
    {
        img: Landing10PCImg,
        title: "Built in Document Viewer",
        description: "Never Switch tabs again. Afforai’s document viewer means that you can have your uploaded files right next to your chatbot, giving you the ability to search the file, and refer to it for data citations.",
        rows: 1,
        cols: 4,
    },
]

export default builtForUser