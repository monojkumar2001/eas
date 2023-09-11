import React, { useEffect, useState } from "react";
import TicketChatBox from "./TicketChatBox";
import TicketDetailsItem from "./TicketDetailsItem";
import { ColorRing } from 'react-loader-spinner'
import axios from "axios";
import {useParams } from "react-router-dom";
import Loading2 from "../Loading/Loading2";
 
const TicketMessages = () => {
  const id = useParams();
  const [loading, setLoading] = useState(true);
    const [ticketData, setTicketData] = useState({});
    
    useEffect(() => {
         axios.get(`api/ticket/${id.id}`).then(res => {
            setTicketData(res.data.data)
            setLoading(false);
            
          })
    }, [id])

    console.log(ticketData)
  
    if(loading){
      return <Loading2/>;
    }
  
    // if(loading){
    //   return <ColorRing
    //   visible={true}
    //   height="40"
    //   width="40"
    //   ariaLabel="blocks-loading"
    //   wrapperStyle={{}}
    //   wrapperClass="blocks-wrapper"
    //   colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    // />;
    // }
  return (
    <>
      <div className="content-eas-nft-wrapper">
        <div className="ticket-messages">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              {
                
                <TicketChatBox ticket={ticketData}/>
               

              }
            </div>
            <div className="col-lg-4 col-md-12">
                <TicketDetailsItem ticket={ticketData}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketMessages;
