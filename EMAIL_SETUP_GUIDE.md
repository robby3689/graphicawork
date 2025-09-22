# Email Setup Guide for Contact Form

## 📧 How to Set Up EmailJS for Your Contact Form

Your contact form is now ready to send emails to `hello@graphicawork.xyz`! Follow these steps to complete the setup:

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. In your EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your `hello@graphicawork.xyz` email account
5. Note down your **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **"Email Templates"** in your dashboard
2. Click **"Create New Template"**
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your website contact form.
```

4. Save the template and note the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to **"Account"** → **"General"**
2. Copy your **Public Key** (e.g., `user_abc123def456`)

### Step 5: Update Your Code
In `src/pages/Contact.js`, replace these values:

```javascript
const serviceId = 'YOUR_SERVICE_ID';        // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';      // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY';        // Replace with your Public Key
```

### Step 6: Test Your Form
1. Save all files
2. Refresh your website
3. Go to the Contact page
4. Fill out and submit the form
5. Check your `hello@graphicawork.xyz` email inbox!

## 🎯 What Happens When Someone Submits the Form:

1. **User fills out the form** on your website
2. **EmailJS sends the email** to your inbox
3. **You receive the message** at `hello@graphicawork.xyz`
4. **User sees success message** on the website

## 📋 Email Content You'll Receive:

- **From**: The person's name and email
- **Subject**: Their subject or "New Contact Form Submission"
- **Message**: Their full message
- **Reply-to**: Their email address (so you can reply directly)

## 🔧 Troubleshooting:

- **Form not working?** Check your Service ID, Template ID, and Public Key
- **No emails received?** Check your spam folder
- **Error messages?** Make sure all IDs are correct in the code

## 💡 Pro Tips:

- **Free plan**: 200 emails/month (perfect for most websites)
- **Upgrade**: If you get more than 200 contacts/month
- **Backup**: Keep a copy of your EmailJS configuration

Your contact form is now ready to receive messages directly to your email! 🚀
