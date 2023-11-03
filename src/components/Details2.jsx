import React, { Fragment } from 'react'
import ColumnHeader from "./ColumnHeader";
import { AiOutlinePlus } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Card from "./Card";
import "./Details.css";
import { BiRadioCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";


function Details({ data, order }) {

    let allActiveUsers = data.users.filter((user) => user.available === true);
    let ticketsList = [...data.tickets];
    if (order === "INC") {
        ticketsList = ticketsList.sort((a, b) => a.priority - b.priority);
    }
    else {
        ticketsList = ticketsList.sort((a, b) => b.priority - a.priority);
    }




    return (
        <Fragment>

            <div className='user-column-section'>

                {allActiveUsers.map((user) => (
                    <div className='column-div'>
                        <ColumnHeader Icon1={CgProfile} Icon2={AiOutlinePlus} Icon3={BiDotsHorizontalRounded} title={user.name} number={data.tickets.filter((item) => item.userId === user.id).length} />
                        <div className='cards'>
                            {ticketsList.filter((item) => item.userId === user.id).map((i) => (
                                <div className="card">
                                    <Card BiDotsHorizontalRounded={BiDotsHorizontalRounded} ProfileIcon={CgProfile} BiRadioCircle={BiRadioCircle} tagline={i.tag[0]} cam={i.id} title={i.title} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>





        </Fragment>
    )
}

export default Details