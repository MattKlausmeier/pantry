import van from "./van-1.5.0.min.js";
import { ui } from './ui/ui.js'

window.onload = async () => {
    if (!window.matchMedia("(display-mode: standalone)").matches) {
        // If app is not installed as a PWA...
        if (!(await window.indexedDB.databases()).map(db => db.name).includes("pantry")) {
            // and the database doesn't exist, show the install prompt
            const bb = document.getElementById("bottombox");
            if (bb != null) {
                van.add(bb, ui.Install(), ui.Fg1(), ui.AuthorSpan());
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
