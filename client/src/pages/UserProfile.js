import { useSelector } from "react-redux";
import Space from "../components/Space";
import Title from "../components/Title";
import config from "../config/userProfile";
import { Col, Row } from "react-bootstrap";
import IconGap from "../components/IconGap";
import { faCircleUser, faShieldHalved, faUserLock, faUserGear } from "@fortawesome/free-solid-svg-icons";
import lang from "../lang";
import { chr } from "../helpers";
import { Fragment } from "react";
import UpdatePassword from "../components/UpdatePassword";
import ChangeUsername from "../components/ChangeUsername";

function UserProfile() {
    const { user_profile } = useSelector(state => state.auth.payload);

    const data = [
        {
            icon: faUserGear,
            title: lang.inputs.id,
            data: user_profile.id
        },
        {
            icon: faCircleUser,
            title: lang.inputs.full_name,
            data: user_profile.full_name
        },
        {
            icon: faUserLock,
            title: lang.inputs.username,
            data: user_profile.username
        },
        {
            icon: faShieldHalved,
            title: lang.inputs.role,
            data: user_profile.role.name
        }
    ];

    return (
        <Fragment>
            <Title.CreationDate createdAt={user_profile.created_at}>{config.title}</Title.CreationDate>
            <Space>
                <Row className={chr(103, 45) + 3}>
                    {data.map((x, index) => {
                        return (
                            <Col lg={3} key={index}>
                                <IconGap.Box icon={x.icon} title={x.title}>{x.data}</IconGap.Box>
                            </Col>
                        )
                    })}
                </Row>
            </Space>
            <Row>
                <Col lg={6}>
                    <UpdatePassword />
                </Col>
                <Col>
                    <ChangeUsername />
                </Col>
            </Row>
            <Title.LastUpdate updatedAt={user_profile.updated_at} />
        </Fragment>
    );
}

export default UserProfile;
