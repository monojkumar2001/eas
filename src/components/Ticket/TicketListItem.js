import React from "react";
import { Link } from "react-router-dom";

const TicketListItem = ({tickets}) => {
  return (

    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Ticket ID</th>
            <th scope="col">Subject</th>
            <th scope="col">Ticket Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            tickets.map(item => 
              <tr key={item.id}>
          <td>
            <div className="ticket-id-item d-flex align-items-center gap-2">
              <img src="/images/dashboard/ticket-id.svg" alt="" />
              <span>#{item.trxId}</span>
            </div>
          </td>
          <td>{item.subject}</td>
          <td>
            <Link to={`/account/ticket/${item.trxId}`} className="ticket-pending-btn">
              {item.status}
            </Link>
          </td>
          <td>
            <Link to={`/account/ticket/${item.trxId}`} className="ticket-view-btn">
              View
            </Link>
          </td>
        </tr>
              
              )
          }
        
        </tbody>
      </table>
    </div>

    
  );
};

export default TicketListItem;
