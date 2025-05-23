import React, { useState } from "react";

const ChatWidget = ({ isChatOpen, setIsChatOpen }) => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isHoveringMessage, setIsHoveringMessage] = useState(false);
  const [isHoveringClose, setIsHoveringClose] = useState(false);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
    setShowLoginForm(false);
  };

  const handleBookNowClick = () => {
    setShowLoginForm(true);
  };

  const messageButtonStyle = {
    minWidth: "100px",
    height: "40px",
    padding: "0 20px",
    borderRadius: "30px",
    backgroundColor: "#52606f",
    color: "#fff",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
    transition: "all 0.2s ease",
    outline: isHoveringMessage ? "2px solid #52606f" : "none",
    outlineOffset: isHoveringMessage ? "2px" : "0",
  };

  const closeButtonStyle = {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: "#52606f",
    color: "#fff",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
    transition: "all 0.2s ease",
    outline: isHoveringClose ? "2px solid #52606f" : "none",
    outlineOffset: isHoveringClose ? "2px" : "0",
  };

  return (
    <>
      {isChatOpen && (
        <div
          id="chat-widget-container"
          style={{
            position: "fixed",
            top: "0",
            bottom: "80px",
            right: "5vw",
            width: "90vw",
            maxWidth: "350px",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            zIndex: 99999,
            boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            borderRadius: "12px 12px 0 0",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            height: "calc(100vh - 100px)",
            overflow: "hidden",
          }}
        >
          {showLoginForm ? (
            <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <div style={{ flexGrow: 1, overflowY: "auto" }}>
                <p style={{ fontFamily: "'Shippori Mincho B1', sans-serif" }}>
                  Login to Continue
                </p>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "10px",
                    marginBottom: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    fontSize: "14px",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                />
              </div>

              <button
                style={{
                  backgroundColor: "#52606f",
                  color: "#fff",
                  padding: "10px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "14px",
                  width: "100%",
                }}
              >
                Login
              </button>
            </div>
          ) : (
            <>
              <p style={{ fontFamily: "'Shippori Mincho B1', sans-serif" }}>
                Hi There, We are
              </p>
              <p style={{ fontFamily: "'Shippori Mincho B1', sans-serif" }}>
                Dermatology and SkinCare Arts.
              </p>

              <div
                style={{
                  backgroundColor: "#f9f9f9",
                  padding: "15px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  marginTop: "20px",
                }}
              >
                <p
                  style={{
                    marginBottom: "10px",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                  }}
                >
                  Please message us here securely through Dermatology with questions about appointments and more. No waiting on hold. No phone tag.
                </p>
                <button
                  onClick={handleBookNowClick}
                  style={{
                    backgroundColor: "#52606f",
                    color: "#fff",
                    padding: "8px 16px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "14px",
                    width: "100%",
                  }}
                >
                  Book Now
                </button>
              </div>
            </>
          )}
        </div>
      )}

      <div
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          display: "flex",
          gap: "10px",
          zIndex: 1000000,
          flexWrap: "wrap",
        }}
      >
        {!isChatOpen && (
          <button
            onClick={toggleChat}
            style={messageButtonStyle}
            aria-label="Open chat"
            onMouseEnter={() => setIsHoveringMessage(true)}
            onMouseLeave={() => setIsHoveringMessage(false)}
          >
            Message
          </button>
        )}

        {isChatOpen && (
          <button
            onClick={toggleChat}
            style={closeButtonStyle}
            aria-label="Close chat"
            onMouseEnter={() => setIsHoveringClose(true)}
            onMouseLeave={() => setIsHoveringClose(false)}
          >
            ×
          </button>
        )}
      </div>
    </>
  );
};

export default ChatWidget;


