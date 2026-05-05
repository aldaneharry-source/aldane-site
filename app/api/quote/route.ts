import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json(
        { success: false, error: "Missing Resend API key" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await req.json();

    const {
      name,
      email,
      phone,
      business,
      service,
      budget,
      timeline,
      message,
      privacyConsent,
      marketingConsent,
    } = body;

    await resend.emails.send({
      from: "Aldane Systems <inquiry@aldanesystems.com>",
      to: ["aldane.harry@gmail.com"],
      subject: "New Quote Request",
      html: `
        <h2>New Quote Request</h2>

        <p><strong>Name:</strong> ${name || "Not provided"}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Business / Project:</strong> ${business || "Not provided"}</p>
        <p><strong>Service Needed:</strong> ${service || "Not provided"}</p>
        <p><strong>Budget Range:</strong> ${budget || "Not provided"}</p>
        <p><strong>Desired Timeline:</strong> ${timeline || "Not provided"}</p>

        <p><strong>Project Details:</strong></p>
        <p>${message || "Not provided"}</p>

        <hr />

        <p><strong>Privacy Consent:</strong> ${
          privacyConsent ? "Yes" : "No"
        }</p>
        <p><strong>Marketing Consent:</strong> ${
          marketingConsent ? "Yes" : "No"
        }</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Quote email error:", error);

    return Response.json(
      { success: false, error: "Failed to send quote request" },
      { status: 500 }
    );
  }
}
