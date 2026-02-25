# [Personal] Artisan's Whisper: Notion Database Schema Guide 🏗️

To make the automated subscriber sync work perfectly, please set up your Notion database with these exact **Property Names** and **Types**:

| Property Name | Property Type | Description |
| :--- | :--- | :--- |
| **Email** | **Title** | This is the default 'Name' field. Rename it to 'Email'. |
| **Source** | **Select** | Options: `Landing_PC`, `Landing_Mobile`, `Instagram`. |
| **Status** | **Status** | Default is fine. Script sets new entries to `Lead`. |
| **Signup Date** | **Date** | Tracks when they joined the whisper. |

## 🚀 How to use the Sync Script:
1.  **Duplicate** this schema in a new Notion Database.
2.  **Create an Integration** at [notion.so/my-integrations](https://www.notion.so/my-integrations).
3.  **Give the Integration Access** to your new database (Click '...' on the DB page -> Connect to).
4.  **Deploy the Script**: Use the `strategy/subscriber-sync.js` I just created for you in a Cloudflare Worker.

---
*Generated during Heartbeat Routine to accelerate Issue #1 Launch.*
