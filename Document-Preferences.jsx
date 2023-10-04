/* --------------------------------------
Doc Prefs
by Aaron Troia (@atroia)
Modified Date: 8/21/23

Description: 
Update file preferences for files coming in from other designers.

-------------------------------------- */

#targetengine "myprefs"

var d = app.activeDocument;
var pt = MeasurementUnits.POINTS;
var inch = MeasurementUnits.INCHES;

main();

function main() {
  if (app.documents.length == 0) {
    alert("No documents are open.");
  } else {
     if (d.viewPreferences.horizontalMeasurementUnits == inch && d.viewPreferences.verticalMeasurementUnits == inch) {
      valPrefs(pt, 9, ["864 pt", "72 pt"], ".25pt", "1pt" , "10pt", 10);
    } else if (d.viewPreferences.horizontalMeasurementUnits == pt && d.viewPreferences.verticalMeasurementUnits == pt) {
      valPrefs(inch, 0.125, ["12 in", "1 in"], ".25pt", "1pt", "10pt", 10);
    }
    docPrefs();
    textThreads();
  }
}

function valPrefs(units, bleed, pbMargin, cki, bski, lki, kki) {
  // set ruler mesurements to Points for bleed
  // units: POINTS, PICAS, INCHES, INCHES_DECIMAL, MILLIMETERS, CENTIMETERS, CICEROS, CUSTOM, AGATES, U, BAI, MILS, PIXELS, Q, HA, AMERICAN_POINTS
  d.viewPreferences.horizontalMeasurementUnits = units;
  d.viewPreferences.verticalMeasurementUnits = units; 
  d.documentPreferences.documentBleedBottomOffset = bleed;
  d.documentPreferences.documentBleedInsideOrLeftOffset = bleed;
  d.documentPreferences.documentBleedOutsideOrRightOffset = bleed;
  d.documentPreferences.documentBleedTopOffset = bleed;
  d.pasteboardPreferences.pasteboardMargins = pbMargin; // Horizontal, vertical. A horizontal margin of -1 means one document page width.
  d.viewPreferences.cursorKeyIncrement = cki; // Range depends on the measurement unit. For points: 0.001 to 100; picas: 0p0.001 to 8p4; mm: 0 to 35.278; cm: 0 to 3.5278; inches: 0 to 1.3889; ciceros: 0c0.001 to 7c9.839)
  d.textPreferences.baselineShiftKeyIncrement = bski; // .001-100
  d.textPreferences.leadingKeyIncrement = lki; // .001-100
	d.textPreferences.kerningKeyIncrement = kki; // 1-100
}

function docPrefs() {
  // Preferences : Type
  d.textPreferences.typographersQuotes = true;
  d.textPreferences.deleteEmptyPages = true;
  // Preferences : Spelling
  app.spellPreferences.checkMisspelledWords = true;
  app.spellPreferences.checkRepeatedWords = false;
  app.spellPreferences.checkCapitalizedWords = false;
  app.spellPreferences.checkCapitalizedSentences = false;
  app.spellPreferences.dynamicSpellCheck = true;
  app.spellPreferences.misspelledWordColor = UIColors.RED;
  app.spellPreferences.repeatedWordColor = UIColors.GREEN;
  app.spellPreferences.uncapitalizedWordColor = UIColors.GREEN;
  app.spellPreferences.uncapitalizedSentenceColor = UIColors.GREEN;
  // Preferences : Units & Increments
  //   d.textPreferences.kerningKeyIncrement = 1; // 1-100
  // Preferences : File Handling
  app.fontSyncPreferences.autoActivateFont = true;
  // Type > Show hidden characters
  d.textPreferences.showInvisibles = true;
  // View > Extras
  d.viewPreferences.showFrameEdges = true;
  // View > Grids & Guides
  d.guidePreferences.guidesShown = true;
  d.guidePreferences.guidesLocked = false;
  d.documentPreferences.columnGuideLocked = true;
  d.guidePreferences.guidesSnapto = true;
  app.smartGuidePreferences.enabled = true;
  d.gridPreferences.baselineGridShown = false;
  d.gridPreferences.documentGridShown = false;
  d.gridPreferences.documentGridSnapto = false;
  d.documentPreferences.allowPageShuffle = true;
}

function textThreads(){
  // show Text Threads
  app.translateKeyString("$ID/Show Text Threads");
  app.translateKeyString("$ID/Hide Text Threads");
  // failed test
  $.writeln(app.menuActions.itemByID(24332).name);
  app.menuActions.itemByID(24332).invoke();
  $.writeln(app.menuActions.itemByID(24332).name);
  // app.activate()
  // output should change after invoke
  $.writeln(app.activeDocument.undoHistory.length);
}
