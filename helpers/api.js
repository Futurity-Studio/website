import { google } from "googleapis";
//https://andreaskeller.name/blog/nextjs-google-sheets-cms

// OFFERINGS

export const defaultOffering = {
  'codedName': "_",
  'contentType': "_",
  'lab': "acommerce",
  'name': "_",
  'descLong': "_",
  'descContents': "_",
  'features': "_",
  'photoLink': "_",
  'photoFile': "placeholder.png",
  'storeLink': "http://www.futurity.studio",
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

    return(response);
  } catch (err) {
    console.log(err);
  }
  return [];
}
export const mapOfferingData = (tableData) => {
  tableData.shift()
  return tableData.map(data =>
  {
      const buildOffering = {}
      Object.keys(defaultOffering).forEach((key,index) => {
        let temp = {};
        temp[key] = (data[index]) ? data[index] : defaultOffering[key];
        Object.assign(buildOffering, temp)
        })
      return buildOffering;
  })
};

// TODO -- rename events to ideas once csv is set
// EVENTS
export const defaultEvent = {
  "date": "",
  "speaker": "",
  "format": "",
  "location": "",
  "lab": "",
  "title": "",
  "descLong": "",
  "host": "",
  "hostLink": "",
  "coPanelists": "",
}
export async function apiRunnerIdeas() {
  try {
    const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "ideas"
    });
    return(response);
  } catch (err) {
    console.log(err);
  }
  return [];
}
export const mapIdeaData = (tableData) => {
  tableData.shift()
  return tableData.map(data =>
  {
    const buildEvent = {}
    Object.keys(defaultEvent).forEach((key,index) => {
      let temp = {};
      temp[key] = (data[index]) ? data[index] : defaultEvent[key];
      Object.assign(buildEvent, temp)
    })
    return buildEvent;
  })
};
