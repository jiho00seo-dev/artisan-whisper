/**
 * [Personal] Artisan's Whisper: Subscriber to Notion Logic (Draft)
 * 
 * Jae, this is the logic that will connect your landing page to Notion.
 * You can run this as a simple Node.js server or a Cloudflare Worker.
 */

const { Client } = require('@notionhq/client');

// These will be moved to environment variables for security
const NOTION_TOKEN = process.env.NOTION_TOKEN; 
const DATABASE_ID = process.env.DATABASE_ID;

const notion = new Client({ auth: NOTION_TOKEN });

async function addSubscriber(email, source = 'Landing_Page') {
    try {
        const response = await notion.pages.create({
            parent: { database_id: DATABASE_ID },
            properties: {
                'Email': {
                    title: [
                        {
                            text: {
                                content: email,
                            },
                        },
                    ],
                },
                'Source': {
                    select: {
                        name: source,
                    },
                },
                'Status': {
                    status: {
                        name: 'Lead',
                    },
                },
                'Signed Up': {
                    date: {
                        start: new Date().toISOString(),
                    },
                },
            },
        });
        console.log('Success! Subscriber added to Notion:', response.id);
        return { success: true, id: response.id };
    } catch (error) {
        console.error('Error adding subscriber to Notion:', error.body);
        return { success: false, error: error.message };
    }
}

// Example usage:
// addSubscriber('test@example.com', 'Mobile_Landing');
