import{Container,Col,Row} from "react-bootstrap"
import Form from"react-bootstrap/Form"
import LegendCard from "./LegendCard"
import {data} from "../../helpers/data"
const LegendContainer =()=>{
    return(
        <>
        <Form.Control type="search"placeholder="Search Legends" className="w-50 mx-auto my-2"/>
        <Container>
            <Row>
                <Col sm={1} md={3} lg={5}>
                    <LegendCard data={data} />
                </Col>
            </Row>

        </Container>
        </>
    )
}

export default LegendContainer;