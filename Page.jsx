import React from "react";
import {createRoot} from "react-dom/client";
import { Header } from "./Header";
import { Footer } from "./Fotter";
import { Body } from "./Body";

const Page=()=>{


    return(
        <>

        <Header></Header>
        <Body></Body>
        <Footer></Footer>

        </>
    )
}

const Root = createRoot(document.getElementById("root"));
Root.render(<Page></Page>)
