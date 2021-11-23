import { Row, Col, Media, Image } from 'react-bootstrap';

const AuthorIntro = () =>
    <Row>
        <Col md="8">
        {/* AUTHOR INTRO STARTS */}
        <Media className="mb-4 admin-intro">
            <Image
            roundedCircle
            width={64}
            height={64}
            className="mr-3"
            src="https://avatars.githubusercontent.com/JannickPepe"
            alt="Generic placeholder"
            />
            <Media.Body>
            <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
            <p className="welcome-text">
            My name is Jannick Pedersen and I do paid Udeme courses here and there.
            </p>
            </Media.Body>
        </Media>
        {/* AUTHOR INTRO ENDS */}
        </Col>
    </Row>

export default AuthorIntro;