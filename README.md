# Clean & Print - Preparador de impresión de artículos

## opensource.com

```js
console.log("Clean&Print: opensource.com pattern");

var class_to_remove = ["os-article__left", "desktop-user-links", "sf-nav", "byline__social", "byline__comment-count", "os-article__image", "embedded-callout-menu callout-float-right", "panel-pane pane-entity-field pane-node-field-tags", "panel-pane pane-views-panes pane-author-info-panel-pane-1", "panel-pane pane-os-content-article-contributions", "panel-pane pane-block pane-bean-article-promo-block", "panel-pane pane-os-content-article-contributors", "os-article__bottom", "os-article__footer", "region region-pre-footer", "region region-footer-nav", "region region-footer"];

class_to_remove.forEach(
    function(element) {
        try{
            document.getElementsByClassName(element)[0].remove();
        }catch(e){
            console.log("Clean&Print: Element "+element+" is not present");
        }
    }
);
window.print();
```

## enterprisersproject.com

```js
console.log("Clean&Print: enterprisersproject.com pattern");

var class_to_remove = ["region-top-bar", "region-mobile-nav", "region-header", "selby-flipped-sidebar selby-flipped-column-content-region selby-flipped-column selby-flipped-container panel-panel", "panel-pane pane-views-panes pane-related-articles-panel-pane-1 block", "panel-pane pane-entity-field pane-node-field-article-tags no-title block", "panel-pane pane-post-comment pane-bean-post-comment-block-on-articles no-title block", "panel-pane pane-node-comment-form block", "embedded-callout-menu callout-float-right", "panel-pane pane-rate-widget no-title block", "panel-pane pane-entity-field pane-node-field-basic-image-image no-title block"];
var id_to_remove = ["main-content-header", "menu-bar", "footer"];

class_to_remove.forEach(
    function(element) {
        try{
            document.getElementsByClassName(element)[0].remove();
        }catch(e){
            console.log("Clean&Print: Element "+element+" is not present");
        }
    }
);
id_to_remove.forEach(
    function(element) {
        try{
            document.getElementById(element).remove();
        }catch(e){
            console.log("Clean&Print: Element "+element+" is not present");
        }
    }
);
alert("Enable Emulate CSS media: screen before print. Open inspector > options (right side dots) > More tools > Rendering.");
```

## redhat.com/en/blog/

```js
console.log("Clean&Print: redhat.com/(en | es)/blog/ pattern");

var class_to_remove = ["rh-raw", "rh-divider--layout", "rh-divider--layout", "rh-group--layout", "rh-push-content-aside", "mini-bar band", "extended", "traditional"];

class_to_remove.forEach(
    function(element) {
        try{
            document.getElementsByClassName(element)[0].remove();
        }catch(e){
            console.log("Clean&Print: Element "+element+" is not present");
        }
    }
);
document.getElementsByClassName("rh-band--layout")[1].remove();
document.getElementsByClassName("rh-band--layout")[1].remove();
alert("Enable Emulate CSS media: screen before print. Open inspector > options (right side dots) > More tools > Rendering.");
```

Usar esta web para minimizar el código JS: https://javascript-minifier.com/