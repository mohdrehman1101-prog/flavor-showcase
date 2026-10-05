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

The café menu is served from `public/cafe/` inside the full-viewport iframe on `/`; use the newly supplied HTML/CSS/JavaScript design as the authoritative source because the user requested an exact replacement of the previous design.
Dish data is adapted into the supplied script's `items`, `N`, `FAV`, `IMG`, `MEM` and `PUZZLE_IMG` format, preserving existing dish names, prices, descriptions, dietary flags, badges and matching photo paths because only the reference menu's dishes should be replaced.
Site media stays as real files in `public/cafe/assets/` referenced through `/cafe/assets/<name>` because these paths work on Netlify as well as Lovable; do not reintroduce the removed opening video or old category tile navigation.
