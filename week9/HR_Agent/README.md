Got it 👍
Here’s your **complete `README.md` file content** — you can copy-paste it directly into a file called `README.md` inside your project folder:

```markdown
# 🤖 HR AI Agent Assistant

The **HR AI Agent Assistant** is a smart CLI tool designed to help HR teams with:
- Searching for candidates by skills, experience, and location  
- Creating and managing shortlists  
- Drafting and previewing candidate emails  
- Viewing analytics about the hiring pipeline and most common skills  

---

## 🚀 Features

- 🔍 Smart candidate search (using AI to understand natural language queries)  
- 📋 Create and save candidate shortlists locally  
- 📧 Draft and preview personalized candidate emails  
- 📊 Simple analytics for stages and top skills  
- 💬 Natural language commands  

---

## 📂 Project Structure

```

HR\_Agent/
│
├── data/
│   ├── candidates.json     # List of candidates
│   ├── positions.json      # List of job positions
│   └── shortlists.json     # Saved shortlists
│
├── hr\_agent.py             # Main CLI code
├── requirements.txt        # Dependencies
└── README.md               # This file

````

---

## ⚙️ Installation

1. Clone the project:
```bash
git clone https://github.com/your-repo/hr-ai-agent.git
cd hr-ai-agent
````

2. Create a virtual environment and install dependencies:

```bash
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows

pip install -r requirements.txt
```

3. Create a `.env` file in the project root and add:

```
GITHUB_API_Key=your_token_here
BASE_URL=https://models.github.ai/inference
MODEL=openai/gpt-4o-mini
```

---

## ▶️ Usage

Run the CLI:

```bash
python hr_agent.py
```

You’ll see:

```
🤖 AI HR Agent: Hello! How can I help you?
>
```

---

## 🖥️ Example Commands

### 🔍 Search candidates

```
> Find me 5 React interns in Casablanca, 0–2 years, available this month
```

Output:

```
Found top 2 results:
#01 Sara Haddad — sara@example.com — Casablanca — 1y — score 4 — React match (+2), Casablanca (+1), 1y fits (+1)
#02 Lina Mouline — lina@example.com — Casablanca — 2y — score 3 — React match (+2), Casablanca (+1)
```

### 📋 Create a shortlist

```
> Choose 1 2 as FE-Intern-A
```

```
Shortlist 'FE-Intern-A' saved with 2 candidates.
```

### 👀 Show shortlist

```
> Show shortlist FE-Intern-A
```

```
Candidates in 'FE-Intern-A':
#1 Sara Haddad — sara@example.com — Casablanca — 1y
#2 Lina Mouline — lina@example.com — Casablanca — 2y
```

### 📧 Draft an email

```
> Send email using Frontend Intern from FE-Intern-A
```

Output:

```
--- SUBJECT ---
Frontend Intern Interview Invitation

--- TO ---
sara@example.com

--- PLAINTEXT ---
Dear Sara,

We are pleased to inform you that you have been shortlisted for an interview for the Frontend Intern position.

Please let us know your availability for a 30-minute interview this week.

Best regards,
Recruitment Team
```

### 📊 Show analytics

```
> Give me analytics
```

Output:

```
Pipeline by stage:
  Applied = 10
  Interview = 5
  Offer = 2

Top skills:
  React (7)
  Python (5)
  SQL (4)
```

### 🚪 Exit

```
> Exit
```

---

## 📦 Requirements

* Python 3.9+
* Libraries:

  * `requests`
  * `python-dotenv`

Install with:

```bash
pip install -r requirements.txt
```

---

## 📝 Notes

* `shortlists.json` updates automatically when you create a new shortlist.
* `.env` file is required to connect to GitHub Models API.
* Emails (subject and closing) can be edited directly from the CLI.

---

## 👨‍💻 Author

This is an experimental project to learn how to build an **AI-powered HR Assistant CLI** using Python + GitHub Models API.

```

---

Would you also like me to generate the **`requirements.txt` file** for you, so you just install dependencies directly?
```
