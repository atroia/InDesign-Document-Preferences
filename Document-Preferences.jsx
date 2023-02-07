/* --------------------------------------
Doc Prefs
by Aaron Troia (@atroia)
Modified Date: 2/2/23

Description: 
Update file preferences for files coming in from other designers.

-------------------------------------- */

var d = app.activeDocument;

main();

function main() {
  if (app.documents.length == 0) {
    alert("No documents are open.");
  } else {
    docPrefs();
  }
}

function docPrefs() {
  // set ruler mesurements to Points for bleed
  d.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.INCHES; // POINTS, PICAS, INCHES, INCHES_DECIMAL, MILLIMETERS, CENTIMETERS, CICEROS, CUSTOM, AGATES, U, BAI, MILS, PIXELS, Q, HA, AMERICAN_POINTS
  d.viewPreferences.verticalMeasurementUnits = MeasurementUnits.INCHES; // POINTS, PICAS, INCHES, INCHES_DECIMAL, MILLIMETERS, CENTIMETERS, CICEROS, CUSTOM, AGATES, U, BAI, MILS, PIXELS, Q, HA, AMERICAN_POINTS
  // Document Setup : Bleeds
  d.documentPreferences.documentBleedBottomOffset = .125;
  d.documentPreferences.documentBleedInsideOrLeftOffset = .125;
  d.documentPreferences.documentBleedOutsideOrRightOffset = .125;
  d.documentPreferences.documentBleedTopOffset = .125;
  // Preferences : Type
  d.textPreferences.typographersQuotes = true;
  //   d.textPreferences.deleteEmptyPages = false;
  // Preferences : Guides & Pasteboard
  // d.documentPreferences.marginGuideColor = UIColors.MAGENTA;
  // d.documentPreferences.columnGuideColor = UIColors.VIOLET;
  // d.pasteboardPreferences.bleedGuideColor = UIColors.RED;
  // d.pasteboardPreferences.slugGuideColor = UIColors.GRID_BLUE;
  // d.pasteboardPreferences.matchPreviewBackgroundToThemeColor = false;
  // d.pasteboardPreferences.previewBackgroundColor = UIColors.LIGHT_GRAY;
  // d.guidePreferences.rulerGuidesColor = UIColors.CYAN; // This setting isn't in the user interface
  // app.smartGuidePreferences.guideColor = UIColors.GRID_GREEN;
  d.pasteboardPreferences.pasteboardMargins = ["864 pt", "72 pt"]; // Horizontal, vertical. A horizontal margin of -1 means one document page width.
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
}
