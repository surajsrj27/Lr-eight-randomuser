import React from 'react';
import { Card, CardBody, CardTitle, CardText} from 'reactstrap';
import { FaEnvelope, FaMapMarkedAlt, FaPhone} from 'react-icons/fa';

const MyCard = ({details}) => {

    const picture = details.picture?.large;
    const location = details.location?.city

    return (
        <Card>
            <CardBody className="text-center">
                <img height="150" width="150"
                className="rounded-circle img-thumbnail border-danger"
                src={picture}
                />
                <CardTitle className="text-primary">
                    <h1>
                        <span className="p-2">{details.name?.title}</span>
                        <span>{details.name?.first}</span>
                        <span>{details.name?.last}</span>
                    </h1>
                </CardTitle>
                <CardText>
                    <p>
                        <FaMapMarkedAlt />
                        <span className="pr-2 pl-1">{location}</span>
                    </p>
                    <FaEnvelope />
                    <span className="pr-2 pl-1">{details.email}</span>
                    <FaPhone />
                    <span className="pr-2 pl-1">{details.phone}</span>
                </CardText>
            </CardBody>
        </Card>
    );
}

export default MyCard;
    ;