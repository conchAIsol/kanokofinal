function copyToClipboard(e) {
    selectText(e);
    document.execCommand("copy");
}

function selectText(e) {
    e = document.getElementById(e);

    if (document.body.createTextRange) {
        const r = document.body.createTextRange();
        r.moveToElementText(e);
        r.select();
    } else if (window.getSelection) {
        const s = window.getSelection();
        const r = document.createRange();
        r.selectNodeContents(e);
        s.removeAllRanges();
        s.addRange(r);
    } else {
        console.warn("Could not select text in "+e+": Unsupported browser.");
    }
}