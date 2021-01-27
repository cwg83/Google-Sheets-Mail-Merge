// Global variables 
var docTemplate = "EXAMPLEID123"; // *** replace with your pdf template document ID ***
var docName = "EXAMPLE NAME"; // *** replace with your pdf template document name ***

function onFormSubmit(e) { // add an onsubmit trigger
    // Set variables to the associated columns in the spreadsheet
    var customerName = e.values[1];
    var customerEmail = e.values[2];
    var column3 = e.values[3];
    var column4 = e.values[4];
    var column5 = e.values[5];
    var column6 = e.values[6];
    var column7 = e.values[7];

    // Get the dpdf template document, copy it as a new temperorary document,  then save the document's ID
    var copyId =
        DriveApp.getFileById(docTemplate)
        //Save copy of file in Google Drive with format "docName_customerName"
        .makeCopy(docName + '_' + customerName)
        .getId();

    // Open the temporary document
    var copyDoc = DocumentApp.openById(copyId);

    // Get the document’s body section
    var copyBody = copyDoc.getActiveSection();

    // Define the placeholder keys that are to be replaced as well as the variables to replace them with
    copyBody.replaceText('keyName', customerName);
    copyBody.replaceText('keyEmail', customerEmail);
    copyBody.replaceText('key3', column3);
    copyBody.replaceText('key4', column4);
    copyBody.replaceText('key5', column5);
    copyBody.replaceText('key6', column6);
    copyBody.replaceText('key7', column7);
    var todaysDate = Utilities.formatDate(new Date(), "GMT", "MM/dd/yyyy");
    copyBody.replaceText('keyTodaysDate', todaysDate);

    // Save and close the temporary document
    copyDoc.saveAndClose();

    // Convert the temporary document to PDF using the getAs blob conversion
    var pdf = DriveApp.getFileById(copyId).getAs("application/pdf");

    // Set email subject and body content. You can use variables such as customerName, customerEmail, column3
    var subject = "ENTER SUBJECT HERE";
    var body =
        "Hello " + customerName + "," + "<br/><br/>" +
        "BODY PARAGRAPH 1 TEXT" + "<br/><br/>" +
        "BODY PARAGRAPH 2 TEXT" + "<br/><br/>" +
        "SALUTATION," + "<br/><br/>" +
        "NAME, DEPARTMENT" + "<br/>" + "ExampleEmail@example.com";

    // Set email to be CCd
    var cc = "";

    // Attach the PDF and send the email
    MailApp.sendEmail(customerEmail, subject, body, {
        htmlBody: body,
        attachments: pdf,
        cc: cc
    });

    // Delete temp file
    DriveApp.getFileById(copyId).setTrashed(true);
}
