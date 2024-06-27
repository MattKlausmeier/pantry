import van from "../van-1.5.0.min.js";
const { div } = van.tags;

export function modalOK(text) {
    return div({class:"modal-bg"},
        div({class:"modal"},
            text
        )
    );
}
