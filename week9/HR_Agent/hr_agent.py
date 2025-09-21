import re
import json
import os
from datetime import datetime, timedelta
from collections import Counter

# ========== Utils for Shortlists ==========
def save_shortlist(shortlists, name, results, candidate_indices, filename=None):
    if filename is None:
        filename = os.path.join(os.path.dirname(__file__), "data", "shortlists.json")

    selected = [results[i-1]["candidate"] for i in candidate_indices if 0 < i <= len(results)]
    shortlists[name] = selected

    with open(filename, "w", encoding="utf-8") as f:
        json.dump(shortlists, f, indent=2, ensure_ascii=False)

    return shortlists


def load_shortlists(filename=None):
    if filename is None:
        filename = os.path.join(os.path.dirname(__file__), "data", "shortlists.json")

    if os.path.exists(filename) and os.path.getsize(filename) > 0:
        with open(filename, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}

# ========== Parsing Query ==========
def parse_query(text):
    text = text.lower()
    filters = {
        "role": None,
        "skills": [],
        "location": None,
        "minExp": None,
        "maxExp": None,
        "availabilityWindowDays": None
    }

    if "intern" in text:
        filters["role"] = "intern"

    match_loc = re.search(r"in (\w+)", text)
    if match_loc:
        filters["location"] = match_loc.group(1).capitalize()

    match_exp = re.search(r"(\d+)[-–](\d+)\s*year", text)
    if match_exp:
        filters["minExp"] = int(match_exp.group(1))
        filters["maxExp"] = int(match_exp.group(2))

    if "this month" in text:
        filters["availabilityWindowDays"] = 30
    elif "next" in text and "days" in text:
        match_days = re.search(r"next (\d+)\s*days", text)
        if match_days:
            filters["availabilityWindowDays"] = int(match_days.group(1))

    skills_list = ["react", "js", "python", "sql", "git", "html", "css"]
    for skill in skills_list:
        if skill in text:
            filters["skills"].append(skill.capitalize())

    return filters

# ========== Search Candidates ==========
def search_candidates(filters, candidates, top_n=5):
    results = []
    for cand in candidates:
        score = 0
        reasons = []

        matched_skills = set(s.lower() for s in cand["skills"]) & set(s.lower() for s in filters["skills"])
        if matched_skills:
            pts = len(matched_skills) * 2
            score += pts
            reasons.append(f"{'+'.join(matched_skills)} match (+{pts})")

        if filters["location"] and cand["location"].lower() == filters["location"].lower():
            score += 1
            reasons.append(f"{cand['location']} (+1)")

        if filters["minExp"] is not None and filters["maxExp"] is not None:
            minE, maxE = filters["minExp"], filters["maxExp"]
            if minE - 1 <= cand["experienceYears"] <= maxE + 1:
                score += 1
                reasons.append(f"{cand['experienceYears']}y fits (±1) (+1)")

        if filters["availabilityWindowDays"]:
            avail_date = datetime.strptime(cand["availabilityDate"], "%Y-%m-%d")
            limit_date = datetime.today() + timedelta(days=filters["availabilityWindowDays"])
            if avail_date <= limit_date:
                score += 1
                reasons.append(f"available by {cand['availabilityDate']} (+1)")

        results.append({
            "candidate": cand,
            "score": score,
            "reason": ", ".join(reasons)
        })

    results.sort(key=lambda x: x["score"], reverse=True)
    return results[:top_n]

# ========== Draft Email ==========
def draft_email(recipients, job, tone="friendly"):
    subject = f"{job['title']} Opportunity at Our Company"
    greetings = []
    for cand in recipients:
        greetings.append(f"Hi {cand['firstName']},\nWe reviewed your background and think you'd be a great fit for {job['title']} in {job['location']}.\nLet us know if you're interested!")
    text = "\n".join(greetings) + "\nBest regards,\nHR Team"
    return {"subject": subject, "text": text}

def edit_email(email, new_subject=None, new_closing=None):
    if new_subject:
        email["subject"] = new_subject
    if new_closing:
        lines = email["text"].split("\n")
        if len(lines) >= 2:
            lines = lines[:-2]   # نحذف آخر جوج أسطر (closing القديم)
        lines.append(new_closing)
        email["text"] = "\n".join(lines)
    return email

def html_template(email):
    return f"""
    <html>
    <body style="font-family:Arial, sans-serif; line-height:1.5; color:#333;">
        <h3 style="color:#2c3e50;">{email['subject']}</h3>
        <p>{email['text'].replace("\n", "<br>")}</p>
    </body>
    </html>
    """

