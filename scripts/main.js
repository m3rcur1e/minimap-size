const cur1e = require("cur1e-shared");

const PREF = "minimapsize-scale";
const DEFAULT = 100, MIN = 100, MAX = 300, STEP = 10;
const VANILLA_SIZE = 140;

let minimap = null;
let applied = -1;

function percent(){
    return Mathf.clamp(Core.settings.getInt(PREF, DEFAULT), MIN, MAX);
}

function findMinimap(){
    if(minimap != null && minimap.getScene() != null) return minimap;
    minimap = null;
    applied = -1;
    if(Vars.ui == null || Vars.ui.hudGroup == null) return null;
    const el = Vars.ui.hudGroup.find("minimap");
    if(el instanceof Minimap) minimap = el;
    return minimap;
}

function apply(){
    const map = findMinimap();
    if(map == null) return;
    const p = percent();
    if(p == applied) return;
    const children = map.getChildren();
    if(children.size == 0) return;
    const cell = map.getCell(children.get(0));
    if(cell == null) return;
    cell.size(VANILLA_SIZE * p / 100);
    map.invalidateHierarchy();
    applied = p;
}

let failed = false;
Events.run(Trigger.update, () => {
    if(failed) return;
    try{
        apply();
    }catch(e){
        failed = true;
        Log.err("[minimap-size] " + e);
    }
});

cur1e.settings({mod: "minimap-size", title: "minimap-size.settings.title", icon: "map", build: t => {
    t.sliderPref(PREF, DEFAULT, MIN, MAX, STEP, v => v + "%");
}});

Log.info("[minimap-size] loaded");
