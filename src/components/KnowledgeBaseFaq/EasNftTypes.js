import React from "react";
import { Link } from "react-router-dom";

const EasNftTypes = ({page}) => {
  console.log(page)
  return (
    <div className="knowledge-base-faq-items row cpt-7">

    {
      page.map(res => 
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div className="knowledge-faq-item-card">
        <div className="knowledge-faq-item-header d-flex align-items-center justify-content-between">
          <div className="knowledge-faq-item-left d-flex align-item-center gap-4">
            <span>
              <img
                src="/images/knowledge-base/knowledge-file-icon.svg"
                alt=""
              />
            </span>
            <Link to='' className="faq-title-item">
              {res.page}
            </Link>
          </div>
          <div className="knowledge-faq-item-right">
            <span>{res.faq.length}</span>
          </div>
        </div>
        <div className="knowledge-faq-list-items mt-4">
          {res.faq.map((item, id) => {
            return (
              <div className="knowledge-faq-list-item" key={id}>
                <span>
                  {/* <img src={item.fileIcon} alt="" /> */}
                </span>
                <Link to={`/docs/${item.slug}`}>{item.question}</Link>
              </div>
            );
          })}
        </div>
        <Link to={""} className="knowledge-explore-more-btn">
          Explore more
        </Link>
      </div>
    </div>
        )
    }
    </div>
  );
};

export default EasNftTypes;