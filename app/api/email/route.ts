import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Step 1: Get access token
    const tokenResponse = await axios.post(
      `https://login.microsoftonline.com/${process.env.GRAPH_TENANT_ID}/oauth2/v2.0/token`,
      new URLSearchParams({
        client_id: process.env.GRAPH_CLIENT_ID!,
        client_secret: process.env.GRAPH_CLIENT_SECRET!,
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
      `https://graph.microsoft.com/v1.0/users/${process.env.GRAPH_SENDER_EMAIL}/sendMail`,
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
                address: process.env.GRAPH_SENDER_EMAIL,
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