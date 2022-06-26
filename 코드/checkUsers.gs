function checkUsers() {
  var sheet=  SpreadsheetApp.getActiveSpreadsheet().getSheetByName('WebHookLink');
  var datarange=sheet.getDataRange();
  var userList=datarange.getValues();
  userList.splice(0,1);
  for(var i=0;i<userList.length;++i)
  {
    var userSheet=getSheet(userList[i][1]);
  
    var neetToPlayList=check(userSheet,userList[i][3],userList[i][4]);
    var link=userList[i][2];
    if(neetToPlayList.length>0)
    {
      data=charListToData(neetToPlayList);
      Logger.log(neetToPlayList);
      sendMessage(link,data);
    }
  }
}
function charListToData(charList)
{
  var data="플레이할 리스트\n";
  for(var i=0;i<charList.length;++i)
  {
    data+="닉네임 : "+charList[i][0]+" 카던 게이지 : "+charList[i][5]+" 가디언 게이지 : "+charList[i][6]+"\n";
  }
  return(data);
}

function getSheet(url)
{
  var sheet=SpreadsheetApp.openByUrl(url).getSheetByName('배럭관리');
  var datarange=sheet.getDataRange();
  var charList=datarange.getValues();
  charList.splice(0,2);
  return charList
}

function check(charList,kLimit,gLimit) {
  var needPlay=[];
  var count=0;
  for(var i=0;i<charList.length;++i)
  {
    if(charList[i][5]>=kLimit || charList[i][6]>=gLimit)
    {
      needPlay[count++]=charList[i];
    }
  }
  return needPlay;
}
