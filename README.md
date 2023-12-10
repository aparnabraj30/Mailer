# Mailer

This is a node.js script example using Mailer to send emails.

## Setup

Install the following dependencies prior executing the code in the terminal:

```npm
npm install nodemailer dotenv
```

## Generating Application Password for Gmail Account

To ensure secure access to your Gmail account for your application, follow these steps to generate an application password:

1. **Navigate to Your Google Account by clicking on "Manage your account."** 

2. **Access Security Settings via the "Security" tab on the left.**

3. **Scroll down until you find the section labeled "How you sign in to Google."**

4. **Click on "2-Step Verification" (First Option).**

5. **Access App Passwords by scrolling fully down, and then click on "App Passwords."**

6. **Generate a new App Password by specifying any app name. And copy the generated app password.**

7. **Paste the generated app password into your project's `.env` file.**


**Note:** The app password is essential for your application to securely interact with your Gmail account. It is a 16-digit alphabetical numbers with blank spaces after each 4-digits similiar to `(ufmm kssu luld ktik)`

## Adding App Password and e-mail to the directory

Create an `.env` file in your directory, and add the following line:

```env
EMAIL_USER=yourmail@gmail.com
GMAIL_APP_PASSWORD=your_generated_app_password
```

**Note:** The the generated respective app password to your given e-mail should be used in the `.env` file.

## Execution of the code

```npm
node app.js
