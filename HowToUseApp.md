## How to Use App

On load of the app, the first page you see will have a "Go to Form" button or you can login as an Admin to see the table list of users.

Admin Login credentials:
username: admin
password: admin1234

Notes: authentication is set up so you cannot visit the route '/listpage' without being logged in. it is using localStorage to check for authorization for now. I would have used redux (or another application state mgt tool) which I'm very familiar with, but decided to go this route for the sake of time. 

Also decided to not use any UI libraries (like MUI) for this probject, as I'm not as familiar with setting those up in Next.js as I am a regular React project.  

Steps to use app:

1. As a user, click on the form button to see the form.
2. Fill in all the required fields (first/last name, email, country)
    - If you do not fill in all required fields and try to submit, notice the form does not submit and validation styling appears on the form fields.
3. File upload button works so give it a try.
4. Submit form and see the thank you page appear.
5. Now go back to the main page, login as admin with credentials above.
6. See the list page and you should see that a new row of the new user has been added at the bottom. 

There is more I would definitely like to do, but time did not allow. Such as better attention to styling detail and creating some tests, and doing some component clean up.

Thank you for allowing me the opportunity to take the challenge!