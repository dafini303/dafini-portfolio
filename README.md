# Dafini | Portfolio website

Plain HTML, CSS and JavaScript. No build step and no installs needed.

```
portfolio/
├── index.html      page structure, SEO tags, accessibility
├── style.css       all styling (white and navy theme, responsive)
├── script.js       interactions + ALL your editable details (see PROFILE at the top)
├── robots.txt      search engine rules
├── sitemap.xml     page list for search engines
└── assets/         put Dafini-Resume.pdf here
```

## 1. Run it in VS Code

1. Install VS Code from https://code.visualstudio.com
2. Open VS Code, choose **File > Open Folder** and pick the `portfolio` folder.
3. Open the Extensions panel (Ctrl+Shift+X), search for **Live Server** (by Ritwick Dey) and install it.
4. Right-click `index.html` and choose **Open with Live Server**. The site opens at `http://127.0.0.1:5500` and refreshes each time you save.
   (Without the extension you can also double-click `index.html`. Use Live Server when you want to test the resume download check.)

## 2. Add your own details (nothing here is invented)

Open `script.js`. Everything in the block marked **EDIT YOUR DETAILS HERE** is yours to change:

- `email`, `phone`: taken from your resume. Set `phone` to `''` to hide it.
- `github`, `linkedin`: left empty because your resume has no valid address for them (the LinkedIn text `linkedin.com-dafini` is not a working link). Paste the full addresses; empty ones are hidden.
- `resume`: your uploaded resume is at `assets/Dafini-Resume.pdf`. Replace the file (same name) when you update it.
- `education`, `projects`, `known`, `learning`: all taken from your resume. Add GitHub and demo links to each project when you have them.

Open the browser console (F12): it tells you which details are still missing.

After publishing, add your live address to `robots.txt` and `sitemap.xml`, and optionally add canonical and `og:url` tags in `index.html` (see the comment in the head).

## 3. Publish with GitHub Pages (free)

1. Create a free account at https://github.com.
2. Click **New repository**. Name it e.g. `portfolio` (or `YOUR-USERNAME.github.io` to get the address `https://YOUR-USERNAME.github.io/`). Set it to **Public**.
3. Upload the files, either way:
   - **Website:** click **Add file > Upload files**, drag in everything inside the `portfolio` folder (including `assets`), then **Commit changes**.
   - **Git in VS Code terminal:**
     ```
     git init
     git add .
     git commit -m "Add portfolio"
     git branch -M main
     git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
     git push -u origin main
     ```
4. In the repository open **Settings > Pages**. Under **Build and deployment** choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
5. Wait 1 to 3 minutes. Your site is live at `https://YOUR-USERNAME.github.io/portfolio/`.
6. Update the `YOUR-USERNAME` / `YOUR-REPO` placeholders (`robots.txt`, `sitemap.xml`), commit again, and add the live address to your GitHub profile and LinkedIn.
7. Optional: submit the address in Google Search Console so Google finds the site faster.

## Notes

- The contact form opens the visitor's email app (the site has no server to send mail). For a form that sends mail directly, use a free service such as Formspree.
- To update the site later, edit a file, commit and push. Pages republishes automatically.
