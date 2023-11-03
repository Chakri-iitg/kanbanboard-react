import React, { Fragment } from 'react'
import ColumnHeader from "./ColumnHeader";
import { AiOutlinePlus } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Card from "./Card";
import "./Details.css";
import { BiRadioCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { TbUrgent } from "react-icons/tb";
import { PiWifiHighBold } from "react-icons/pi";
import { PiWifiMediumBold } from "react-icons/pi";
import { PiWifiLowBold } from "react-icons/pi";

function Details({ data }) {

    let priorityArray = [...data.tickets];
    priorityArray = priorityArray.sort((a, b) => a.priority - b.priority);



    return (
        <Fragment>
            <div className='details-div'>
                {/* backlog */}
                <div className='column-div'>
                    <ColumnHeader Icon1={BiDotsHorizontalRounded} Icon2={AiOutlinePlus} Icon3={BiDotsHorizontalRounded} title={"No Priority"} number={priorityArray.filter((item) => item.priority === 0).length} />
                    <div className='cards'>
                        {priorityArray.filter((item) => item.priority === 0).map((i) => (
                            <div className="card">
                                <Card BiDotsHorizontalRounded={BiDotsHorizontalRounded} ProfileIcon={CgProfile} BiRadioCircle={BiRadioCircle} tagline={i.tag[0]} cam={i.id} title={i.title} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* todo */}
                <div className='column-div'>
                    <ColumnHeader Icon1={TbUrgent} Icon2={AiOutlinePlus} Icon3={BiDotsHorizontalRounded} title={"Urgent"} number={priorityArray.filter((item) => item.priority === 4).length} />
                    <div className='cards'>
                        {priorityArray.filter((item) => item.priority === 4).map((i) => (
                            <div className="card">
                                <Card BiDotsHorizontalRounded={BiDotsHorizontalRounded} ProfileIcon={CgProfile} BiRadioCircle={BiRadioCircle} tagline={i.tag[0]} cam={i.id} title={i.title} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* in progress */}
                <div className='column-div'>
                    <ColumnHeader Icon1={PiWifiHighBold} Icon2={AiOutlinePlus} Icon3={BiDotsHorizontalRounded} title={"High"} number={priorityArray.filter((item) => item.priority === 3).length} />
                    <div className='cards'>
                        {priorityArray.filter((item) => item.priority === 3).map((i) => (
                            <div className="card">
                                <Card BiDotsHorizontalRounded={BiDotsHorizontalRounded} ProfileIcon={CgProfile} BiRadioCircle={BiRadioCircle} tagline={i.tag[0]} cam={i.id} title={i.title} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* done */}
                <div className='column-div'>
                    <ColumnHeader Icon1={PiWifiMediumBold} Icon2={AiOutlinePlus} Icon3={BiDotsHorizontalRounded} title={"Medium"} number={priorityArray.filter((item) => item.priority === 2).length} />
                    <div className='cards'>
                        {priorityArray.filter((item) => item.priority === 2).map((i) => (
                            <div className="card">
                                <Card BiDotsHorizontalRounded={BiDotsHorizontalRounded} ProfileIcon={CgProfile} BiRadioCircle={BiRadioCircle} tagline={i.tag[0]} cam={i.id} title={i.title} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* canceled */}
                <div className='column-div'>
                    <ColumnHeader Icon1={PiWifiLowBold} Icon2={AiOutlinePlus} Icon3={BiDotsHorizontalRounded} title={"Low"} number={priorityArray.filter((item) => item.priority === 1).length} />
                    <div className='cards'>
                        {priorityArray.filter((item) => item.priority === 1).map((i) => (
                            <div className="card">
                                <Card BiDotsHorizontalRounded={BiDotsHorizontalRounded} ProfileIcon={CgProfile} BiRadioCircle={BiRadioCircle} tagline={i.tag[0]} cam={i.id} title={i.title} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Details