const GOOGLE_SHEET_ID = "1lSdSy7CmEJQbGFUauHAMlFg31XgSQ-tcMIh8sITH4sw";
const googleSheetCsv = sheetName =>
  `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;

window.LE_ST_EX_SHEETS = {
  PARAMETRES: googleSheetCsv("PARAMETRES"),
  CONFIG: googleSheetCsv("CONFIG"),
  MENU_JOUR: googleSheetCsv("MENU_JOUR"),
  CARTE: googleSheetCsv("CARTE"),
  HORAIRES: googleSheetCsv("HORAIRES"),
  GALERIE: googleSheetCsv("GALERIE"),
};

/*
  Ces URL utilisent l'adresse Google Sheets suivante :
  https://docs.google.com/spreadsheets/d/1lSdSy7CmEJQbGFUauHAMlFg31XgSQ-tcMIh8sITH4sw/edit

  Le Google Sheets doit être accessible en lecture, idéalement :
  Fichier > Partager > Toute personne ayant le lien > Lecteur.

  Les fichiers ./data/fallback/*.csv restent utilisés automatiquement si Google Sheets
  ne répond pas ou si une URL est vide.
*/
