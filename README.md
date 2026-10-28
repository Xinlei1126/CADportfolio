# Li — Mechanical Design Portfolio

A responsive, bilingual portfolio for presenting mechanical engineering and CAD work. The site introduces Li’s engineering background, highlights selected design and automation projects, and provides an on-page CV in English and Swedish.

The portfolio is a static website built with HTML, CSS, and vanilla JavaScript. It has no server-side code, external services, package installation, or build step.

## Website features

- **Project gallery:** CAD and engineering projects appear as image cards with translated titles and summaries.
- **Project details:** Select a card to open a larger image and description. The dialog can be closed with its close button, by clicking outside it, or by pressing Escape. Cards also support keyboard activation.
- **English and Swedish:** Use the language control in the header to switch the page, project cards, and CV between English and Swedish.
- **On-page CV:** Read the CV directly on the website. The site does not provide PDF download buttons.
- **Responsive layout:** The page adapts to desktop and mobile screen sizes.

## How the site works

The browser loads `index.html`, which defines the page sections and references `style.css` and `script.js`.

In `script.js`, the `projects` array contains each project’s image filename, title, and description in both languages. On page load, JavaScript creates a card for each project and attaches click and keyboard handlers. Choosing a card fills the project dialog with that project’s image and translated text.

The `data` object stores translated interface text, while the `cv` object contains the English and Swedish CV markup. When the visitor changes language, the script updates translated text, refreshes the on-page CV, and redraws the project cards in the selected language.

Project images are stored in `assets/`. Their filenames are referenced by the `projects` array, so the names and capitalization must match exactly.

## Run locally

No installation is required. From the project folder, start a local web server:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/> in a browser. On Windows, use `py -m http.server 8000` if `python3` is unavailable. Opening `index.html` directly may also work, but using a local server is recommended.

## Deploy to GitHub Pages

The included workflow at `.github/workflows/deploy.yml` publishes the site through GitHub Actions whenever code is pushed to the `main` branch. It copies `index.html`, `style.css`, `script.js`, `.nojekyll`, and `assets/` into `_site/`, then deploys that directory to GitHub Pages.

1. Put the **contents** of the `CADportfolio` folder at the root of your GitHub repository. Keep `.github/`, `.nojekyll`, and the `assets/` folder. `index.html` should be at the repository root.
2. In the repository, open **Settings → Pages** and set the source to **GitHub Actions**.
3. Commit and push the files to the `main` branch. The workflow will start automatically. You can also start it from **Actions → Deploy to GitHub Pages**.
4. When deployment completes, open the site URL shown in the workflow or in **Settings → Pages**.

If your default branch is not `main`, change the branch name in the workflow. GitHub Pages settings and access requirements may vary by repository.

## Project structure

```text
CADportfolio/
├── .github/workflows/deploy.yml  # GitHub Pages deployment workflow
├── assets/                       # Project images
├── index.html                    # Page structure and metadata
├── script.js                     # Translations, project data, CV, interactions
├── style.css                     # Layout, colors, and responsive styling
├── .nojekyll                     # Static hosting support
└── README.md                     # Project documentation
```

The source archive also contains two CV PDF files. They are not used or published by the website; the CV displayed on the page is written in `script.js`.

## Customize the portfolio

- **Contact details and page metadata:** Update the relevant text and links in `index.html`.
- **Translations and projects:** Edit the `data` and `projects` objects near the top of `script.js`.
- **On-page CV:** Edit the `cv` object in `script.js`.
- **Images:** Add files to `assets/` and set the matching filename in the relevant project entry in `script.js`.
- **Appearance:** Adjust layout, typography, colors, and responsive rules in `style.css`.
- **Deployment branch:** Change `on.push.branches` in `.github/workflows/deploy.yml` if the repository uses another default branch.

The current phone number, email address, and LinkedIn profile are example placeholders. Replace them with the correct details before publishing the site.