# ========== Analytics ==========
def analytics_summary(candidates):
    stages = Counter(c["stage"] for c in candidates)
    skills = Counter(s for c in candidates for s in c["skills"])
    top_skills = skills.most_common(3)
    return {"countByStage": dict(stages), "topSkills": top_skills}

# ========== Helpers ==========
def show_help():
    print("Examples:")
    print("find 5 React interns in Casablanca, 0–2 years, available this month")
    print("save #1 #2 as \"FE-Intern-A\"")
    print("draft email for \"FE-Intern-A\" job \"Frontend Intern\" tone friendly")
    print("edit subject \"New subject here\" for last email")
    print("edit closing \"New closing here\" for last email")
    print("list shortlists")
    print("show shortlist \"FE-Intern-A\"")
    print("show analytics")
    print("quit")

# ========== MAIN CLI ==========
if __name__ == "__main__":
    with open("data/candidates.json", "r", encoding="utf-8") as f:
        candidates = json.load(f)
    with open("data/jobs.json", "r", encoding="utf-8") as f:
        jobs = json.load(f)

    shortlists = load_shortlists()
    results = []
    email = None

    print("HR Agent CLI ready. Type 'help' for commands.")

    while True:
        raw_command = input("\n>> ").strip()
        command = raw_command.lower()

        if command.startswith("find"):
            filters = parse_query(raw_command)
            results = search_candidates(filters, candidates)
            print("\n=== Search Results ===")
            for i, r in enumerate(results, 1):
                cand = r["candidate"]
                print(f"#{i}: {cand['firstName']} {cand['lastName']} → Score {r['score']} | {r['reason']}")

        elif command.startswith("save"):
            match = re.search(r'save #([\d\s#]+) as "(.+)"', raw_command, re.IGNORECASE)
            if match:
                indices = [int(x.strip("#")) for x in match.group(1).split() if x.strip("#").isdigit()]
                name = match.group(2)
                shortlists = save_shortlist(shortlists, name, results, indices)
                print(f"\nShortlist saved: ['{name}']")

        elif command == "list shortlists":
            print("\n=== Shortlists ===")
            for name, cands in shortlists.items():
                print(f"- {name} ({len(cands)} candidates)")

        elif command.startswith("show shortlist"):
            match = re.search(r'show shortlist "?(.+?)"?$', raw_command, re.IGNORECASE)
            if match:
                name = match.group(1)
                if name in shortlists:
                    cands = shortlists[name]
                    print(f"\nShortlist '{name}' ({len(cands)}):")
                    for i, cand in enumerate(cands):
                        skills_str = ", ".join(cand["skills"])
                        print(f"#{i} {cand['firstName']} {cand['lastName']} | {cand['location']} | {cand['experienceYears']}y | skills: {skills_str}")
                else:
                    print("Shortlist not found.")

        elif command.startswith("draft"):
            match = re.search(r'draft email for "(.+)" job "(.+)" tone (\w+)', raw_command, re.IGNORECASE)
            if match:
                shortlist_name = match.group(1)
                job_title = match.group(2)
                tone = match.group(3)
                recipients = shortlists.get(shortlist_name, [])
                job = next((j for j in jobs if j["title"].lower() == job_title.lower()), None)
                if recipients and job:
                    email = draft_email(recipients, job, tone)
                    print("\n=== Email Preview ===")
                    print("Subject:", email["subject"])
                    print("\nPlain text:\n", email["text"])
                    print("\nHTML Preview:\n", html_template(email))

        elif command.startswith("edit subject"):
            match = re.search(r'edit subject "(.+)" for last email', raw_command, re.IGNORECASE)
            if match and email:
                new_subject = match.group(1)
                email = edit_email(email, new_subject=new_subject)
                print("\n=== Updated Email Preview ===")
                print("Subject:", email["subject"])
                print("\nPlain text:\n", email["text"])
                print("\nHTML Preview:\n", html_template(email))

        elif command.startswith("edit closing"):
            match = re.search(r'edit closing "(.+)" for last email', raw_command, re.IGNORECASE)
            if match and email:
                new_closing = match.group(1)
                email = edit_email(email, new_closing=new_closing)
                print("\n=== Updated Email Preview ===")
                print("Subject:", email["subject"])
                print("\nPlain text:\n", email["text"])
                print("\nHTML Preview:\n", html_template(email))

        elif command == "show analytics":
            stats = analytics_summary(candidates)
            print("\n=== Analytics ===")
            print("Pipeline by stage:", stats["countByStage"])
            print("Top skills:", stats["topSkills"])

        elif command == "quit":
            print("Exiting HR Agent CLI...")
            break

        elif command in ["help", "?", "h"]:
            show_help()

        else:
            print("Unknown command. Type 'help' to see options.")
