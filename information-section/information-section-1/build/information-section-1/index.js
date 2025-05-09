/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/information-section-1/assets/1.png":
/*!************************************************!*\
  !*** ./src/information-section-1/assets/1.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/1.223fb335.png";

/***/ }),

/***/ "./src/information-section-1/assets/2.png":
/*!************************************************!*\
  !*** ./src/information-section-1/assets/2.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/2.4c445ce5.png";

/***/ }),

/***/ "./src/information-section-1/assets/3.png":
/*!************************************************!*\
  !*** ./src/information-section-1/assets/3.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/3.e52970a6.png";

/***/ }),

/***/ "./src/information-section-1/assets/feature-Icon-1.png":
/*!*************************************************************!*\
  !*** ./src/information-section-1/assets/feature-Icon-1.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/feature-Icon-1.fac3b58c.png";

/***/ }),

/***/ "./src/information-section-1/assets/feature-Icon-2.png":
/*!*************************************************************!*\
  !*** ./src/information-section-1/assets/feature-Icon-2.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/feature-Icon-2.bba18109.png";

/***/ }),

/***/ "./src/information-section-1/block.json":
/*!**********************************************!*\
  !*** ./src/information-section-1/block.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"aerpn/information-section-1","version":"0.1.0","title":"Information Section 1","category":"widgets","icon":"cover-image","description":"A customizable Information section with image, text, and button.","example":{},"attributes":{"title":{"type":"string","default":"Welcome"},"description":{"type":"string","default":" Seasona is an all integrated resort managed by Marriott International through its The Luxury Collection brand with different options of accommodation investment"},"titleFontSize":{"type":"string","default":"31"},"titleColor":{"type":"string","default":"#DBA765"},"descriptionFontSize":{"type":"string","default":"18"},"descriptionColor":{"type":"string","default":"#505050"},"imageOneUrl":{"type":"string","default":""},"imageTwoUrl":{"type":"string","default":""},"imageThreeUrl":{"type":"string","default":""},"subTitle":{"type":"string","default":"Luxury and Nature in Harmony"},"subTitleFontSize":{"type":"string","default":"31"},"subTitleColor":{"type":"string","default":""},"authorMessage":{"type":"string","default":"A place that offers everything you have ever dreamed of, created to fulfill your heart’s desires and designed to satisfy your dreams of owning a home in a unique place."},"authorMessageFontSize":{"type":"string","default":"18"},"authorMessageColor":{"type":"string","default":""},"authorName":{"type":"string","default":"Leonardo P."},"authorNameFontSize":{"type":"string","default":"18"},"authorNameColor":{"type":"string","default":""},"authorPosition":{"type":"string","default":"Resort manager"},"authorPositionFontSize":{"type":"string","default":"10"},"authorPositionColor":{"type":"string","default":"#8F8F8F"},"imageBorderRadius":{"type":"number","default":20},"featureTitle1":{"type":"string","default":"No booking fee"},"featureTitle2":{"type":"string","default":"Best rate guarantee"},"featureTitleFontSize":{"type":"string","default":"18"},"featureTitleColor":{"type":"string","default":"#ffffff"},"featureDescription1":{"type":"string","default":"Amet minim mollit deseruntullamco est sit aliqua dolor."},"featureDescription2":{"type":"string","default":"Amet minim mollit deseruntullamco est sit aliqua dolor."},"featureDescriptionFontSize":{"type":"string","default":"14"},"featureDescriptionColor":{"type":"string","default":"#ffffff"},"featureBackgroundColor":{"type":"string","default":"#DBA765"},"featureIcon1":{"type":"string","default":""},"featureIcon2":{"type":"string","default":""},"featureIconWidth":{"type":"number","default":35}},"supports":{"html":false,"align":["wide","full"],"spacing":{"margin":true,"padding":true}},"textdomain":"herosection-3","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

/***/ }),

