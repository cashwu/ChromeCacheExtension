chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {

        var headers = details.requestHeaders || [];
        headers.push({
            name: "Cache-Control",
            value: "no-cache"
        });
        console.log("push headers");
        return { requestHeaders: headers };
    }, {
        urls: ["*://*/*"]
    }, []
);