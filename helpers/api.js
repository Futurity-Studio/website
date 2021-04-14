import { google } from "googleapis";
//https://andreaskeller.name/blog/nextjs-google-sheets-cms

export const defaultCard = {
  'index': "0",
  'deck': "none",
  'suit': "none",
  'card': "0",
  'nameUrl': "",
  'nameNatural': "FS Cards",
  'descShort': "Short Description",
  'iconUrl': "Logo",
  'qrUrl': "",
  'pipUrl': "",
  'descLong': "Body Text **here**",
  'redirectOption': "",
  'deckCode': "0",
  'suitCode': "0",
  'cardCode': "0",
  'context': "",
  'path': "",
  'keywords': "",
  'relatedCards': "",
}

export async function apiRunnerLabOfferings() {
  try {
    const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      // we need to replace the escaped newline characters
      // https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
      process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "delivs"
    });

    // console.log(response)
    let tableData = response.data.values;
    // console.log(tableData)

    tableData.shift()
    return tableData.map(data =>
      ({
          'codeName': data[0] || "",
          'contentType': data[1] || "",
          'lab': data[2] || "",
          'name': data[3] || "",
          'descLong': data[4] || "",
          'descContents': data[5] || "",
          'features': data[6] || "",
          'photoLink': data[7] || "",
        })
      )
  } catch (err) {
    console.log(err);
  }
  return [];
}