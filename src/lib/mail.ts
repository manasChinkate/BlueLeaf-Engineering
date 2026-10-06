import nodemailer from "nodemailer";
import { ContactFormData } from "@/lib/schema";

export async function sendContactEmail(data: ContactFormData) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const receiverEmail =
    process.env.CONTACT_RECEIVER_EMAIL ||
    gmailUser ||
    "info@blueleafengineering.com";

  if (!gmailUser || !gmailAppPassword) {
    console.warn(
      "[Mail Warning] GMAIL_USER or GMAIL_APP_PASSWORD is not set in environment variables. Email will not be sent."
    );
    throw new Error(
      "Email service is not configured yet. Please configure GMAIL_USER and GMAIL_APP_PASSWORD in environment settings."
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  // 1. Send notification email to Client / Admin
  const adminMailOptions = {
    from: `"BlueLeaf Website Inquiry" <${gmailUser}>`,
    to: receiverEmail,
    replyTo: data.email,
    subject: `New Inquiry from ${data.name} - BlueLeaf Engineering`,
    text: `New Inquiry from ${data.name}

Full Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Requirement Details:
${data.requirement}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
        <!-- Brand Header -->
        <div style="background: linear-gradient(135deg, #1e40af 0%, #047857 100%); background-color: #1e40af; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
          <div style="display: inline-block;">
            <span style="display: inline-block; width: 32px; height: 32px; line-height: 32px; background-color: rgba(255,255,255,0.2); color: #ffffff; font-weight: bold; border-radius: 8px; font-size: 18px; margin-right: 8px; vertical-align: middle;">🛡️</span>
            <span style="color: #ffffff; font-size: 22px; font-weight: 700; vertical-align: middle;">BlueLeaf Engineering</span>
          </div>
          <p style="color: #cbd5e1; margin: 6px 0 0 0; font-size: 13px; font-weight: 500; letter-spacing: 0.5px;">NEW WEBSITE INQUIRY</p>
        </div>
        
        <!-- Card Body -->
        <div style="background-color: #ffffff; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0; border-top: none;">
          <p style="font-size: 15px; color: #334155; margin-bottom: 20px;">You have received a new inquiry from the website contact form:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569; width: 30%;">Full Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 500;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569;">Email Address:</td>
              <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0f172a;"><a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569;">Phone Number:</td>
              <td style="padding: 10px; border-bottom: 1px solid #f1f5f9; color: #0f172a;"><a href="tel:${data.phone}" style="color: #2563eb; text-decoration: none;">${data.phone}</a></td>
            </tr>
          </table>

          <div style="background-color: #f1f5f9; padding: 16px; border-radius: 8px; border-left: 4px solid #2563eb;">
            <h4 style="margin: 0 0 8px 0; color: #1e293b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Requirement Details:</h4>
            <p style="margin: 0; color: #334155; font-size: 14px; white-space: pre-wrap; line-height: 1.6;">${data.requirement}</p>
          </div>

          <div style="margin-top: 24px; text-align: center; font-size: 12px; color: #94a3b8;">
            Sent automatically via BlueLeaf Engineering Contact System.
          </div>
        </div>
      </div>
    `,
  };

  // 2. Send confirmation email to Customer (Visitor)
  const customerMailOptions = {
    from: `"BlueLeaf Engineering" <${gmailUser}>`,
    to: data.email,
    subject: `Thank you for contacting BlueLeaf Engineering`,
    text: `Dear ${data.name},

Thank you for reaching out to BlueLeaf Engineering! We have received your inquiry regarding "${data.requirement}".
Our team will get back to you within 24 business hours.

Best regards,
BlueLeaf Engineering Team`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
        <!-- Brand Header -->
        <div style="background: linear-gradient(135deg, #1e40af 0%, #047857 100%); background-color: #1e40af; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
          <div style="display: inline-block;">
            <span style="display: inline-block; width: 32px; height: 32px; line-height: 32px; background-color: rgba(255,255,255,0.2); color: #ffffff; font-weight: bold; border-radius: 8px; font-size: 18px; margin-right: 8px; vertical-align: middle;">🛡️</span>
            <span style="color: #ffffff; font-size: 22px; font-weight: 700; vertical-align: middle;">BlueLeaf Engineering</span>
          </div>
          <p style="color: #93c5fd; margin: 6px 0 0 0; font-size: 13px; font-weight: 500;">Industrial Safety & Engineering Solutions</p>
        </div>
        
        <!-- Card Body -->
        <div style="background-color: #ffffff; padding: 28px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0; border-top: none;">
          <h3 style="color: #1e293b; margin-top: 0;">Dear ${data.name},</h3>
          <p style="color: #475569; line-height: 1.6;">Thank you for reaching out to BlueLeaf Engineering! We have received your inquiry and our safety engineering specialists are reviewing your request.</p>
          
          <p style="color: #475569; line-height: 1.6;">Our team will get back to you within <strong>24 business hours</strong> with a tailored proposal.</p>

          <div style="background-color: #f8fafc; border: 1px dashed #cbd5e1; padding: 16px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-size: 13px; color: #64748b; font-weight: 600;">Summary of your request:</p>
            <p style="margin: 6px 0 0 0; font-size: 14px; color: #334155; font-style: italic;">"${data.requirement}"</p>
          </div>

          <p style="color: #475569; line-height: 1.6;">If you need urgent assistance, feel free to call us directly at <strong>+91-98765 43210</strong>.</p>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
          
          <p style="margin: 0; color: #64748b; font-size: 13px;"><strong style="color: #1e293b;">BlueLeaf Engineering Team</strong><br />Safety Engineering Division</p>
        </div>
      </div>
    `,
  };

  // Dispatch emails
  await transporter.sendMail(adminMailOptions);

  // Send confirmation email
  try {
    await transporter.sendMail(customerMailOptions);
  } catch (err) {
    console.error("Failed to send customer confirmation auto-reply:", err);
  }
}