/***/ "./src/information-section-1/edit.js":
/*!*******************************************!*\
  !*** ./src/information-section-1/edit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/information-section-1/editor.scss");
/* harmony import */ var _assets_feature_Icon_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/feature-Icon-1.png */ "./src/information-section-1/assets/feature-Icon-1.png");
/* harmony import */ var _assets_feature_Icon_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/feature-Icon-2.png */ "./src/information-section-1/assets/feature-Icon-2.png");
/* harmony import */ var _assets_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/1.png */ "./src/information-section-1/assets/1.png");
/* harmony import */ var _assets_2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/2.png */ "./src/information-section-1/assets/2.png");
/* harmony import */ var _assets_3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/3.png */ "./src/information-section-1/assets/3.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */











function Edit({
  attributes,
  setAttributes
}) {
  const {
    title,
    titleFontSize,
    titleColor,
    subTitle,
    subTitleFontSize,
    subTitleColor,
    authorMessage,
    authorMessageFontSize,
    authorMessageColor,
    authorName,
    authorNameFontSize,
    authorNameColor,
    authorPosition,
    authorPositionFontSize,
    authorPositionColor,
    descriptionFontSize,
    descriptionColor,
    description,
    imageOneUrl,
    imageTwoUrl,
    imageThreeUrl,
    imageBorderRadius,
    featureTitle1,
    featureTitle2,
    featureTitleFontSize,
    featureTitleColor,
    featureDescription1,
    featureDescription2,
    featureDescriptionFontSize,
    featureDescriptionColor,
    featureBackgroundColor,
    featureIcon1,
    featureIcon2,
    featureIconWidth
  } = attributes;
  const colors = [{
    name: "accent-1",
    color: "var(--wp--preset--color--accent-1)"
  }, {
    name: "accent-2",
    color: "var(--wp--preset--color--accent-2)"
  }, {
    name: "accent-3",
    color: "var(--wp--preset--color--accent-3)"
  }, {
    name: "accent-4",
    color: "var(--wp--preset--color--accent-4)"
  }, {
    name: "accent-5",
    color: "var(--wp--preset--color--accent-5)"
  }];
  const openMediaLibrary = key => {
    const mediaFrame = wp.media({
      title: "Select Image",
      button: {
        text: "Use this image"
      },
      multiple: false
    });
    mediaFrame.on("select", () => {
      const selected = mediaFrame.state().get("selection").first().toJSON();
      setAttributes({
        [key]: selected.url
      });
    });
    mediaFrame.open();
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!featureIcon1) {
      setAttributes({
        featureIcon1: _assets_feature_Icon_1_png__WEBPACK_IMPORTED_MODULE_5__
      });
    }
    if (!featureIcon2) {
      setAttributes({
        featureIcon2: _assets_feature_Icon_2_png__WEBPACK_IMPORTED_MODULE_6__
      });
    }
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!imageOneUrl) {
      setAttributes({
        imageOneUrl: _assets_1_png__WEBPACK_IMPORTED_MODULE_7__
      });
    }
    if (!imageTwoUrl) {
      setAttributes({
        imageTwoUrl: _assets_2_png__WEBPACK_IMPORTED_MODULE_8__
      });
    }
    if (!imageThreeUrl) {
      setAttributes({
        imageThreeUrl: _assets_3_png__WEBPACK_IMPORTED_MODULE_9__
      });
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TabPanel, {
        className: "my-tab-panel",
        activeClass: "active-tab",
        tabs: [{
          name: "settings",
          title: "Settings",
          className: "tab-settings"
        }, {
          name: "styles",
          title: "Styles",
          className: "tab-styles"
        }],
        children: tab => {
          if (tab.name === "settings") {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
                title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Images", "information-section-1"),
                initialOpen: false,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "flex gap-[10px] mb-[10px] ",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                    isSecondary: true,
                    onClick: () => openMediaLibrary("imageOneUrl"),
                    children: imageOneUrl ? "Change Image" : "Upload First Image"
                  }), imageOneUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
                    src: imageOneUrl,
                    alt: "",
                    className: " information-section-1-sidebar-img w-[100px] object-cover"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "flex gap-[10px] mb-[10px] ",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                    isSecondary: true,
                    onClick: () => openMediaLibrary("imageTwoUrl"),
                    children: imageTwoUrl ? "Change Image" : "Upload Second Image"
                  }), imageTwoUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
                    src: imageTwoUrl,
                    alt: "",
                    className: " information-section-1-sidebar-img w-[100px] object-cover"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "flex gap-[10px] mb-[10px] ",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                    isSecondary: true,
                    onClick: () => openMediaLibrary("imageThreeUrl"),
                    children: imageThreeUrl ? "Change Image" : "Upload Third Image"
                  }), imageThreeUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
                    src: imageThreeUrl,
                    alt: "",
                    className: " information-section-1-sidebar-img w-[100px] object-cover"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
                title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Features Icon", "information-section-1"),
                initialOpen: false,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "flex gap-[10px] mb-[10px] ",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                    isSecondary: true,
                    onClick: () => openMediaLibrary("featureIcon1"),
                    children: featureIcon1 ? "Change Image" : "Upload First Icon"
                  }), featureIcon1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
                    src: featureIcon1,
                    alt: "",
                    className: " information-section-1-sidebar-img w-[100px] object-cover"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  className: "flex gap-[10px] mb-[10px] ",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                    isSecondary: true,
                    onClick: () => openMediaLibrary("featureIcon2"),
                    children: featureIcon2 ? "Change Image" : "Upload Second Icon"
                  }), featureIcon2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
                    src: featureIcon2,
                    alt: "",
                    className: " information-section-1-sidebar-img w-[100px] object-cover"
                  })]
                })]
              })]
            });
          }
          if (tab.name === "styles") {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
                title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title", "information-section-1"),
                initialOpen: false,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size", "information-section-1"),
                  value: titleFontSize,
                  onChange: value => setAttributes({
                    titleFontSize: value
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title Color", "information-section-1"),
                  colors: colors,
                  value: titleColor,
                  onChange: color => setAttributes({
                    titleColor: color
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
                title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sub Title", "information-section-1"),
                initialOpen: false,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size", "information-section-1"),
                  value: subTitleFontSize,
                  onChange: value => setAttributes({
                    subTitleFontSize: value
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sub Title Color", "information-section-1"),
                  colors: colors,
                  value: subTitleColor,
                  onChange: color => setAttributes({
                    subTitleColor: color
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
                title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Description", "information-section-1"),
                initialOpen: false,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size", "information-section-1"),
                  value: descriptionFontSize,
                  onChange: value => setAttributes({
                    descriptionFontSize: value
                  }),
                  min: 12,
                  max: 36
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Decription Color", "information-section-1"),
                  colors: colors,
                  value: descriptionColor,
                  onChange: color => setAttributes({
                    descriptionColor: color
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
                title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Author Name", "information-section-1"),
                initialOpen: false,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size", "information-section-1"),
                  value: authorNameFontSize,
                  onChange: value => setAttributes({
                    authorNameFontSize: value
                  }),
                  min: 12,
                  max: 36
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Author Color", "information-section-1"),
                  colors: colors,
                  value: authorNameColor,
                  onChange: color => setAttributes({
                    authorNameColor: color
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
                title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Author Position", "information-section-1"),
                initialOpen: false,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size", "information-section-1"),
                  value: authorPositionFontSize,
                  onChange: value => setAttributes({
                    authorPositionFontSize: value
                  }),
                  min: 12,
                  max: 36
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Author Color", "information-section-1"),
                  colors: colors,
                  value: authorPositionColor,
                  onChange: color => setAttributes({
                    authorPositionColor: color
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
                title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Author Message", "information-section-1"),
                initialOpen: false,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size", "information-section-1"),
                  value: authorMessageFontSize,
                  onChange: value => setAttributes({
                    authorMessageFontSize: value
                  }),
                  min: 12,
                  max: 36
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Author Message Color", "information-section-1"),
                  colors: colors,
                  value: authorMessageColor,
                  onChange: color => setAttributes({
                    authorMessageColor: color
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
                title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Feature Title", "information-section-1"),
                initialOpen: false,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size", "information-section-1"),
                  value: featureTitleFontSize,
                  onChange: value => setAttributes({
                    featureTitleFontSize: value
                  }),
                  min: 12,
                  max: 36
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Feature Title Color", "information-section-1"),
                  colors: colors,
                  value: featureTitleColor,
                  onChange: color => setAttributes({
                    featureTitleColor: color
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
                title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Feature Description", "information-section-1"),
                initialOpen: false,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Font Size", "information-section-1"),
                  value: featureDescriptionFontSize,
                  onChange: value => setAttributes({
                    featureDescriptionFontSize: value
                  }),
                  min: 12,
                  max: 36
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Feature Description Color", "information-section-1"),
                  value: featureDescriptionColor,
                  onChange: color => setAttributes({
                    featureDescriptionColor: color
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
                title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Feature Icon", "information-section-1"),
                initialOpen: false,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Width", "information-section-1"),
                  value: featureIconWidth,
                  onChange: value => setAttributes({
                    featureIconWidth: value
                  }),
                  min: 10,
                  max: 100
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
                title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Color", "information-section-1"),
                initialOpen: false,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Feature Background Color", "information-section-1"),
                  colors: colors,
                  value: featureBackgroundColor,
                  onChange: color => setAttributes({
                    featureBackgroundColor: color
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
                title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Radius", "information-section-1"),
                initialOpen: false,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Radius", "information-section-1"),
                  value: imageBorderRadius,
                  onChange: value => setAttributes({
                    imageBorderRadius: value
                  }),
                  min: 0,
                  max: 100
                })
              })]
            });
          }
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "information-section-1-content  items-center flex gap-10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "information-section-1-text-content  flex flex-col gap-4 w-1/2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "gap-[20px] flex flex-col",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "h2",
              value: title,
              onChange: value => setAttributes({
                title: value
              }),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter title...", "information-section-1"),
              className: "information-section-1-title font-semibold",
              style: {
                fontSize: `${titleFontSize}px`,
                color: titleColor,
                fontWeight: "600"
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "h3",
              value: subTitle,
              onChange: value => setAttributes({
                subTitle: value
              }),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter sub title...", "information-section-1"),
              className: "information-section-1-sub-title font-medium",
              style: {
                fontSize: `${subTitleFontSize}px`,
                color: subTitleColor
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "p",
              value: description,
              onChange: value => setAttributes({
                description: value
              }),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter description...", "information-section-1"),
              className: "information-section-1-description",
              style: {
                fontSize: `${descriptionFontSize}px`,
                color: descriptionColor
              }
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: " mt-[40px] flex flex-col pl-[50px] gap-[25px] ",
            style: {
              borderLeft: '1px solid ' + featureBackgroundColor
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
              tagName: "p",
              value: authorMessage,
              onChange: value => setAttributes({
                authorMessage: value
              }),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter authorMessage...", "information-section-1"),
              className: "information-section-1-authorMessage",
              style: {
                fontSize: `${authorMessageFontSize}px`,
                color: authorMessageColor
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "gap-[5px] flex flex-col",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "h3",
                value: authorName,
                onChange: value => setAttributes({
                  authorName: value
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter authorName...", "information-section-1"),
                className: "information-section-1-authorName",
                style: {
                  fontSize: `${authorNameFontSize}px`,
                  color: authorNameColor,
                  fontWeight: "600"
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "h4",
                value: authorPosition,
                onChange: value => setAttributes({
                  authorPosition: value
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter authorPosition...", "information-section-1"),
                className: "information-section-1-authorPosition",
                style: {
                  fontSize: `${authorPositionFontSize}px`,
                  color: authorPositionColor
                }
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "information-section-1-right-section flex flex-col gap-[20px] justify-center relative w-1/2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "information-section-1-image-div w-[100%] flex flex-col gap-[20px]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "flex gap-[20px]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                className: "information-section-1-image-box w-[35%] bg-cover bg-center flex items-center justify-center",
                style: {
                  backgroundImage: imageOneUrl ? `url(${imageOneUrl || _assets_1_png__WEBPACK_IMPORTED_MODULE_7__})` : "none",
                  borderRadius: `${imageBorderRadius}px`
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                className: "information-section-1-image-box w-[65%] bg-cover bg-center flex items-center justify-center",
                style: {
                  backgroundImage: `url(${imageThreeUrl || _assets_3_png__WEBPACK_IMPORTED_MODULE_9__})`,
                  borderRadius: `${imageBorderRadius}px`
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: "information-section-1-image-box w-[100%] bg-cover bg-center flex items-center justify-center",
              style: {
                backgroundImage: imageThreeUrl ? `url(${imageTwoUrl || _assets_2_png__WEBPACK_IMPORTED_MODULE_8__})` : "none",
                borderRadius: `${imageBorderRadius}px`
              }
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "features-block flex gap-[20px]",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "feature-block flex gap-[20px] p-[20px]",
              style: {
                backgroundColor: featureBackgroundColor,
                borderRadius: `${imageBorderRadius}px`
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
                  className: "information-section-1-feature-icon",
                  src: featureIcon1 || _assets_feature_Icon_1_png__WEBPACK_IMPORTED_MODULE_5__,
                  alt: "feature image",
                  style: {
                    minWidth: featureIconWidth
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                className: "flex flex-col gap-[10px]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "h4",
                  value: featureTitle1,
                  onChange: value => setAttributes({
                    featureTitle1: value
                  }),
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter featureTitle...", "information-section-1"),
                  className: "information-section-1-featureTitle",
                  style: {
                    fontSize: `${featureTitleFontSize}px`,
                    color: featureTitleColor
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "p",
                  value: featureDescription1,
                  onChange: value => setAttributes({
                    featureDescription1: value
                  }),
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter featureDescription...", "information-section-1"),
                  className: "information-section-1-featureDescription",
                  style: {
                    fontSize: `${featureDescriptionFontSize}px`,
                    color: featureDescriptionColor
                  }
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "feature-block flex gap-[20px] p-[20px]",
              style: {
                backgroundColor: featureBackgroundColor,
                borderRadius: `${imageBorderRadius}px`
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
                  className: "information-section-1-feature-icon",
                  src: featureIcon2 || _assets_feature_Icon_2_png__WEBPACK_IMPORTED_MODULE_6__,
                  alt: "feature image",
                  style: {
                    minWidth: featureIconWidth
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                className: "flex flex-col gap-[10px]",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "h4",
                  value: featureTitle2,
                  onChange: value => setAttributes({
                    featureTitle2: value
                  }),
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter featureTitle...", "information-section-1"),
                  className: "information-section-1-featureTitle",
                  style: {
                    fontSize: `${featureTitleFontSize}px`,
                    color: featureTitleColor
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "p",
                  value: featureDescription2,
                  onChange: value => setAttributes({
                    featureDescription2: value
                  }),
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter featureDescription...", "information-section-1"),
                  className: "information-section-1-featureDescription",
                  style: {
                    fontSize: `${featureDescriptionFontSize}px`,
                    color: featureDescriptionColor
                  }
                })]
              })]
            })]
          })]
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./src/information-section-1/editor.scss":
/*!***********************************************!*\
  !*** ./src/information-section-1/editor.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/information-section-1/index.js":
/*!********************************************!*\
  !*** ./src/information-section-1/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/information-section-1/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/information-section-1/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/information-section-1/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/information-section-1/style.scss":
/*!**********************************************!*\
  !*** ./src/information-section-1/style.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"information-section-1/index": 0,
/******/ 			"information-section-1/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkinformation_section_1"] = globalThis["webpackChunkinformation_section_1"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["information-section-1/style-index"], () => (__webpack_require__("./src/information-section-1/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map