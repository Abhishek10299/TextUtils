import React from "react";

export default function About(props) {
  return (
    <div
      className="container"
      style={{
        color: props.mode === "light" ? "black" : "white",
      }}
    >
      <h1 className="my-3">About Us</h1>

      <div
        className="accordion"
        id="accordionExample"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#212529",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#212529",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              <strong>&Delta; Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#212529",
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            <div className="accordion-body">
              TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, Charecters count or 
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#212529",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              <strong>&Delta; Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#212529",
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            <div className="accordion-body">
              TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of word and characters. Thus it is sutable for writing text with word/ character limit.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#212529",
                color: props.mode === "light" ? "black" : "white",
              }}
            >
              <strong>&Delta; Contact us</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#212529",
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            <div className="accordion-body">
              &#x1F4E7;{" "}
              <a href="mailto:  text.utils@gamil.com">text.utils@gamil.com </a>
              <br /> &#x1F4DE; +91-9768548833
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
