import React from "react";

class ConsoleMessages extends React.Component {
    showConsoleLogsInTextArea(lines) {
        let consoleMessages = JSON.parse(
            localStorage.getItem("consoleMessages")
        );

        this.textArea.value = consoleMessages.reduce(function(sum, current) {
            return sum + current + "\n";
        }, "");
    }

    copyAllToClipboard() {
        this.textArea.select();
        document.execCommand("copy");
    }

    changeConsoleReportSize() {
        if (this.textArea.getAttribute("rows") > 0)
            this.textArea.setAttribute("rows", "0");
        else this.textArea.setAttribute("rows", "20");
    }

    componentDidMount() {
        this.showConsoleLogsInTextArea(20);
    }

    render() {
        const {props} = this;
        return (
            <div id="consoleMessagesArea">
                <textarea
                    rows="0"
                    ref={ref => {
                        this.textArea = ref;
                    }}
                />
            </div>
        );
    }
}

export default ConsoleMessages;
