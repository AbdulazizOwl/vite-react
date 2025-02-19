import React from "react";

const ApplePayPage: React.FC = () => {
    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Apple Pay Integration</h1>
            <button
                id="apple-pay-button"
                style={{
                    appearance: "-apple-pay-button",
                    "-apple-pay-button-style": "black",
                    width: "200px",
                    height: "50px",
                }}
                onClick={() => alert("Apple Pay Button Clicked")}
            >
                Buy with Apple Pay
            </button>
        </div>
    );
};

export default ApplePayPage;
