/**
 * Artisan's Whisper: Subscriber Sync (Cloudflare Worker Version)
 * 
 * This script acts as a bridge between your Landing Page (HTML Form) 
 * and your Notion Subscriber Database.
 * 
 * SETUP:
 * 1. Create a Cloudflare Worker.
 * 2. Add Environment Variables in Cloudflare Dashboard:
 *    - NOTION_API_KEY: Your Integration Secret
 *    - NOTION_DATABASE_ID: The ID of your subscriber database
 */

export default {
  async fetch(request, env) {
    // Handle CORS Preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    try {
      const { email, source } = await request.json();

      if (!email) {
        return new Response(JSON.stringify({ error: "Email is required" }), { 
          status: 400,
          headers: { "Content-Type": "application/json" }
        });
      }

      const response = await fetch("https://api.notion.com/v1/pages", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${env.NOTION_API_KEY}`,
          "Content-Type": "application/json",
          "Notion-Version": "2022-06-28"
        },
        body: JSON.stringify({
          parent: { database_id: env.NOTION_DATABASE_ID },
          properties: {
            "Email": {
              title: [
                { text: { content: email } }
              ]
            },
            "Source": {
              select: { name: source || "Direct" }
            },
            "Status": {
              status: { name: "Lead" }
            },
            "Signup Date": {
              date: { start: new Date().toISOString() }
            }
          }
        })
      });

      const result = await response.json();

      return new Response(JSON.stringify({ success: true, id: result.id }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });

    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), { 
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
};
