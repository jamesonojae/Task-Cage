import React from 'react';
import './TradeContent.css';

const TradeContent = () => {
  return (
      <div className="sub-header">
        <div className="firstLayout">
          <div className="row">
            <div className="col-md-6 subHeaderStyle">
              Coinmena Trading for Every one
              <p className="smallText">
                Deployment long tail monetization strategy equity basic of conversion.
                Supply chain freemium investor long tail agile development prototype validation influencer.
              </p>
              <div className="row">
                {/*<div className="col-md-6">*/}
                {/*  <button className="btn btnColor">Join Our Trading PlatForm</button>*/}
                {/*</div>*/}


              </div>
            </div>
            <div className="col-md-6">
              <img src='/assets/images/bitcoin-image2.png' alt='' />
            </div>

            <div className="col-md-4"/>
            <div className="col-md-4 sectionStyle">
              <div className="card cardStyle">
                <div className="card-body">

                      <div className="container">
                        <form action="">
                          <div className="row">
                            <div className="col-md-6">


                              <select name="cars" id="cars">
                                <option value="USDC">USDC</option>
                                <option value="NGN">NGN</option>
                                <option value="YEN">YEN</option>
                                <option value="EURO">EURO</option>
                              </select>
                            </div>
                            <div className="col-md-6">
                              <input  type="text" id="firstValue" name="firstValue" placeholder="0" />
                            </div>
                            {/*<br/>*/}
                            {/*<button   className="btn " style={{width:"70px",height:"70px",borderRadius:"50px"}}><i className="fa-solid fa-arrows-rotate" /> </button>*/}
                            {/*<br/>*/}
                            <div className="col-md-6">
                              <select name="cars" id="cars">
                                <option value="USDC">USDC</option>
                                <option value="NGN">NGN</option>
                                <option value="YEN">YEN</option>
                                <option value="EURO">EURO</option>
                              </select>
                            </div>

                            <div className="col-md-6">

                              <input  type="text" id="secondValue" name="secondValue" placeholder="0" />

                            </div>

                          </div>

                          <input className="btn btnColor " type="submit" value="Continue to Trade"  />
                        </form>
                      </div>

                </div>
              </div>
            </div>
            <div className="col-md-4"/>

          </div>
        </div>
        <div className="secondLayout">hi
        </div>
      </div>
  );
};
export default TradeContent;