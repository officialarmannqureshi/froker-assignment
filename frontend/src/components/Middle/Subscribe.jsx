import React from "react";

const Subscribe = () => {
  return (
    <div style={{ textAlign: "center" }} className="subscribe-main">
      <div className="parentletter">
        <div className="newsletter">
          <div className="letterimg">
            <img
              src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1706767740/Frokerassets/OBJECTS_lpey0b.png"
              className="pic"
              alt="newsletter"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="lettersecond">
            <div className="subscribetonews">
              Subscribe to our newsletter to get the latest updates and news
            </div>
            <div className="subnews">
              <span>
                <b>Subscribe</b> <br />
                to our newsletter to get the latest
                <br />
                updates and news
              </span>
            </div>
            <div>
              <form>
                <div className="subscribebutton">
                  <div className="mail">
                    <input
                      type="email"
                      id="email"
                      name="Email_ID"
                      placeholder="Enter your email"
                      required
                      style={{
                        width: "100%",
                        height: "100%",
                        color: "black",
                        border: "none",
                        borderRadius: "20px",
                        outline: "none",
                        padding: "0px 20px",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="subscribe"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <div className="subscribe">Subscribe</div>
                  </button>
                </div>
              </form>
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
