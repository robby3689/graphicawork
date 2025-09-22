# 📧 GoDaddy Email Setup Guide for Contact Form

## Your Email: `sachin@graphicawork.xyz`

Your contact form is now configured to send emails to your GoDaddy email! Follow these steps to complete the setup:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's free!)
3. Use your email: `sachin@graphicawork.xyz`
4. Verify your email address

## Step 2: Add GoDaddy Email Service
1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** (this works with most email providers including GoDaddy)
4. **Service Name**: `graphicawork_contact`
5. Click **"Connect Account"**

### For GoDaddy Email Setup:
- **Email**: `sachin@graphicawork.xyz`
- **Password**: Your GoDaddy email password
- **SMTP Settings** (if needed):
  - SMTP Server: `smtpout.secureserver.net`
  - Port: `465` (SSL) or `587` (TLS)
  - Authentication: Yes

## Step 3: Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. **Template Name**: `contact_form_template`

### Template Content:
```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your website contact form.
Reply to: {{from_email}}
```

4. **Save** the template

## Step 4: Get Your Keys
1. **Service ID**: Copy from "Email Services" (e.g., `service_abc123`)
2. **Template ID**: Copy from "Email Templates" (e.g., `template_xyz789`)
3. **Public Key**: Go to "Account" → "General" → Copy your Public Key

## Step 5: Update Your Code
In `src/pages/Contact.js`, find these lines and replace:

```javascript
// Replace these with your actual values:
const serviceId = 'YOUR_SERVICE_ID';        // From Step 4
const templateId = 'YOUR_TEMPLATE_ID';      // From Step 4  
const publicKey = 'YOUR_PUBLIC_KEY';        // From Step 4
```

## Step 6: Test Your Setup
1. **Save all files**
2. **Refresh your website**
3. **Go to Contact page**
4. **Fill out the form** with test data:
   - Name: Test User
   - Email: your-email@example.com
   - Subject: Test Message
   - Message: This is a test message from my website
5. **Submit the form**
6. **Check your GoDaddy email** (`sachin@graphicawork.xyz`)

## 🎯 What You'll Receive:

When someone contacts you, you'll get an email like this:

```
From: Test User (test@example.com)
Subject: Test Message

Message:
This is a test message from my website

---
This message was sent from your website contact form.
Reply to: test@example.com
```

## 🔧 Troubleshooting GoDaddy Email:

### If emails don't arrive:
1. **Check spam folder** in your GoDaddy email
2. **Verify SMTP settings** in EmailJS
3. **Test with a simple email** first

### GoDaddy SMTP Settings:
- **Outgoing Server**: `smtpout.secureserver.net`
- **Port**: `465` (SSL) or `587` (TLS)
- **Authentication**: Required
- **Username**: `sachin@graphicawork.xyz`
- **Password**: Your email password

## ✅ Success Checklist:

- [ ] EmailJS account created
- [ ] GoDaddy email connected
- [ ] Template created
- [ ] Keys copied to code
- [ ] Test email sent
- [ ] Email received in GoDaddy inbox

## 🚀 You're All Set!

Once you complete these steps, your contact form will send all messages directly to `sachin@graphicawork.xyz`!

**Need help with any step?** Let me know and I'll guide you through it!
