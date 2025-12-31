import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { name, email, message } = await req.json();

    // Forward the contact message to your email
    await base44.integrations.Core.SendEmail({
      from_name: "EYBERS Contact Form",
      to: "eybers.cansat@gmail.com",
      subject: `New Contact Message from ${name}`,
      body: `
You received a new contact message:

From: ${name} (${email})

Message:
${message}

---
This message was sent via the EYBERS website contact form.
      `
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});