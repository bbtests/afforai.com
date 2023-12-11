import { Suspense } from "react";
import Loader from "./loader";


const Header = (): JSX.Element => {

    return <>
        <header></header>
    </>
}
const Footer = (): JSX.Element => {

    return <><footer></footer></>
}


export default function Default(): JSX.Element {

    return <>
        <Header />
        <Suspense fallback={<Loader />}>

        </Suspense>
        <Footer />
    </>
}