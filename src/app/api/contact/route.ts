import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { fullName, company, email, queryType, message, captchaToken } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify hCaptcha token
    if (!captchaToken) {
      return NextResponse.json(
        { error: 'CAPTCHA verification required' },
        { status: 400 }
      );
    }

    const hcaptchaSecretKey = process.env.HCAPTCHA_SECRET_KEY;
    if (hcaptchaSecretKey) {
      const hcaptchaResponse = await fetch('https://hcaptcha.com/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${hcaptchaSecretKey}&response=${captchaToken}`,
      });

      const hcaptchaResult = await hcaptchaResponse.json();

      if (!hcaptchaResult.success) {
        return NextResponse.json(
          { error: 'CAPTCHA verification failed' },
          { status: 400 }
        );
      }
    }
    const  emailFrom =process.env.RESEND_FROM_EMAIL;

    const data = await resend.emails.send({
      from: `GXTRONIC Contact <${emailFrom}>`,
      to: ['gdpacheco@hotmail.com'],
      replyTo: email,
      subject: `New Contact Form Submission - ${queryType || 'General Inquiry'}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .header {
                background-color: #1976d2;
                color: white;
                padding: 20px;
                text-align: center;
              }
              .content {
                padding: 20px;
                background-color: #f9f9f9;
              }
              .field {
                margin-bottom: 15px;
                background-color: white;
                padding: 10px;
                border-radius: 5px;
                border-left: 4px solid #1976d2;
              }
              .field-label {
                font-weight: bold;
                color: #1976d2;
              }
              .message-content {
                background-color: white;
                padding: 15px;
                border-radius: 5px;
                margin-top: 10px;
                white-space: pre-wrap;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>GXTRONIC</h1>
              <p>New Contact Form Submission</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Name:</div>
                <div>${fullName}</div>
              </div>
              
              ${company ? `
              <div class="field">
                <div class="field-label">Company:</div>
                <div>${company}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="field-label">Email:</div>
                <div>${email}</div>
              </div>
              
              ${queryType ? `
              <div class="field">
                <div class="field-label">Query Type:</div>
                <div>${queryType}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="field-label">Message:</div>
                <div class="message-content">${message}</div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Send confirmation email to the customer
    await resend.emails.send({
      from: `GXTRONIC <${emailFrom}>`,
      to: [email],
      subject: 'Thank you for contacting GXTRONIC',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .header {
                background-color: #1976d2;
                color: white;
                padding: 20px;
                text-align: center;
              }
              .content {
                padding: 20px;
                background-color: #f9f9f9;
              }
              .card {
                background-color: white;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>GXTRONIC</h1>
              <p>LED Driver Manufacturer</p>
            </div>
            <div class="content">
              <div class="card">
                <h2>Thank you for contacting us!</h2>
                <p>Dear ${fullName},</p>
                <p>We have received your inquiry and our technical team will review it shortly. We typically respond within 24-48 hours during business days.</p>
                <p>Your inquiry details:</p>
                <ul>
                  <li><strong>Query Type:</strong> ${queryType || 'General Inquiry'}</li>
                  <li><strong>Submitted:</strong> ${new Date().toLocaleDateString()}</li>
                </ul>
                <p>If you need immediate assistance, please contact us directly at:</p>
                <ul>
                  <li><strong>Email:</strong> info@gxtronic.com</li>
                  <li><strong>Phone:</strong> +86 XXX XXXX XXXX</li>
                </ul>
                <p>Best regards,<br>
                The GXTRONIC Team</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
