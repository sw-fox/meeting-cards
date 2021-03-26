<style>
    .footer {
       position: fixed;
       right: 0;
       padding: 0.2em;
       bottom: 0;
       font-size: 2.5em;
       transition: 0.3s;
    }
    .footer:not(.hidden){
       background-color: #333;
       color: #ddd;
       width: 80%;
    }
    @media only screen and (min-width: 600px) {
        .footer:not(.hidden){
            width: 50%
        }
    }
    a, a:visited{
        color: #ddd;
        text-decoration: none;
    }
    .line:hover, a:hover, a:active{
        color: #00b2bb;
        transition: color 0.5s;
        cursor: pointer;
    }
    .line{
        margin: 0.3em 0;
        max-height: 1.3em;
        overflow: hidden;
    }
    .text{
        margin-left: 0.3em;
    }
    .menu.hidden{
        height: 0;
        overflow: hidden;
    }
    .hidden .text{
        display: none;
        padding-left:2em;
    }
    .footer.hidden{
        width: 1.3em;
    }
</style>


<script>
	import { language } from './i18n/language.js';
	import I18n from './i18n/I18n.svelte';
    import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo'
    import { faCodeBranch } from '@fortawesome/free-solid-svg-icons/faCodeBranch'
    import { faFlag } from '@fortawesome/free-solid-svg-icons/faFlag'
    import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV'
    import Icon from 'fa-svelte'
	import * as package_json from "../package.json";

	let language_value;
    language.subscribe(value => {
		language_value = value;
	});

    let version = package_json['version']
    
    let info = faInfo
    let menu = faEllipsisV
    let git = faCodeBranch
    let flag = faFlag

    //menu
    let menuToggle = true;
    function triggerMenuToggle() {
        menuToggle = !menuToggle;
    }

    function changeLanguageDE() {
        language.set('de');
	}
    function changeLanguageEN() {
        language.set('en');
    }
</script>

<div class="footer" class:hidden="{menuToggle}">
    <div class="menu" class:hidden="{menuToggle}">
        <div class="line">
            <Icon icon={info}></Icon><span class="text">v{version}</span>
        </div>
        {#if language_value!=="de"}
        <div class="line" on:click={changeLanguageDE}>
            <Icon icon={flag}></Icon><span class="text">Deutsch</span>
        </div>
        {/if}
        {#if language_value!=="en"}
        <div class="line" on:click={changeLanguageEN}>
            <Icon icon={flag}></Icon><span class="text">English</span>
        </div>
        {/if}
        <div class="line">
            <a href="https://github.com/sw-fox/meeting-cards"><Icon icon={git}></Icon><span class="text">Github</span></a>
        </div>
    </div>
    <div class="menu line" on:click={triggerMenuToggle}>
        <Icon icon={menu}></Icon><span class="text" class:hidden="{menuToggle}"><I18n key="footer.close"/></span>
    </div>
</div>