import { Card } from "react-bootstrap";

const CardList = (props) => {
    return(
        <div className="col-4">
            <Card className="p-3 m-1 shadow">
                <Card.Body className="text-center">
                    <Card.Title className="fs-1 text-center">{props.one.name}</Card.Title>
                    <Card.Link href={props.one.url} className="btn btn-outline-success w-75 p-2 mt-2">クリック！</Card.Link>
                </Card.Body>
            </Card>
        </div>

    )
}

export default CardList;