/* JavaScript function to create highlight toolbar in DokuwKki */
/* see http://www.dokuwiki.org/plugin:highlight for more info */

hl_icobase = "../../plugins/highlight/images/";

if(window.toolbar != undefined) {
  toolbar[toolbar.length] = {
    "type":"picker",
    "title":"Highlight Text",
    "icon":hl_icobase+"toolbar_icon.png",
    "list":[{
      "type":"format",
      "title":"Gray Highlighted Text",
      "icon":hl_icobase+"picker_light_gray.png",
      "open":"<hi #c3c3c3>",
      "close":"</hi>"
    }, {
      "type":"format",
      "title":"Rose Highlighted Text",
      "icon":hl_icobase+"picker_rose.png",
      "open":"<hi #ffaec9>",
      "close":"</hi>"
    }, {
      "type":"format",
      "title":"Red Highlighted Text",
      "icon":hl_icobase+"picker_red.png",
      "open":"<hi #ed1c24>",
      "close":"</hi>"
    }, {
      "type":"format",
      "title":"Orange Highlighted Text",
      "icon":hl_icobase+"picker_orange.png",
      "open":"<hi #ff7f27>",
      "close":"</hi>"
    }, {
      "type":"format",
      "title":"Gold Highlighted Text",
      "icon":hl_icobase+"picker_gold.png",
      "open":"<hi #ffc90e>",
      "close":"</hi>"
    }, {
      "type":"format",
      "title":"Yellow Highlighted Text",
      "icon":hl_icobase+"picker_yellow.png",
      "open":"<hi #fff200>",
      "close":"</hi>"
    }, {
      "type":"format",
      "title":"Light Yellow Highlighted Text",
      "icon":hl_icobase+"picker_light_yellow.png",
      "open":"<hi #efe4B0>",
      "close":"</hi>"
    }, {
      "type":"format",
      "title":"Green Highlighted Text",
      "icon":hl_icobase+"picker_green.png",
      "open":"<hi #22b14c>",
      "close":"</hi>"
    }, {
      "type":"format",
      "title":"Lime Highlighted Text",
      "icon":hl_icobase+"picker_lime.png",
      "open":"<hi #b5e61d>",
      "close":"</hi>"
    }, {
      "type":"format",
      "title":"Turquoise Highlighted Text",
      "icon":hl_icobase+"picker_turquoise.png",
      "open":"<hi #00a2e8>",
      "close":"</hi>"
    }, {
      "type":"format",
      "title":"Light Turquoise Highlighted Text",
      "icon":hl_icobase+"picker_light_turquoise.png",
      "open":"<hi #99d9ea>",
      "close":"</hi>"
    }, {
    //  "type":"format",
    //  "title":"Indigo Highlighted Text",
    //  "icon":hl_icobase+"picker_indigo.png",
    //  "open":"<hi #3f48cc>",
    //  "close":"</hi>"
    //}, {
      "type":"format",
      "title":"Blue-Gray Highlighted Text",
      "icon":hl_icobase+"picker_blue_gray.png",
      "open":"<hi #7092be>",
      "close":"</hi>"
    }, {
      "type":"format",
      "title":"Lavender Highlighted Text",
      "icon":hl_icobase+"picker_lavender.png",
      "open":"<hi #c8bfe7>",
      "close":"</hi>"
    }]
  }; 
}

//Setup VIM: ex: et ts=2 sw=2 enc=utf-8 :
