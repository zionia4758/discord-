function myFunction() {
  var url = "https://discord.com/api/webhooks/900849894191927336/pLJ2_VMz9ZZMAoRc7hRh54VUstSwZ2jaxGYjj0prjRzdD8cXZjDBmrYRITfHX0bJ2Ye1"; 
 
  Logger.log(UrlFetchApp.fetch(url));
  
  var data={
    'content':"Bot Test Message"
  }
  var options={
    'method':'POST',
    'payload':JSON.stringify(data),
    'contentType':'application/json',
    'muteHttpExceptions':true
  }

  Logger.log( UrlFetchApp.fetch(url,options ));

}
