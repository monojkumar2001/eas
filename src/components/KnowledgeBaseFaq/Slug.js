import React,{useState,useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { BsEmojiSmile } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import EasBanner from "./EasBanner";
import SocialMediaShareItem from "../SocialMediaLink/SocialMediaShareItem";
import FaqHelpModel from "./FaqHelpModel";
import axios from "axios";

const FaqQuestionDetails = () => {
  const id = useParams();
  console.log("id", id);

  const [detail, setDetail] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
      axios.get(`api/faq/${id.id}`).then(res => {
        setDetail(res.data.data)
        setLoading(false);
      })
  }, [])
  
  if(loading){
    return '';
  }

  return (
    <>
      {/* ================= EAS Banner ================== */}

      <EasBanner title={detail.question} />

      <div className="faq-question-details-wrapper cpy-6">
        <div className="container">
          <div className="faq-question-con-wrapper">
            <div className="faq-question-details-content">
              <div className="faq-question-route mb-4 d-flex align-items-center gap-2">
                <Link to={"/"}>
                  {" "}
                  Home{" "}
                  <span>
                    <FaChevronRight />
                  </span>{" "}
                </Link>
                <Link to={"/docs"}>
                  Docs{" "}
                  <span>
                    <FaChevronRight />
                  </span>{" "}
                </Link>
                <Link className="faq-title">{detail.question}</Link>
              </div>
              <h1>{detail.question}</h1>
              <p>{detail.answer}</p>
            </div>
            <div className="faq-question-details-footer mt-5">
              <div className="faq-footer-item">
                <h5 className="faq-sub-question-dis">Was this helpful?</h5>
                <div className="faq-footer-emoji d-flex align-items-center gap-2">
                  <span>
                    <BsEmojiSmile />
                  </span>
                  <span>
                    <BsEmojiSmile />
                  </span>
                  <span>
                    <BsEmojiSmile />
                  </span>
                </div>
              </div>
              <div className="faq-social-media-share-item mt-5 d-flex align-items-center gap-3">
                <span className="faq-sub-question-dis">Share EAS Article:</span>
                <div className="faq-footer-item-social">
                  <SocialMediaShareItem />
                </div>
              </div>
              <div className="faq-help-item-con my-5 d-flex align-items-center justify-content-between">
                <div className="faq-help-left-item">
                  <FaqHelpModel />
                </div>
                <div className="faq-help-right-item">
                  <span>Updated on April 12, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FaqQuestionDetails;
