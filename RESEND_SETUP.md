# Email & CAPTCHA Configuration

## Setup Instructions

1. **Get Resend API Key**:
   - Go to [resend.com](https://resend.com)
   - Sign up for an account
   - Navigate to API Keys section
   - Create a new API key

2. **Get hCaptcha Keys**:
   - Go to [hcaptcha.com](https://hcaptcha.com)
   - Sign up for an account
   - Create a new site
   - Get your Site Key and Secret Key

3. **Environment Variables**:
   - Copy `.env.example` to `.env.local`
   - Add your keys:
     ```
     RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
     NEXT_PUBLIC_HCAPTCHA_SITE_KEY=your_site_key_here
     HCAPTCHA_SECRET_KEY=your_secret_key_here
     ```

3. **Email Configuration**:
   - The contact form will send emails from: `noreply@gxtronic.com`
   - Emails will be sent to: `info@gxtronic.com`
   - Customer will receive a confirmation email

4. **Custom Domain (Optional)**:
   - For production, verify your custom domain in Resend
   - Update the `from` addresses in `/src/app/api/contact/route.ts`

## Features

✅ Contact form submission
✅ Email validation
✅ hCaptcha spam protection
✅ Server-side CAPTCHA verification
✅ Confirmation email to customer
✅ Notification email to company
✅ Beautiful HTML email templates
✅ Form validation and error handling
✅ Loading states and success messages

## Testing

- Test the contact form in development
- Check that emails are being sent in the Resend dashboard
- Verify email templates look correct

## Email Templates

The API includes:
- **Company notification**: Detailed submission with all form data
- **Customer confirmation**: Professional thank you email with contact info