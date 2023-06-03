import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Chapter from "../jsons/chapter.json";

const ChapterList = () => {
    const [theChater, setChapter] = useState({"title": "none", "list": []});

    useEffect(() => {
        switch(window.location.pathname){
            case "/prog-polta/command":
                setChapter(Chapter.command);
                break;
            case "/prog-polta/block":
                setChapter(Chapter.block);
                break;
            case "/prog-polta/file":
                setChapter(Chapter.file);
                break;
        }

    }, [theChater]);

    return(
        <div className="container mt-3 mb-3">
            <h2>{theChater.title}</h2>

            <div className="list-group mt-3">
                {theChater.list.map((one, i) => {
                    return(
                        <Link to={`${window.location.pathname}${one.url}`} className="list-group-item list-group-item-action text-success p-3" key={`chapter-${i}`}>{one.name}</Link>
                    );
                })}
            </div>
        </div>
    )
}

export default ChapterList;