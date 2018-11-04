function nameRanges() {
  var sheets = SpreadsheetApp.getActive();
  
  //Set this range to the start and end of your directory
  var length = sheets.getRange("A2:A60").getNumRows();
  sheets.setActiveSelection("A4");
  
  var row = sheets.getActiveCell().getRow();
  
  //Loops through range and sets namerange as A column
  for(i = 0; i < length; i++) {
  var name = sheets.getActiveCell().getValue();
  sheets.setActiveSelection("A"+row+":"+"I"+row);
  sheets.setNamedRange(name, sheets.getActiveRange().offset(-1, 0));
  row = row + 1;
  }
}
