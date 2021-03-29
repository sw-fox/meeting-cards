import { writable } from 'svelte/store';

let _language = localStorage.getItem('language') || 'en';
const languageStore = writable(_language);

function updateLanguageStore() {
    languageStore.set(_language);
    localStorage.setItem('language', _language);
 }

 function setLanguage(language) {
    _language = language;
    updateLanguageStore();
 }
 
 export const language = {
    setLanguage,
    subscribe: languageStore.subscribe
 };