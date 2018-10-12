var URL = "http://github.com";  // Enter your URL

xhttp.open("POST", URL, true); // Type of request
xhttp.setRequestHeader("Authorization", "token"); // Set Request Header
xhttp.send("platform=github");  // Send the request with data
