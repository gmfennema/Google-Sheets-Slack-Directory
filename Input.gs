function doPost(req) {
  var sheets = SpreadsheetApp.openById('[SPREADSHEET ID]');
  var params = req.parameters;

  if (params.token == "[OUTBOUND WEBHOOK]") {

    // PROCESS TEXT FROM MESSAGE
    var textRaw = String(params.text).replace(/^\s*directory\s*:*\s*/gi,"");
    
    // LOCATES PERSON BY NAMERANGE AND ASSIGN ATTRIBUTES TO VARIABLES
    var first = sheets.getRangeByName(textRaw).getCell(1, 2).getValue();
    var last = sheets.getRangeByName(textRaw).getCell(1, 3).getValue();
    var email = sheets.getRangeByName(textRaw).getCell(1, 4).getValue();    
    var birthday = sheets.getRangeByName(textRaw).getCell(1, 5).getValue();
    var team = sheets.getRangeByName(textRaw).getCell(1, 6).getValue();
    var hire = sheets.getRangeByName(textRaw).getCell(1, 7).getValue();
    var person = sheets.getRangeByName(textRaw).getCell(1, 8).getValue(); 
    var role = sheets.getRangeByName(textRaw).getCell(1, 9).getValue(); 
    
    
    // POST RESPONSE TO QUERY
    postResponse(first, last, birthday, hire, team, role, email);
    
    
  } else {
    return;
  }
}
