import van from "./van-1.5.0.min.js";
import { ui } from './ui/ui.js'
import { db } from './db.js'

window.onload = async () => {
    // If app is not installed as a PWA...
    if (!window.matchMedia("(display-mode: standalone)").matches) {
        // Check if the database exists.
        const exists = await db.GetDBExists();
        if (!exists) {
            // Show the "Install" prompt.
            const bb = document.getElementById("bottombox");
            if (bb != null) {
                van.add(bb, ui.Install(), ui.Fg1(), ui.AuthorSpan());
            } else {
                window.location.reload();
            }
        } else {
            showApp();
        }
    } else {
        showApp();
    }

    // Install the service worker.
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js');
    }
};

function showApp() {
    //
}
