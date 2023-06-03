import React from "react";
import CardList from "./CardList";

const links= [
    {"name": "コマンドの書", "url": "/prog-polta/command"},
    {"name": "ブロックの書", "url": "/prog-polta/block"},
    {"name": "ファイルの書", "url": "/prog-polta/file"},
]

const Main = () => {
    return(
        <>
            <main className="container">
                <div className="row mt-5">
                    {links.map((one, i) => {
                        return(
                           <CardList one={one} key={`cardNO-${i}`}></CardList> 
                        );
                    })}
                </div>
            </main>
        </>
    );
}

export default Main;