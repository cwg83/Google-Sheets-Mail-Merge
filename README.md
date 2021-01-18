# About

This is a Google Apps script written in Javascript used for mail merging an email and attached PDF within Google docs, using a Form as a way to fill in the spreadsheet with merge Keys. The code executes on submition of the form.

## Usage
1. Create a new Google Sheet and name it whatever you like.
2. Add a form to your sheet: Click Tools > Create a form. This script is made for a 7 question form, but you can add more into the code. The second question on the form is the email address to which the email and pdf file are sent.
3. Add the script to the Google Sheet: Click Tools > Script editor to open the script editor, then copy the script code from this file into your script editor. Save and reload your Google sheet.
4. Create a new Google Document and name it whatever you like.
5. Replace EXAMPLEID123 and DOCUMENT NAME with the ID and name of your template document, respectively. The ID of a document can be derived from the URL:
```
https://docs.google.com/document/d/DOCUMENTID/edit
```
You will need to give permission to the script in order for it to send emails on your behalf as well as view and utilize other documents in your drive.
