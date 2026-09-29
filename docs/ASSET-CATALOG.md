# Asset catalog

This repository is a collected resource library, not a single application. Its contents include imported assets with different origins, licenses, and levels of maintenance.

## Current layout

| Path | Contents |
| --- | --- |
| [`CSS/`](../CSS/) | Application configurations and themes, HTML/CSS examples, and typography resources. |
| [`Colors and Theme /`](../Colors%20and%20Theme%20/) | Color systems and theme-related resources, including Base16 and Figma token material. |
| [`Markdown Tutorials/`](../Markdown%20Tutorials/) | Markdown syntax guides, examples, and reference pages. |
| [`Userscripts/`](../Userscripts/) | User-installed browser or application scripts. Review each script before use. |
| [`_Font Library /`](../%5FFont%20Library%20/) | Font files, font CSS, demos, and downloaded font archives. |
| [`OB FONTCSS.css`](../OB%20FONTCSS.css) | A root-level font-face stylesheet. Verify its referenced font URLs and local-file assumptions before deploying it elsewhere. |

Some existing directory names end in a space. This is an inherited path detail; do not copy it into new names. Renaming existing folders should wait until references, raw URLs, and external links have been checked.

## Organization guidelines

For new imported resources, keep related files together and include a short source note with:

- Original project or download URL
- Retrieval date, when useful
- License or usage terms, or a note that they are unknown
- Any local instructions or dependencies

Prefer upstream links over storing another copy when the resource is large, duplicated, or has unclear redistribution terms. Keep license files beside the files they cover.

## Suggested next pass

1. Inventory the font families and archives; identify duplicate formats and confirm redistribution rights before removing or retaining bundled files.
2. Check CSS and HTML for references to font paths, pinned raw GitHub URLs, and external dependencies.
3. Add short indexes inside the larger categories so assets can be found without changing their existing paths.
4. Only then consider normalizing legacy folder names or moving files, with a link and dependency check.

This staged approach keeps existing references working while making the collection easier to browse and maintain.
