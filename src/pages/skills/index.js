import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { skillsData } from "../../content_option";

export const Skills = () => {
    return (
        <HelmetProvider>
            <Container className="Skills-header">
                <Helmet>
                    <meta charSet="utf-8" />
                    {/* Remove the meta tags */}
                </Helmet>
                <Row className="mb-5 mt-3 pt-md-3">
                    <Col lg="8">
                        <h1 className="display-4 mb-4">Skills</h1>
                        <hr className="t_border my-4 ml-0 text-left" />
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="12">
                        <h2 className="skilldescrip">{skillsData.intro}</h2>
                    </Col>
                </Row>
                {skillsData.skills.map((skillGroup, index) => (
                    <Row key={index} className="sec_sp">
                        <Col lg="5">
                            <h3 className="color_sec py-4">{skillGroup.title}</h3>
                        </Col>
                        <Col lg="7" className="d-flex align-items-center">
                            <div>
                                <ul className="skill-list">
                                    {skillGroup.items.map((skill, i) => (
                                        <li key={i}>
                                            <img src={skill.icon} alt={skill.title} className="skill-icon" />
                                            {skill.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                ))}
            </Container>
        </HelmetProvider>
    );
};
