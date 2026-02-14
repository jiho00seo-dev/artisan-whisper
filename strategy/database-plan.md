# [Personal] Artisan's Whisper: Database & Email Logic 🗄️

Jae, regarding your question about the database (DB): **Yes, you need a way to store those emails**, but the "how" depends on your preferred workflow. Here is the best path forward.

## 1. Do you need a separate DB?
- **Case A: Using a Newsletter Platform (Stibee/Maily):** No separate DB required. We can connect your landing page directly to their API. The emails will be stored in their "Subscriber List."
- **Case B: Building a Private List:** Yes, we need a DB. This gives you **100% ownership** of your data and allows you to switch platforms easily.

## 2. Chunjae's Recommendation: Supabase (PostgreSQL) 🚀
For a premium project, I recommend **Supabase**. It is free for this scale, extremely fast, and feels "pro."

### 📜 Database Schema (Proposed):
I have designed a simple but extensible schema for you:

| Column Name | Type | Description |
| :--- | :--- | :--- |
| `id` | UUID | Unique ID for each subscriber |
| `email` | String | The subscriber's email address |
| `created_at` | Timestamp | When they signed up |
| `source` | String | Where they signed up (e.g., "Landing_Mobile", "Landing_PC") |
| `status` | String | "Active", "Unsubscribed" |

## 3. Next Step: Integration
Once you decide between **Case A** (Direct to Platform) or **Case B** (Private DB), I will write the `form-handler.js` to make the "Subscribe" button actually work.

---

## 💡 Chunjae's Proactive Tip:
"Jae, if you want to move fast, **Case A (Stibee API)** is best. If you want to build a long-term asset you can control forever, **Case B (Supabase)** is the way. Let me know which one feels more 'Artisan' to you, and I'll prep the setup!"

*Prepared for the next phase of the Artisan's Whisper launch.*
