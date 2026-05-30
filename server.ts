import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse incoming requests
  app.use(express.json());

  // API contact submission route
  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const emailTo = "rishi.raj.shukla7883@gmail.com";
    const smtpUser = process.env.EMAIL_USER;
    const smtpPass = process.env.EMAIL_PASS;

    // Output submission to logs for administrative auditing
    console.log(`[Form Submission Received] - Sender: ${name} <${email}>, Subject: ${subject}`);

    // Fallback if no server-side credentials are configured yet
    if (!smtpUser || !smtpPass) {
      console.warn("EMAIL_USER or EMAIL_PASS environment variables are not set. Saving message locally in localStorage on client side.");
      return res.json({
        success: true,
        savedLocally: true,
        message: "Message received locally on system mock. Configure EMAIL_USER and EMAIL_PASS environment variables to activate email sending."
      });
    }

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: smtpUser,
          pass: smtpPass
        }
      });

      const mailOptions = {
        from: `"${name}" <${smtpUser}>`,
        replyTo: email,
        to: emailTo,
        subject: `[Portfolio Contact UI] - ${subject}`,
        text: `You have received a new message from your portfolio website form:\n\n` +
              `Full Name: ${name}\n` +
              `Email Address: ${email}\n` +
              `Subject Header: ${subject}\n\n` +
              `Message Details:\n${message}\n\n` +
              `---\nTransited at: ${new Date().toISOString()}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 25px; border: 1px dashed #f97316; border-radius: 12px; background-color: #fafafa;">
            <h2 style="color: #f97316; margin-top: 0; border-bottom: 2px solid #eaeaea; padding-bottom: 12px; font-weight: 600;">Contact Form Transit</h2>
            <p style="font-size: 14px; margin-bottom: 12px; color: #333;"><strong>Name Pin:</strong> ${name}</p>
            <p style="font-size: 14px; margin-bottom: 12px; color: #333;"><strong>Sender Mail:</strong> <a href="mailto:${email}" style="color: #f97316; text-decoration: none; font-weight: 500;">${email}</a></p>
            <p style="font-size: 14px; margin-bottom: 20px; color: #333;"><strong>Subject:</strong> ${subject}</p>
            <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #f97316; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #444; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
              <strong>Message Body:</strong><br />
              <p style="margin-top: 8px; white-space: pre-wrap; color: #222;">${message}</p>
            </div>
            <p style="font-size: 11px; color: #888; margin-top: 25px; border-top: 1px solid #eaeaea; padding-top: 12px; font-style: italic;">Transmitted at: ${new Date().toLocaleString()}</p>
          </div>
        `
      };

      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: "Message emailed successfully" });
    } catch (error: any) {
      console.error("Error dispatching email via SMTP Transport:", error);
      res.status(500).json({ error: "Failed to dispatch email over nodemailer. Check server setup logs." });
    }
  });

  // Vite middleware for development loading
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server starting and binding on http://localhost:${PORT}`);
  });
}

startServer();
