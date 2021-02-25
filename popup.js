document.addEventListener('DOMContentLoaded', function() {
var checkPageButton = document.getElementById('openGithub1s');

checkPageButton.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        let url = tabs[0].url;
        let myNewUrl = url.replace("github", "github1s");
        console.log("trying to change url to", myNewUrl);
        chrome.tabs.update(tabs[0].id, { url: myNewUrl });
    });
};

}, false);