from pathlib import Path
import html
import textwrap


OUT_DIR = Path("resume")
PDF_PATH = OUT_DIR / "Ibrahim_Musallam_Resume.pdf"
HTML_PATH = OUT_DIR / "Ibrahim_Musallam_Resume.html"


resume = {
    "name": "Ibrahim Musallam",
    "headline": "Commercially driven Year 12 Business student, entrepreneur, and problem solver",
    "contact": [
        "ibrahimmusallam10@gmail.com",
        "+44 7368 822209",
        "linkedin.com/in/ibrahim-musallam-44045a381",
    ],
    "profile": [
        "BTEC Business student with proven real-world experience in entrepreneurship, retail, mentoring, and fundraising.",
        "Scaled Ibrahim's Concierge UK from a GBP 250 investment into a five-figure operation while balancing full-time education.",
        "Seeking an apprenticeship or professional environment where I can apply commercial thinking, discipline, and initiative.",
    ],
    "experience": [
        {
            "role": "Founder / Owner",
            "company": "Ibrahim's Concierge UK",
            "date": "Nov 2023 - Present",
            "bullets": [
                "Increased annual sales by 157% between 2024 and 2025 through market analysis and reinvestment strategies.",
                "Managed end-to-end sourcing, client communication, product selection, and fulfilment while balancing full-time education.",
                "Analysed customer buying habits to optimise pricing, profit margins, and product turnover.",
            ],
        },
        {
            "role": "Retail Sales Assistant",
            "company": "Kick Game, Covent Garden",
            "date": "Jun 2024",
            "bullets": [
                "Delivered high-quality customer service and processed transactions accurately in a fast-paced retail environment.",
                "Supported store presentation, stock organisation, and customer experience across premium streetwear and footwear.",
                "Developed professionalism, teamwork, and responsibility while working alongside experienced retail staff.",
            ],
        },
        {
            "role": "Youth Mentor",
            "company": "St Aloysius' College",
            "date": "Dec 2025 - Present",
            "bullets": [
                "Mentor Year 7 students weekly, supporting academic development and confidence building.",
                "Translate complex academic concepts into accessible lessons through clear communication and patience.",
            ],
        },
        {
            "role": "Company Secretary, HR & Finance Operations",
            "company": "Young Enterprise",
            "date": "2025 - Present",
            "bullets": [
                "Supported an award-winning London and Essex Young Enterprise company that progressed to the UK Finals.",
                "Coordinated administration, records, meetings, HR responsibilities, and finance operations for a student-run company.",
            ],
        },
    ],
    "education": [
        ("St Aloysius RC College", "2025 - Present", "Level 3 National Extended Diploma in Business - Predicted D*D*D"),
        ("St Aloysius RC College", "2020 - 2025", "10 GCSEs including English and Maths"),
    ],
    "skills": [
        "Business Development",
        "Customer Service",
        "Sales Strategy",
        "Market Analysis",
        "Communication",
        "Mentoring",
        "Time Management",
        "Problem Solving",
    ],
    "achievements": [
        "Raised GBP 2,000+ for charity within four months in 2025.",
        "Active investor in digital assets with an interest in financial market analysis.",
        "Regular networking attendance to develop professional relationships.",
        "Strong self-management, discipline, and accountability.",
    ],
    "interests": "Gym, football, networking, investing, entrepreneurship, business systems, problem solving.",
}


