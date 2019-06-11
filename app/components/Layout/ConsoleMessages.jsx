import React from "react";
import Translate from "react-translate-component";

class ConsoleMessages extends React.Component {
    showConsoleLogsInTextArea(lines) {
        this.textArea.value = "";
        let i =
            console.messages.length >= lines ? lines : console.messages.length;

        while (i) {
            this.textArea.value +=
                console.messages[console.messages.length - i--] + "\n";
        }
    }

    copyAllToClipboard() {
        this.textArea.select();
        document.execCommand("copy");
    }

    prepareConsoleReport() {
        this.showConsoleLogsInTextArea(20);
        this.copyAllToClipboard();
    }

    render() {
        const {props} = this;
        return (
            <div id="consoleMessagesArea">
                <textarea
                    //               style={{display: 'none' }}
                    rows="20"
                    ref={thiz => {
                        this.textArea = thiz;
                    }}
                />
            </div>
        );
    }
}

export default ConsoleMessages;
