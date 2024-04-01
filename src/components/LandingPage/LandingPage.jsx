import {Navigate, useLocation} from 'react-router-dom';
import {Card, CardGroup, Col, Row} from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const LandingPage = () => {

    const state = useLocation();

    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const provisionedApps = state.state.provisionedApps;
    const userName = state.state.name;

    const handleRedirect = (location) => {
        window.location.href = location;
    }
    const renderProvisionedApps = () => {
        return provisionedApps.map(app => {
            return (
                <>
                    <Row key={app.name} xs={1} md={2} className={"g-4"}>
                        &nbsp;
                        <Col xs={2} md={2}>
                            <Card onClick={() => handleRedirect(app.url)} style={{width: '10rem'}}>
                                <Card.Img variant={"top"} src={app.logo} style={{width: '50px', height:'32px', marginLeft: '25%', marginTop: '5%'}}/>
                                <Card.Body>
                                    <Card.Title>{app.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        &nbsp;
                    </Row>
                </>

            )
        })
    }

    if (!isAuthenticated) {
        console.log("Should not happen", isAuthenticated);
        // Redirect
        return <Navigate to={"/login"}/>
    } else {

        return (
            <>
                <div className={"container"}>
                    <h1>Welcome, {userName}</h1>
                    <CardGroup>
                        {renderProvisionedApps()}
                    </CardGroup>
                </div>

            </>
        );
    }
};

export default LandingPage;