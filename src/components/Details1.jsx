import React, { Fragment } from 'react'
import ColumnHeader from "./ColumnHeader";
import { BiCircle } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Card from "./Card";
import "./Details.css";
import { BiRadioCircle } from "react-icons/bi";
import { RiArrowGoBackLine } from "react-icons/ri";
import { GrInProgress } from "react-icons/gr";
import { MdCloudDone } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { CgProfile } from "react-icons/cg";


function Details({ data, order }) {

    let ticketsList = [...data.tickets];

    if (order === 'INC') {
        ticketsList.sort((a, b) => a.priority - b.priority);
    } else {
        ticketsList.sort((a, b) => b.priority - a.priority);
    }

    return (
        <Fragment>
            <div className='details-div'>
                {/* backlog */}
                <div className='column-div'>
                    <ColumnHeader Icon1={RiArrowGoBackLine} Icon2={AiOutlinePlus} Icon3={BiDotsHorizontalRounded} title={"Backlog"} number={data.tickets.filter((item) => item.status === "Backlog").length} />
                    <div className='cards'>
                        {ticketsList.filter((item) => item.status === "Backlog").map((i) => (
                            <div className="card">
                                <Card BiDotsHorizontalRounded={BiDotsHorizontalRounded} ProfileIcon={CgProfile} BiRadioCircle={BiRadioCircle} tagline={i.tag[0]} cam={i.id} title={i.title} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* todo */}
                <div className='column-div'>
                    <ColumnHeader Icon1={BiCircle} Icon2={AiOutlinePlus} Icon3={BiDotsHorizontalRounded} title={"Todo"} number={data.tickets.filter((item) => item.status === "Todo").length} />
                    <div className='cards'>
                        {ticketsList.filter((item) => item.status === "Todo").map((i) => (
                            <div className="card">
                                <Card BiDotsHorizontalRounded={BiDotsHorizontalRounded} ProfileIcon={CgProfile} BiRadioCircle={BiRadioCircle} tagline={i.tag[0]} cam={i.id} title={i.title} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* in progress */}
                <div className='column-div'>
                    <ColumnHeader Icon1={GrInProgress} Icon2={AiOutlinePlus} Icon3={BiDotsHorizontalRounded} title={"In Progress"} number={data.tickets.filter((item) => item.status === "In progress").length} />
                    <div className='cards'>
                        {ticketsList.filter((item) => item.status === "In progress").map((i) => (
                            <div className="card">
                                <Card BiDotsHorizontalRounded={BiDotsHorizontalRounded} ProfileIcon={CgProfile} BiRadioCircle={BiRadioCircle} tagline={i.tag[0]} cam={i.id} title={i.title} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* done */}
                <div className='column-div'>
                    <ColumnHeader Icon1={MdCloudDone} Icon2={AiOutlinePlus} Icon3={BiDotsHorizontalRounded} title={"Done"} number={data.tickets.filter((item) => item.status === "Done").length} />
                    <div className='cards'>
                        {ticketsList.filter((item) => item.status === "Done").map((i) => (
                            <div className="card">
                                <Card BiDotsHorizontalRounded={BiDotsHorizontalRounded} ProfileIcon={CgProfile} BiRadioCircle={BiRadioCircle} tagline={i.tag[0]} cam={i.id} title={i.title} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* canceled */}
                <div className='column-div'>
                    <ColumnHeader Icon1={MdOutlineCancel} Icon2={AiOutlinePlus} Icon3={BiDotsHorizontalRounded} title={"Canceled"} number={0} />
                </div>
            </div>

        </Fragment>
    )
}

export default Details