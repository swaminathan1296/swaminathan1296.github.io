# swaminathansundar.github.io

Personal site. Jekyll on GitHub Pages, custom layout (no external theme).

## How to update it

You should almost never need to open an HTML file. Content lives in two places:

| What you want to change | File |
|---|---|
| Name, tagline, email, CV path, profile links | `_config.yml` |
| The "About" paragraphs | `index.md` |
| Degrees | `_data/education.yml` |
| Jobs, internships, assistantships | `_data/experience.yml` |
| Skills | `_data/skills.yml` |
| Projects | `_data/projects.yml` |
| Papers | `_data/publications.yml` |
| Colours and fonts | `assets/css/style.css` (top of file, `:root`) |

Edit, commit, push. GitHub rebuilds in about a minute.

### Placeholders

Anything you leave in `[square brackets]` renders on the live page in ochre with a
dotted underline. That is deliberate — unfinished content should be visible, not silent.
Search the repo for `[` to find what's left.

### Adding a project

Append to `_data/projects.yml`:

```yaml
- name: "Project name"
  tag: "94.2% test acc"     # put a number here whenever you have one
  url: "https://github.com/you/repo"
  description: "One or two sentences."
```

A project with an empty `url` renders "[add repo link]" in ochre.

### Adding a paper

Published work takes `venue` + `year`; unpublished work takes `status` instead.
Your own name is bolded automatically, using `name_in_publications` in `_config.yml`.

## Files you still need to add

- `assets/images/profile.jpeg` — square, at least 424×424 so it stays sharp on retina
- `cv.pdf` — in the repo root

## Previewing locally

Optional. Requires Ruby.

```
bundle install
bundle exec jekyll serve --livereload
```

Then open http://localhost:4000. Note that `_config.yml` changes need a restart;
everything else live-reloads.

## Design notes

The hero background is the level sets of the Rosenbrock function, computed rather
than drawn, with the portrait sitting at the minimum. Typography is IBM Plex —
Condensed for headings, Serif for prose, Mono for anything that is data (venues,
dates, result chips). One accent colour (cobalt) for links, one (ochre) reserved
strictly for the optimum marker and unfilled placeholders.

The stylesheet includes a print block, so the page prints as a clean one-sheet
summary without the background, buttons, or nav.