def html_resume():
    def section(title, content):
        return f"<section><h2>{html.escape(title)}</h2>{content}</section>"

    exp = []
    for item in resume["experience"]:
        bullets = "".join(f"<li>{html.escape(b)}</li>" for b in item["bullets"])
        exp.append(
            f"""
            <article class="experience">
              <div class="date">{html.escape(item["date"])}</div>
              <div>
                <h3>{html.escape(item["role"])}</h3>
                <p class="company">{html.escape(item["company"])}</p>
                <ul>{bullets}</ul>
              </div>
            </article>
            """
        )

    education = "".join(
        f"<p><strong>{html.escape(school)}</strong><br>{html.escape(date)}<br>{html.escape(detail)}</p>"
        for school, date, detail in resume["education"]
    )
    interests_html = f"<p>{html.escape(resume['interests'])}</p>"
    skills = "".join(f"<li>{html.escape(skill)}</li>" for skill in resume["skills"])
    achievements = "".join(f"<li>{html.escape(item)}</li>" for item in resume["achievements"])
    profile = "".join(f"<p>{html.escape(p)}</p>" for p in resume["profile"])
    contact = "".join(f"<li>{html.escape(item)}</li>" for item in resume["contact"])

    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{html.escape(resume["name"])} Resume</title>
  <style>
    @page {{ size: A4; margin: 0; }}
    * {{ box-sizing: border-box; }}
    body {{
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      color: #1f2933;
      background: #f3f4f6;
      font-size: 11px;
      line-height: 1.35;
    }}
    main {{
      width: 210mm;
      min-height: 297mm;
      margin: 0 auto;
      padding: 17mm;
      background: white;
      display: grid;
      grid-template-columns: 58mm 1fr;
      gap: 13mm;
    }}
    h1 {{ margin: 0 0 5px; font-size: 25px; line-height: 1.05; color: #0f172a; }}
    .headline {{ margin: 0 0 16px; font-size: 12px; font-weight: 700; color: #334155; }}
    h2 {{
      margin: 0 0 8px;
      color: #0f172a;
      font-size: 10px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
    }}
    h3 {{ margin: 0 0 2px; font-size: 12px; color: #0f172a; }}
    section {{ margin-bottom: 17px; }}
    p {{ margin: 0 0 7px; }}
    ul {{ margin: 0; padding-left: 15px; }}
    li {{ margin-bottom: 4px; }}
    .contact {{ padding: 0; list-style: none; color: #475569; overflow-wrap: anywhere; }}
    .experience {{
      display: grid;
      grid-template-columns: 74px 1fr;
      gap: 11px;
      margin-bottom: 15px;
    }}
    .date {{ color: #64748b; font-size: 9px; font-weight: 700; text-transform: uppercase; }}
    .company {{ color: #475569; font-weight: 700; margin-bottom: 5px; }}
    aside section {{ border-top: 1px solid #d8dee8; padding-top: 11px; }}
    aside section:first-of-type {{ border-top: none; padding-top: 0; }}
  </style>
</head>
<body>
  <main>
    <aside>
      <h1>{html.escape(resume["name"])}</h1>
      <p class="headline">{html.escape(resume["headline"])}</p>
      {section("Contact", f"<ul class='contact'>{contact}</ul>")}
      {section("Profile", profile)}
      {section("Education", education)}
      {section("Skills", f"<ul>{skills}</ul>")}
      {section("Achievements", f"<ul>{achievements}</ul>")}
      {section("Interests", interests_html)}
    </aside>
    <section>
      <h2>Relevant Experience</h2>
      {"".join(exp)}
    </section>
  </main>
</body>
</html>
"""


def pdf_escape(text):
    text = text.replace("—", "-").replace("–", "-").replace("’", "'").replace("“", '"').replace("”", '"')
    data = text.encode("latin-1", "replace")
    out = []
    for b in data:
        if b in (40, 41, 92):
            out.append("\\" + chr(b))
        elif b < 32 or b > 126:
            out.append(f"\\{b:03o}")
        else:
            out.append(chr(b))
    return "".join(out)


class PDF:
    def __init__(self):
        self.ops = []
        self.page_w = 595
        self.page_h = 842

    def text(self, x, y, value, size=9, font="F1", leading=None):
        leading = leading or size * 1.25
        self.ops.append(f"BT /{font} {size} Tf {leading:.2f} TL 1 0 0 1 {x:.2f} {y:.2f} Tm ({pdf_escape(value)}) Tj ET")

    def line(self, x1, y1, x2, y2, width=0.5):
        self.ops.append(f"{width:.2f} w {x1:.2f} {y1:.2f} m {x2:.2f} {y2:.2f} l S")

    def wrap(self, text, width, size=9):
        chars = max(18, int(width / (size * 0.48)))
        return textwrap.wrap(text, width=chars, break_long_words=False)

    def paragraph(self, x, y, text, width, size=9, font="F1", gap=3):
        for line in self.wrap(text, width, size):
            self.text(x, y, line, size, font)
            y -= size * 1.28
        return y - gap

    def bullets(self, x, y, items, width, size=8.5):
        for item in items:
            lines = self.wrap(item, width - 10, size)
            self.text(x, y, "-", size, "F1")
            self.text(x + 8, y, lines[0], size, "F1")
            y -= size * 1.25
            for line in lines[1:]:
                self.text(x + 8, y, line, size, "F1")
                y -= size * 1.25
            y -= 2
        return y

    def section_title(self, x, y, title, width):
        self.text(x, y, title.upper(), 8.5, "F2")
        self.line(x, y - 5, x + width, y - 5, 0.45)
        return y - 16

    def save(self, path):
        content = "\n".join(self.ops).encode("latin-1", "replace")
        objects = []
        objects.append(b"<< /Type /Catalog /Pages 2 0 R >>")
        objects.append(b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>")
        objects.append(b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>")
        objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
        objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")
        objects.append(f"<< /Length {len(content)} >>\nstream\n".encode() + content + b"\nendstream")
        data = bytearray(b"%PDF-1.4\n")
        offsets = [0]
        for i, obj in enumerate(objects, 1):
            offsets.append(len(data))
            data.extend(f"{i} 0 obj\n".encode())
            data.extend(obj)
            data.extend(b"\nendobj\n")
        xref = len(data)
        data.extend(f"xref\n0 {len(objects)+1}\n0000000000 65535 f \n".encode())
        for off in offsets[1:]:
            data.extend(f"{off:010d} 00000 n \n".encode())
        data.extend(f"trailer << /Size {len(objects)+1} /Root 1 0 R >>\nstartxref\n{xref}\n%%EOF\n".encode())
        path.write_bytes(data)


def draw_resume_pdf():
    pdf = PDF()
    left_x, left_w = 42, 170
    right_x, right_w = 238, 315
    y = 790

    pdf.text(left_x, y, resume["name"], 23, "F2")
    y -= 19
    y = pdf.paragraph(left_x, y, resume["headline"], left_w, 9.5, "F2", 10)

    y = pdf.section_title(left_x, y, "Contact", left_w)
    for item in resume["contact"]:
        y = pdf.paragraph(left_x, y, item, left_w, 8.4, "F1", 1.5)
    y -= 7

    y = pdf.section_title(left_x, y, "Profile", left_w)
    for p in resume["profile"]:
        y = pdf.paragraph(left_x, y, p, left_w, 8.5, "F1", 4)
    y -= 3

    y = pdf.section_title(left_x, y, "Education", left_w)
    for school, date, detail in resume["education"]:
        pdf.text(left_x, y, school, 8.8, "F2")
        y -= 11
        y = pdf.paragraph(left_x, y, f"{date} - {detail}", left_w, 8.2, "F1", 6)

    y = pdf.section_title(left_x, y, "Skills", left_w)
    y = pdf.bullets(left_x, y, resume["skills"], left_w, 8.1)

    y = pdf.section_title(left_x, y, "Achievements", left_w)
    y = pdf.bullets(left_x, y, resume["achievements"], left_w, 8.0)

    ry = 762
    ry = pdf.section_title(right_x, ry, "Relevant Experience", right_w)
    for item in resume["experience"]:
        pdf.text(right_x, ry, item["date"], 7.6, "F2")
        pdf.text(right_x + 84, ry, item["role"], 10.2, "F2")
        ry -= 12
        pdf.text(right_x + 84, ry, item["company"], 8.6, "F2")
        ry -= 12
        ry = pdf.bullets(right_x + 84, ry, item["bullets"], right_w - 84, 8.1)
        ry -= 8

    ry = pdf.section_title(right_x, ry, "Interests", right_w)
    pdf.paragraph(right_x, ry, resume["interests"], right_w, 8.4, "F1", 0)

    pdf.save(PDF_PATH)


def main():
    OUT_DIR.mkdir(exist_ok=True)
    HTML_PATH.write_text(html_resume(), encoding="utf-8")
    draw_resume_pdf()
    print(PDF_PATH)
    print(HTML_PATH)


if __name__ == "__main__":
    main()
