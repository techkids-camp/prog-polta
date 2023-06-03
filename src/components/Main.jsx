import React from "react";
import CardList from "./CardList";

const links= [
    {"name": "コマンドの書", "url": "/command"},
    {"name": "ブロックの書", "url": "/block"},
    {"name": "ファイルの書", "url": "/file"},
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