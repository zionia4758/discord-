function sendMessage(link,charList) {

  var data={
    'content': charList
  }
  var options={
    'method':'POST',
    'payload':JSON.stringify(data),
    'contentType':'application/json',
    'muteHttpExceptions':true
  }

  UrlFetchApp.fetch(link,options);
}
