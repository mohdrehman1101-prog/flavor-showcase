# Menu Opening Video

## What will change
- Show the uploaded 10-second vertical video as a full-screen opening layer before the café menu.
- Start it automatically, muted and inline, so mobile browsers allow reliable playback.
- Keep the existing menu design, content, layout, and interactions unchanged underneath.
- When playback finishes, fade the video away and reveal the menu at its current starting position.

## Slow-network reliability
- Create an optimized web video copy with fast-start streaming while preserving the same portrait framing and visual content.
- Show a clean loading state until enough video data is ready, without exposing a blank or broken player.
- Use safe playback, timeout, and error handling so a failed or extremely slow download never traps the visitor; the menu opens automatically as fallback.
- Keep controls hidden and prevent the intro layer from shifting the existing menu layout.

## Verification
- Test the full opening-to-menu flow on the current mobile size.
- Emulate a slow mobile connection and confirm loading, playback, completion, and fallback behavior.
- Confirm the existing search, menu cards, and details still work after the intro closes.
