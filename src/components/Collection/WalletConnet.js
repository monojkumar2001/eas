import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Removed useLocation as it's not used
import { useWeb3React } from "@web3-react/core";
import { connectors } from "../../wallet/connectors";
import {ethers} from "ethers"

const WalletConnet = ({ opt, walletConnect ,setWalletConnect,toggleHandleWallet}) => {
  
  const {
    library,
    account,
    activate,
  } = useWeb3React();
  const navigate = useNavigate();
  const [option, setOption] = useState(0);
  console.log("option : ", option);




  const [items, setItems] = useState({
    nft: "",
    category: "",
    subCategory: "",
    email: "",
    address: "",
  });

  const message = `Welcome to OpenSea! Click to sign in and accept the OpenSea Terms of Service (https://opensea.io/tos) and Privacy Policy (https://opensea.io/privacy). This request will not trigger a blockchain transaction or cost any gas fees. Your authentication status will reset after 24 hours.`;

  const setProvider = (type) => {
    localStorage.setItem("provider", type);
  };
  

  const handleWalletActivation = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((result) => {
        handleSign(new ethers.providers.Web3Provider(window.ethereum));
      })
      .catch((error) => {
        console.log("Could not detect Account");
      });
      
      
    } catch (error) {
      if (error.code === "USER_DENIED_MESSAGE_SIGNATURE") {
        console.log("User rejected the signing request.");
      } else {
        console.error("Error signing message:", error);
      }
    }
  };

  const handleSign = async (provider) => {
    try {
      const signer = await provider.getSigner();
      const signature = await signer.signMessage(message);
      const address = await signer.getAddress();
      verify(message, signature, address);
    } catch (e) {
      console.log(e);
    }
  };

  
  const verify = (msg, sig, add)  => {
    if (!library) return;
    try {
      const actualAddress = ethers.utils.verifyMessage(msg, sig);
      console.log("Actual Address:", actualAddress); // Log the actual address for debugging

      console.log("Option in verify:", option);

      if (actualAddress !== add) {
        Swal.fire("error", "Not a Valid Address", "decline");
      } else {
        if (localStorage.getItem("submitOption")) {
          submitForm(add);
        } else {
          axios.get(`api/verifyUser/${add}`).then((res) => {
            console.log("Verification response:", res.data); // Log the verification response
            Swal.fire("success", res.data.message, "success");
          });
          localStorage.setItem("user_id", add);
          window.location.reload();
        }
      }
    } catch (e) {
      console.log("Error in verify:", e);
    }
  };

  const submitForm = () => {
    let formData = new FormData();
    formData.append("nfts", localStorage.getItem("nfts"));
    formData.append("category", localStorage.getItem("category"));
    formData.append("subCategory", localStorage.getItem("sub-category"));
    formData.append("email", localStorage.getItem("email"));
    formData.append("address", account);
    axios.post("/api/nft", formData).then((res) => {
      if (res.data.status === 200) {
        localStorage.setItem("user_id", account);
        var itemsToRemove = [
          "nfts",
          "email",
          "category",
          "sub-category",
          "submitOption",
        ];
        itemsToRemove.forEach(function (item) {
          localStorage.removeItem(item);
        });
        Swal.fire("success", res.data.message, "success");
        navigate("/account/my-nft");
        window.location.reload();
      } else {
        console.log(res.data.message);
      }
    });
  };

  const handleMetamask = async () => {
    console.log("Handling MetaMask connection...");
    await activate(connectors.injected);
    setProvider("injected");
    toggleHandleWallet()
    // await handleWalletActivation();
  };

  const handleCoinBase = async () => {
    console.log("Handling Coinbase Wallet connection...");
    await activate(connectors.coinbaseWallet)
    
    setProvider("coinbaseWallet");
    toggleHandleWallet()
    await handleWalletActivation();
  };

  useEffect(() => {
    if (opt == 2) {
      localStorage.setItem("submitOption", 2);
    }
  }, []);

  useEffect(() => {
  const provider =  localStorage.getItem("provider")
    if (provider){ activate(connectors[provider])};
    console.log(provider)
  }, []);



 
  return (
    <>
      {walletConnect && (
        <div className="wallet_model">
          <div className="overlay2"></div>
          <div className="modal-content wallet-connect-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Connect to your favourite CryptoWallet
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={toggleHandleWallet}
              ></button>
            </div>
            <div className="modal-body" >
              <div className="wallet-content-wrapper d-flex flex-column gap-3">
                <button
                  onClick={handleMetamask}
                  className="connect-wallet-item d-flex align-items-center flex-column gap-2 justify-content-center"
                >
                  <div className="wallet-img">
                    <LazyLoadImage src="/images/header/metamask.png" />
                  </div>
                  <h4>Metamask</h4>
                  <span>Connect to your Metamask</span>
                </button>
                <button
                  onClick={() => {
                    handleCoinBase();
                    setProvider("coinbaseWallet");
                  }}
                  className="connect-wallet-item d-flex align-items-center flex-column gap-2 justify-content-center"
                >
                  <div className="wallet-img">
                    <LazyLoadImage src="/images/header/coinbase.png" />
                  </div>
                  <h4>Coinbase Wallet</h4>
                  <span>Connect to your Coinbase Wallet</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default WalletConnet;
