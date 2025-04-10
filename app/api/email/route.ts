import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Step 1: Get access token
    const tokenResponse = await axios.post(
      `https://login.microsoftonline.com/f7ba4e6d-9e6b-47e3-aab6-800536bc5404/oauth2/v2.0/token`,
      new URLSearchParams({
        client_id: '531570d5-b1c3-441e-afc5-b1039b538894',
        client_secret: 'lRE8Q~MrMMc~hHIoeS9kDBIZpL45wM6Lw3K8-aum',
        scope: "https://graph.microsoft.com/.default",
        grant_type: "client_credentials",
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const accessToken = tokenResponse.data.access_token;

    // Step 2: Send mail via Graph API
    const response = await axios.post(
      `https://graph.microsoft.com/v1.0/users/hello@synoptix.ai/sendMail`,
      {
        message: {
          subject: "New contact form message",
          body: {
            contentType: "HTML",
            content: `
              <p><strong>From:</strong> ${name} (${email})</p>
              <p><strong>Message:</strong><br/>${message}</p>
            `,
          },
          toRecipients: [
            {
              emailAddress: {
                address: "hello@synoptix.ai",
              },
            },
          ],
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error sending email:", error.response?.data || error.message);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

// This handler is not needed with App Router, but added for completeness
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}