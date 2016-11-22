#!/usr/bin/env node

'use strict'

module.exports = {
  "parserOptions": {
    "sourceType": "module"
  },
  "ecmaFeatures": {
    "modules": true
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true /* All ES6 features except modules */
  },
  "plugins": [
    "scanjs-rules",
    "no-unsafe-innerhtml",
    "security"
  ],
  "rules": {
    /* Restrict unsafe inner html */
    "no-unsafe-innerhtml/no-unsafe-innerhtml": 2,

    /* Discourage bad practices */
    "scanjs-rules/assign_to_hostname": 1,
    "scanjs-rules/assign_to_href": 1,
    "scanjs-rules/assign_to_location": 1,
    "scanjs-rules/assign_to_onmessage": 1,
    "scanjs-rules/assign_to_pathname": 1,
    "scanjs-rules/assign_to_protocol": 1,
    "scanjs-rules/assign_to_search": 1,
    "scanjs-rules/assign_to_src": 1,
    "scanjs-rules/call_Function": 1,
    "scanjs-rules/call_addEventListener": 1,
    "scanjs-rules/call_addEventListener_cellbroadcastmsgchanged": 1,
    "scanjs-rules/call_addEventListener_deviceproximity": 1,
    "scanjs-rules/call_addEventListener_message": 1,
    "scanjs-rules/call_connect": 1,
    "scanjs-rules/call_eval": 1,
    "scanjs-rules/call_execScript": 1,
    "scanjs-rules/call_generateCRMFRequest": 1,
    "scanjs-rules/call_getDeviceStorage_apps": 1,
    "scanjs-rules/call_getDeviceStorage_crashes": 1,
    "scanjs-rules/call_getDeviceStorage_music": 1,
    "scanjs-rules/call_getDeviceStorage_pictures": 1,
    "scanjs-rules/call_getDeviceStorage_sdcard": 1,
    "scanjs-rules/call_getDeviceStorage_videos": 1,
    "scanjs-rules/call_hide": 1,
    "scanjs-rules/call_open_attention": 1,
    "scanjs-rules/call_open_remote=true": 1,
    "scanjs-rules/call_parseFromString": 1,
    "scanjs-rules/call_setImmediate": 1,
    "scanjs-rules/call_setInterval": 1,
    "scanjs-rules/call_setMessageHandler_connect": 1,
    "scanjs-rules/call_setTimeout": 1,
    "scanjs-rules/call_write": 1,
    "scanjs-rules/call_writeln": 1,
    "scanjs-rules/identifier_indexedDB": 1,
    "scanjs-rules/identifier_localStorage": 1,
    "scanjs-rules/identifier_sessionStorage": 1,
    "scanjs-rules/new_Function": 1,
    "scanjs-rules/new_Notification": 1,
    "scanjs-rules/property_addIdleObserver": 1,
    "scanjs-rules/property_createContextualFragment": 1,
    "scanjs-rules/property_geolocation": 1,
    "scanjs-rules/property_getDataStores": 1,
    "scanjs-rules/property_getDeviceStorage": 1,
    "scanjs-rules/property_getUserMedia": 1,
    "scanjs-rules/property_indexedDB": 1,
    "scanjs-rules/property_lastKnownHomeNetwork": 1,
    "scanjs-rules/property_lastKnownNetwork": 1,
    "scanjs-rules/property_localStorage": 1,
    "scanjs-rules/property_mgmt": 1,
    "scanjs-rules/property_sessionStorage": 1,

    "security/detect-unsafe-regex": 1,
    "security/detect-buffer-noassert": 1,
    "security/detect-child-process": 1,
    "security/detect-disable-mustache-escape": 1,
    "security/detect-eval-with-expression": 1,
    "security/detect-no-csrf-before-method-override": 1,
    "security/detect-non-literal-fs-filename": 1,
    "security/detect-non-literal-regexp": 1,
    "security/detect-non-literal-require": 1,
    "security/detect-object-injection": 1,
    "security/detect-possible-timing-attacks": 1,
    "security/detect-pseudoRandomBytes": 1
  }
}
