<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

The café menu is served from `public/cafe/` and displayed in a viewport-sized iframe on `/`; keep its original HTML/CSS/JavaScript interactions and mobile frame while editing menu data in `script.js`.
Uploaded dish photos are CDN assets with pointers in `src/assets/dishes/`; use each pointer's URL only for a matching dish so the repository stays free of large binaries.
