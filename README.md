# Li | Mechanical Design Portfolio

A responsive portfolio featuring mechanical design, CAD, automation, robotics,
and production-line engineering projects. The site includes English and Swedish
content and project image previews.

Built with plain HTML, CSS, and JavaScript. No package installation, build tool,
backend, or API keys are required.

## Deploy to GitHub Pages

This project includes an automatic deployment workflow at
`.github/workflows/deploy.yml`.

1. Extract the ZIP and copy the **contents** of the `CADportfolio` folder into
   your repository's root. Include `.github/`, `.gitignore`, and `.nojekyll`.
   `index.html` must be at the repository root, not inside a second
   `CADportfolio` folder. Upload the extracted files, not the ZIP itself.
2. In your GitHub repository, open **Settings → Pages**. Under **Build and
   deployment → Source**, choose **GitHub Actions**. The deployment workflow is
   already included, so you do not need to create another one.
3. Commit and push the files to the `main` branch.
4. Open **Actions → Deploy to GitHub Pages** and wait for the workflow to finish.
   If you enabled Pages after pushing the files, select **Run workflow** on
   `main` to start deployment manually.
5. Open the site URL shown in the successful deployment or in **Settings →
   Pages**.

For the repository `Xinlei1126/CADportfolio`, the expected default address after
a successful deployment is:

**https://xinlei1126.github.io/CADportfolio/**

The address above assumes the existing repository name and no custom domain;
it is not a confirmation that the site has been published. For a different
account or repository, the default address is
`https://<username>.github.io/<repository>/`.

Every subsequent push to `main` redeploys the site. The workflow stages the HTML,
CSS, JavaScript, and images in `_site/` and publishes that folder.
No custom token or repository secret is needed. If your publishing branch is
different, update `on.push.branches` in the workflow.

## Preview locally

From the project folder, run:

```bash
python3 -m http.server 8000
```

Then open **http://localhost:8000/**. On Windows, use
`py -m http.server 8000` if `python3` is unavailable. You can also open
`index.html` directly in a modern browser.

## Project files

| File or folder | Purpose |
| --- | --- |
| `index.html` | Page structure, navigation, contact details, and metadata |
| `style.css` | Responsive layout and visual styling |
| `script.js` | English/Swedish translations, projects, CV content, and interactions |
| `assets/` | CAD and project images |
| `Mechanical_Engineer_CV_EN.pdf` | English CV source document |
| `Maskiningenjor_CV_SV.pdf` | Swedish CV source document |
| `.github/workflows/deploy.yml` | Automatic GitHub Pages deployment |
| `.nojekyll` | Keeps the site compatible with plain static hosting |

## Customize the portfolio

- Edit contact details and page metadata in `index.html`.
- Edit the `data`, `projects`, and `cv` objects in `script.js` to update
  translations, project descriptions, and the on-page CV.
- Add project images to `assets/` and reference their exact filenames in
  `script.js`. Filenames are case-sensitive on GitHub Pages.
- Keep local links relative, such as `assets/example.jpg` rather than
  `/assets/example.jpg`, so they work under the repository's URL path.

The email address, phone number, and LinkedIn URL currently contain fictional
placeholders. Update them in the webpage and both PDFs before sharing the site.

## Troubleshooting

- **Site returns 404:** check that the workflow completed successfully, Pages
  uses **GitHub Actions**, and `index.html` is at the repository root.
- **Deployment does not start:** confirm you pushed to `main`, GitHub Actions is
  enabled for the repository, and `.github/workflows/deploy.yml` was included.
- **Images fail:** check exact filename capitalization and keep the `assets/`
  directory alongside `index.html`.
- **Pages setup fails:** confirm you have repository admin or maintainer access
  and that GitHub Pages is available for the repository's visibility and plan.

GitHub documentation:
[publishing source setup](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
and [custom deployment workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
