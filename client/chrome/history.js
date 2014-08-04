function uploadHistory(historyItems) {
	var req = new XMLHttpRequest();
	req.open("POST", "http://apps.sairahul.com/history", true);
	req.onreadystatechange = function() {
		console.log(req.responseText)
		alert("Thanks for providing your browser history, now you can delete this extension");
	}
	
  console.log("The number of historyItems", historyItems.length);
	req.send(JSON.stringify(historyItems));
}

function readAndUploadHistory() {
  var microsecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
  var microsecondsPerYear = microsecondsPerWeek * 52;
  var oneWeekAgo = (new Date).getTime() - microsecondsPerWeek;
  var oneYearAgo = (new Date).getTime() - microsecondsPerYear;
  var query = {'text':'', 'startTime': oneYearAgo, 'maxResults': 10000}
	chrome.history.search(query, uploadHistory);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('button').addEventListener('click', readAndUploadHistory);
})
