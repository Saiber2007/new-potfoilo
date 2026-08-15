import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Rate Limiter: Max 5 contact requests per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many contact requests from this IP, please try again after 15 minutes.' }
});

app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, subject, message, toEmail } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const recipient = toEmail || process.env.CONTACT_TO_EMAIL || 'dixitdabhi28@gmail.com';

    // If SMTP environment variables are configured
    if (process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT) || 587,
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      await transporter.sendMail({
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        replyTo: email,
        to: recipient,
        subject: `[Cybersecurity Portfolio Inquiry] ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #040711; color: #e2e8f0; padding: 20px; border-radius: 8px;">
            <h2 style="color: #00f0ff; border-bottom: 1px solid #152347; padding-bottom: 10px;">Cybersecurity Portfolio Contact Message</h2>
            <p><strong>From:</strong> ${name} (&lt;${email}&gt;)</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="background-color: #080e21; padding: 15px; border-left: 4px solid #00ff66; margin-top: 15px;">
              <p style="white-space: pre-wrap; margin: 0;">${message}</p>
            </div>
          </div>
        `
      });
    } else {
      console.log(`[Contact Form Dispatch Simulation] To: ${recipient} | From: ${name} (${email}) | Subject: ${subject}`);
    }

    return res.status(200).json({ success: true, message: 'Message delivered successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to deliver message.' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', system: 'Dixit Dabhi Portfolio Backend', time: new Date() });
});

app.listen(PORT, () => {
  console.log(`[Server Ready] Listening on http://localhost:${PORT}`);
});
