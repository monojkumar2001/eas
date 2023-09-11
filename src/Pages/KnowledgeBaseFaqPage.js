import React,{useState,useEffect} from "react";
import "../Style/knowledgeBase.css";
import EasNftTypes from "../components/KnowledgeBaseFaq/EasNftTypes";
import EasBanner from "../components/KnowledgeBaseFaq/EasBanner";
import axios from "axios";
import Loading from "../components/Loading/Loading";

function KnowledgeBaseFaq() {

  const [page, setPage] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      axios.get('api/page').then(res => {
        setPage(res.data.data)
        setLoading(false)
      })
  }, [])
  
if(loading){
  return (
    <Loading/>
  );
}
  return (
    <>
      {/* ================== Knowledge Base Banner section =================== */}
    <EasBanner title="EAS Knowledge Base"/>
      {/* =================== KnowLedge Base Faq =================== */}
      <div className="knowledge-base-faq cpy-6">
        <div className="container">
          <div className="knowledge-base-faq-wrapper" data-aos="fade-up"
     data-aos-duration="3000">
            <div className="knowledge-base-search-item">
              <h4>Welcome to where the learning happens</h4>
              <div className="knowledge-base-search-input-fluid mt-4 d-flex align-items-center gap-3">
                <span>
                  <img src="/images/knowledge-base/search-icon.svg" alt="" />
                </span>
                <input type="text" placeholder="Search..." />
              </div>
            </div>
            

                {
                    page && page.length > 0 ? <EasNftTypes page={page}/> : ''
                
                }

          </div>
        </div>
      </div>
    </>
  );
}

export default KnowledgeBaseFaq;
