import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// Shared Zod schema for both forms
const FormSchema = z.object({
  type: z.enum(["contact", "quote"]),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  countryCode: z.string().optional(),
  
  // Contact specific
  service: z.string().optional(),
  message: z.string().optional(),

  // Quote specific
  companyName: z.string().optional(),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  description: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate body
    const validatedData = FormSchema.parse(body);

    // Setup Nodemailer transport using port 587 to bypass potential port 465 blocks
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // use false for STARTTLS; true is for 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let subject = "";
    let htmlContent = "";

    const fullPhone = `${validatedData.countryCode || ""} ${validatedData.phone || ""}`.trim();

    if (validatedData.type === "contact") {
      subject = `New Contact Request from ${validatedData.fullName}`;
      htmlContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.fullName}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${fullPhone}</p>
        <p><strong>Service Interest:</strong> ${validatedData.service || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message || "N/A"}</p>
      `;
    } else if (validatedData.type === "quote") {
      subject = `New Quote Request from ${validatedData.fullName} (${validatedData.companyName || "Individual"})`;
      htmlContent = `
        <h2>New Quote Request Submission</h2>
        <p><strong>Name:</strong> ${validatedData.fullName}</p>
        <p><strong>Company:</strong> ${validatedData.companyName || "N/A"}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${fullPhone}</p>
        <p><strong>Project Type:</strong> ${validatedData.projectType || "N/A"}</p>
        <p><strong>Estimated Budget:</strong> ${validatedData.budget || "N/A"}</p>
        <p><strong>Project Description:</strong></p>
        <p>${validatedData.description || "N/A"}</p>
      `;
    }

    const mailOptions = {
      from: process.env.EMAIL_USER, // The sender is the authenticated Gmail account
      to: "datamegathos@gmail.com", // Send to self or configured receiver
      replyTo: validatedData.email,
      subject,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error processing form:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Failed to send email. Ensure SMTP settings are configured properly." },
      { status: 500 }
    );
  }
}
