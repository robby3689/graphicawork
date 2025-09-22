// Test Email Function for Contact Form
// This file helps you test your email setup

export const testEmailSetup = async () => {
  try {
    // Test email configuration
    const testParams = {
      from_name: 'Test User',
      from_email: 'test@example.com',
      subject: 'Test Message from Website',
      message: 'This is a test message to verify email setup is working correctly.',
      to_email: 'sachin@graphicawork.xyz'
    };

    console.log('🧪 Testing email setup...');
    console.log('📧 Test parameters:', testParams);
    
    // You can call this function from browser console to test
    return testParams;
  } catch (error) {
    console.error('❌ Test failed:', error);
    return null;
  }
};

// Instructions for testing:
export const testInstructions = `
🧪 HOW TO TEST YOUR EMAIL SETUP:

1. Open your website in browser
2. Open Developer Tools (F12)
3. Go to Console tab
4. Type: testEmailSetup()
5. Press Enter
6. Check your GoDaddy email inbox

📧 Expected Result:
You should receive a test email at sachin@graphicawork.xyz

🔧 If no email arrives:
- Check spam folder
- Verify EmailJS configuration
- Check GoDaddy email settings
`;

console.log(testInstructions);
