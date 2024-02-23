import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { marked } from "marked";
import createElementFromHTML from "./toBootstrap";
import "./Ajust.scss"

const Discription = () => {
    const [insertHtml, setHtml] = useState("");

    const {id} = useParams();

    useEffect(() => {
        fetch(`${window.location.origin}/prog-polta/mds/${id}.md`)
            .then((res) => {
                return res.text()
            })
            .then((md) => {
                const htmlStr = marked(md);
                const bootstrapHTML = createElementFromHTML(htmlStr);
                setHtml(bootstrapHTML.outerHTML);
            })
        
    }, [id]);

    return(
        <div className="m-3" dangerouslySetInnerHTML={{"__html": insertHtml}}></div>
        
    );
}

export default Discription;