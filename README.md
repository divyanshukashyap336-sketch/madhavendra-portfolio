# Madhavendra Pratap Singh Gautam - Personal Portfolio

A polished, modern, and responsive personal portfolio website built with clean HTML5, CSS3, and JavaScript.

---

## 📁 Project Structure

```text
madhav-portfolio/
├── index.html        # Main HTML structure and content (Home, About, Skills, Projects, Contact)
├── style.css         # Modern dark theme styles, responsive layouts & typography
├── script.js         # Mobile navigation menu, clipboard email copy, and mailto handler
└── README.md         # Documentation, local preview instructions, and deployment guide
```

---

## 🚀 How to Preview the Site Locally

You can preview the website on your local machine using any of the following methods:

### Method 1: Direct Browser Launch (Simplest)
- Simply double-click on `index.html` in your file explorer.
- It will open immediately in your default browser (Chrome, Edge, Firefox, etc.).

### Method 2: VS Code Live Server (Recommended for development)
1. Open this folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey) if you haven't already.
3. Right-click on `index.html` and select **"Open with Live Server"**.
4. The site will open at `http://127.0.0.1:5500` with automatic reloads whenever you save edits.

### Method 3: Node.js Local Server (Included)
Run the bundled zero-dependency Node server:
```bash
node server.js
```
Then visit `http://localhost:3000` in your web browser.

### Method 4: Python Built-in HTTP Server
If you have Python installed, open PowerShell or Terminal in this folder and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 🌐 How to Deploy to GitHub Pages

Because this portfolio uses pure HTML, CSS, and JavaScript, **no build step or compilation is required**. It deploys directly to GitHub Pages in seconds!

### Step 1: Initialize Git and Commit
Open PowerShell or your terminal in this project directory:
```bash
git init
git add .
git commit -m "Initial commit: Madhavendra's portfolio website"
```

### Step 2: Create a Repository on GitHub
1. Log into your account on [GitHub](https://github.com/).
2. Click **New Repository**.
3. Name it `portfolio` (or `madhavendra.github.io`).
4. Keep it **Public** and do NOT initialize with a README (since you already have one).
5. Click **Create repository**.

### Step 3: Push Your Code
Copy the remote commands shown on GitHub:
```bash
git branch -M main
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/portfolio.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. In your GitHub repository, click on **Settings** (top tab).
2. In the left sidebar, click on **Pages** (under the "Code and automation" section).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` and folder `/ (root)`.
4. Click **Save**.
5. Within 1–2 minutes, GitHub will generate your live URL:
   `https://<YOUR-GITHUB-USERNAME>.github.io/portfolio/`

---

## ✏️ Which Files to Edit to Update Your Information

All primary text and details are centralized and clearly commented with `<!-- EDIT HERE -->` tags in `index.html`:

| What you want to edit | File & Section | Details |
| :--- | :--- | :--- |
| **Name, Title & Tagline** | `index.html` → `<section id="home">` | Change hero titles, education badge, or bio snippet |
| **About Bio & College Info** | `index.html` → `<section id="about">` | Update your background story, interests, and profile table |
| **Technical Skills** | `index.html` → `<section id="skills">` | Add or update skill tags under Frontend, Core CS, and Developer Tools |
| **Projects & Links** | `index.html` → `<section id="projects">` | Update project titles, descriptions, GitHub links, and live demo URLs |
| **Social Media & Contact** | `index.html` → `<section id="contact">` | Replace `your-username` with your real GitHub and LinkedIn profile URLs |
| **Theme Colors & Fonts** | `style.css` → `:root` block | Modify `--accent-primary` (#6366f1), `--bg-primary` (#0a0e17), etc. |

---

## 🎨 Design Features Included

- **Dark Mode Aesthetic**: Elegant deep slate palette with electric indigo and cyan accents.
- **Responsive Layout**: Designed mobile-first, adapting seamlessly across mobile phones, tablets, laptops, and wide screens.
- **Zero Dependencies**: Pure standard HTML5, modern CSS3 variables/Grid/Flexbox, and vanilla JavaScript.
- **Accessible Design**: High contrast text, semantic HTML, visible keyboard focus rings, and ARIA labels.
- **Interactive Details**:
  - One-click copy email button with feedback toast.
  - Active navigation indicator that updates on scroll.
  - Mobile slide-out navigation menu.
  - Smooth in-page navigation.
