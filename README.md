# marckwei.github.io

Personal site of Xiangwei Zhang, senior security engineer at Tencent Security Yunding Lab. Built with [Astro](https://astro.build/) and deployed to GitHub Pages.

English is at `/`. Chinese is at `/zh/`.

## Develop

```bash
npm install
npm run dev
```

`npm run build` writes the static site to `dist/`.

## Adding a CVE

Edit [`src/data/cves.ts`](src/data/cves.ts) and append one object. An entry must have an assigned CVE id. Issues without a CVE are not listed.

| Field | Meaning |
| --- | --- |
| `id` | CVE id, required |
| `project`, `vendor` | Affected project and vendor. `vendor` feeds the notable-vendor line when it is Meta, NVIDIA, Apache, Mozilla, Apple, or OISF |
| `title` | One sentence, `{ en, zh }` |
| `class` | `rce`, `memory`, `injection`, `deserialization`, `auth-bypass`, `dos`, `logic` |
| `domain` | `ai-infra`, `network`, `web`, `client`, `embedded` |
| `via` | `vulnagent`, `fuzzing`, or `manual` |
| `group` | `agent`, `browser`, or `academic` |
| `year` | Year in the CVE id |
| `published`, `cvss`, `vector`, `cwe` | Copy from NVD. Omit them when NVD has no record |
| `refs` | Live advisory links. Prefer the vendor advisory, and add the NVD page when it exists |
| `highlight` | Set `true` to show the entry on the home page. Order follows `HIGHLIGHT_ORDER` |

The home-page counts, the VulnAgent table, and both languages are rendered from this file.

## Deploy

Pushes to `master` run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). GitHub Pages has to build from GitHub Actions rather than the legacy Jekyll path: Settings → Pages → Build and deployment → Source: GitHub Actions.

```bash
gh api -X PUT repos/marckwei/marckwei.github.io/pages -f build_type=workflow
```
