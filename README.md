# Minimap Size

A Mindustry mod that adds a slider for the size of the HUD minimap, from 100% to 300% of vanilla.

![Minimap Size](https://raw.githubusercontent.com/m3rcur1e/minimap-size/media/minimap-size.gif)

The vanilla minimap is fixed at 140 UI units. That is small on large screens and doesn't change with the UI scale.

## Usage

Open **Settings › Minimap Size** and move the slider. The change applies right away, with no restart needed. Scroll zoom, clicking to open the big map, and the position label still work at any size.

If more of my mods are installed, they share a single **Cur1e Mods** settings tab, with one section per mod.

## Install

In the in-game mod browser, search for **Minimap Size**. Alternatively, download this repository as a zip and import it through **Mods › Import Mod**.

The mod is client-side only. It doesn't add content, so it can be used on any server.

Tested on v160.7 (desktop).

## How it works

Vanilla `Minimap` is a table with one child element added as `.size(140f)`, and that element draws the map stretched to its own size. The mod resizes that cell to `140 × percent / 100` and re-applies when the HUD is rebuilt. It checks once per frame (about 5–9 µs) and only does work when the setting changes.

## License

Copyright (C) 2026 m3rcur1e. Licensed under [GPL-3.0](LICENSE): you may use, modify and share it, and derivative works must stay under the GPL-3.0 as well.
