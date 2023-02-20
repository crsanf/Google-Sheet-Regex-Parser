let vendors = [];
let contractors = [];
let ftes = [];

function parseData() {
    let sheet = SpreadsheetApp.getActiveSheet();
    let data = sheet.getDataRange().getValues();

    //Negate the header row, start at 1
    for (i = 1; i < data.length; i++) {
        let email = new String(data[i]);

        const vendor = email.match("-v@")

        if (vendor != null) {
            vendors.push(email)
            continue;
        }

        const contractor = email.match("=c@")

        if (contractor != null) {
            contractors.push(email)
        }

        ftes.push(email)
    }

    console.log('Vendors ${vendors}')
    console.log('Contractors ${contractors}')
    console.log('FTEs ${ftes}')

}
