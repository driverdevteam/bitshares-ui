import React from "react";

class Screenshot extends React.Component {
    setImage() {
        this.screenshotImg.setAttribute("src", document.screenshotURL);
    }

    changeScreenshotSize() {
        if (this.screenshotImg.getAttribute("width") != 0)
            this.screenshotImg.setAttribute("width", "0");
        else this.screenshotImg.setAttribute("width", "100%");
        this.setImage();
    }

    render() {
        const {props} = this;
        return (
            <div id="screenshotArea">
                <img
                    width="0"
                    ref={ref => {
                        this.screenshotImg = ref;
                    }}
                />
            </div>
        );
    }
}

export default Screenshot;
