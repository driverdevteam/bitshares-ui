import React from "react";

class Screenshot extends React.Component {
    prepareAdvancedReport() {
        alert("Screenshot");
    }

    render() {
        const {props} = this;
        return <div id="screenshotArea" />;
    }
}

export default Screenshot;
