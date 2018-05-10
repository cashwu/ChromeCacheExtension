console.log("load js");

chrome.webRequest.onBeforeSendHeaders.addListener(

    function(details) {

        details.requestHeaders.push({
            name: "Cache-Control",
            value: "no-store"
        });

        details.requestHeaders.push({
            name: "test",
            value: "123"
        });

        details.requestHeaders.push({
            name: "if-none-match",
            value: (new Date().getTime()).toString()
        });

        // var d = new Date();
        // d.setDate(d.getDate() - 1);
        // details.requestHeaders.push({
        //     name: "if-modified-since",
        //     value: (d.toGMTString())
        // });

        console.log("details");
        console.log(details);

        return { requestHeaders: details.requestHeaders };
    }, {
        urls: ["*://*/*"]
    }, ["blocking", "requestHeaders"]
);