import React from "react";


const TicketNewModel = ({subject,serchHandle,handleOption,inputValue,handleInput,submitForm,actionModel,showModel}) => {

  return (
    <>
    <div className="status-con-item w-100 d-flex align-items-end gap-3">
      <div className="tickets-btn-1 ">
        <span className="tickets-status">Status : </span>
        <select className="form-select py-2 mt-3" aria-label="Default select example" onChange={handleOption}>
            <option value="any">Any</option>
            <option style={{ padding: "20px" }} value="Pending">
              Pending
            </option>
            <option style={{ padding: "20px" }} value="Awaiting your reply">
              Awaiting your reply
            </option>
            <option style={{ padding: "20px" }} value="Solved">
              Solved
            </option>
          </select>
      </div>
      <button
        type="button"
        className="create-ticket-btn custom-btn"
        onClick={actionModel}
      >
        Create New Ticket
      </button>
    </div>
      
      {/* <!-- Create Ticket Modal --> */}
      {showModel && (
      <div className="ticket-model">
      <div className="overlay3"></div>
      <div className="new-ticket-content ticket-model-contentss">
        <button className="close-btn" onClick={actionModel}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
              fill="white"
            />
          </svg>
        </button>
    <form onSubmit={submitForm} encType="multipart/form-data">
        <div className="new-ticket-content-list">
          <h3>Open a New Ticket</h3>
        </div>
        
        <div className="new-ticket-content-list mt-3">
          <select
            name="subject"
            className="form-select"
            aria-label="Default select example"
            onChange={handleInput}
            value={inputValue.subject}
            required
          >
            <option>select a subject</option>
            {
              subject.map(res => {
                return (
                  <option key={res.id} style={{ padding: "20px" }} value={res.subject}>
                  {res.subject}
                </option>
                )
              })
            }
          </select>
          <small style={{ color: "red" }}>
            {inputValue.error_log.subject}
          </small>
        </div>
        <div className="new-ticket-content-text-area new-ticket-content-list">
          <textarea
            name="message"
            onChange={handleInput}
            value={inputValue.message}
            cols="30"
            rows="8"
            placeholder="Type Your Message....."
            style={{ marginTop:'10px', marginBottom:'10px' }}
            required
          ></textarea>
          <small style={{ color: "red" }}>
            {inputValue.error_log.message}
          </small>
        </div>
        <div className="new-ticket-content-list">
          <span className="attachment-item">Attachment (Optional)</span>
          <input type="file" onChange={handleInput} name="file" style={{ marginTop:'10px', marginBottom:'10px' }}/>
        </div>
        <div className="new-ticket-content-list">
          <button type="submit" className="new-ticket-btn" style={{ marginTop:'10px', marginBottom:'10px' }}>MESSAGE NOW</button>
        </div>
    </form>
      </div>
    </div>
      )}
    </>
  );
};

export default TicketNewModel;
