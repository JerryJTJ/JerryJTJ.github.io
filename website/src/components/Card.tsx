import React from "react";
import "./Card.css";

type cardType = "job" | "project";

interface cardProps {
    type: cardType;
    company?: string;
    role?: string;
    location?: string;
    date?: string;
    description?: string;
    image?: string;
}

const Card = (props: cardProps) => {
    return (
        <div className={"card"}>
            <div className={"cardRow"}>
                {props.type === "job" ? (
                    <div className={""}>
                        <img className={"cardImage"} src={props.image} alt={props.company} />
                    </div>
                ) : null}
                <div className={"cardContent"}>
                    {props.company ? <p className="company">{props.company}</p> : null}
                    {props.role ? <p className="role">{props.role}</p> : null}
                    {props.description ? <p className="description">{props.description}</p> : null}
                </div>
                <div className={"sideContainer"}>
                    {props.date ? <p className={"sideText"}>{props.date}</p> : null}
                    {props.location ? (
                        <p className={"sideText"}>{props.location}</p>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Card;
