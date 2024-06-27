import van from "../van-1.5.0.min.js";
const { div, h4, em, button, span } = van.tags;

export function install() {
    return div({id:"install"},
        h4(
            "I ",
            em("strongly"),
            " recommend installing this app to your phone's home screen."
        ),
        button({class:"inverted"},
            "Learn How to Install"
        ),
        button(
            "Just Start Using"
        )
    );
}

export function authorSpan() {
    return span("by: Matthew Klausmeier")
}
