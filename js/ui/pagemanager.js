let stack = [];

export function init() {
    const mains = document.body.getElementsByTagName("main");
    if (mains.length === 0) {
        console.error("<body> doesn't contain a <main>");
        return;
    } else if (mains.length > 1) {
        console.error("<body> contains too many <main>s");
        return;
    }

    stack.push(mains[0]);
}
