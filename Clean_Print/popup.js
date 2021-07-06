// Copyright (c) 2018 Adrian Ramos. All rights reserved.
// MIT License

/**
 * Get the current URL.
 *
 * @param {function(string)} callback called when the URL of the current tab
 *   is found.
 */
function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');
    callback(url);
  });
}

/**
 * Verify if template exist
 *
 * @param {string} url The url.
 */
function existTemplate(url) {
  var webs = ["opensource.com","enterprisersproject.com","redhat.com"]

  webs.forEach(
    function (web) {
      console.log(url);
      if (web == url) {
        document.getElementById('url').innerHTML = web;
        document.getElementById('button').style.display = 'initial';
      }
    }
  );
}

/**
 * Apply yemplate
 *
 * @param {string} url The url.
 */
function applyTemplate(url) {
  switch (url) {
    case "opensource.com":
      var script = 'var class_to_remove=["pane-os-content-article-poll","os-article__left","desktop-user-links","sf-nav","byline__social","byline__comment-count","os-article__image","embedded-callout-menu callout-float-right","panel-pane pane-entity-field pane-node-field-tags","panel-pane pane-views-panes pane-author-info-panel-pane-1","panel-pane pane-os-content-article-contributions","panel-pane pane-block pane-bean-article-promo-block","panel-pane pane-os-content-article-contributors","os-article__bottom","os-article__footer","region region-pre-footer","region region-footer-nav","region region-footer"];class_to_remove.forEach(function(e){try{document.getElementsByClassName(e)[0].remove()}catch(n){console.log("Clean&Print: Element "+e+" is not present")}}),window.print();';
      break;
    case "enterprisersproject.com":
      var script = 'var class_to_remove=["region-top-bar","region-mobile-nav","region-header","selby-flipped-sidebar selby-flipped-column-content-region selby-flipped-column selby-flipped-container panel-panel","panel-pane pane-views-panes pane-related-articles-panel-pane-1 block","panel-pane pane-entity-field pane-node-field-article-tags no-title block","panel-pane pane-post-comment pane-bean-post-comment-block-on-articles no-title block","panel-pane pane-node-comment-form block","embedded-callout-menu callout-float-right","panel-pane pane-rate-widget no-title block","panel-pane pane-entity-field pane-node-field-basic-image-image no-title block"],id_to_remove=["main-content-header","menu-bar","footer"];class_to_remove.forEach(function(e){try{document.getElementsByClassName(e)[0].remove()}catch(n){console.log("Clean&Print: Element "+e+" is not present")}}),id_to_remove.forEach(function(e){try{document.getElementById(e).remove()}catch(n){console.log("Clean&Print: Element "+e+" is not present")}}),alert("Enable Emulate CSS media: screen before print. Open inspector > options (right side dots) > More tools > Rendering.");';
      break;
    case "redhat.com":
      var script = 'console.log("Clean&Print: redhat.com/(en | es)/blog/ pattern");var class_to_remove=["rh-raw","rh-divider--layout","rh-divider--layout","rh-group--layout","rh-push-content-aside","mini-bar band","extended","traditional"];class_to_remove.forEach(function(e){try{document.getElementsByClassName(e)[0].remove()}catch(t){console.log("Clean&Print: Element "+e+" is not present")}}),document.getElementsByClassName("rh-band--layout")[1].remove(),document.getElementsByClassName("rh-band--layout")[1].remove(),alert("Enable Emulate CSS media: screen before print. Open inspector > options (right side dots) > More tools > Rendering.");';
      break;
    default:
      var script = 'document.body.style.backgroundColor="orange";alert("This page is not templated in Clean&Print");';
      break;
  }
  chrome.tabs.executeScript({
    code: script
  });
}

document.addEventListener('DOMContentLoaded', () => {
  getCurrentTabUrl((url) => {
    var re = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^\/\n]+)/i;
    var urlmatch = re.exec(url);
    urlmatch = urlmatch[1];

    existTemplate(urlmatch);

    var button = document.getElementById('button');
    button.addEventListener('click', () => {
      applyTemplate(urlmatch);
    });

  });
});