<style>
	.card {
        width:50%;
        height: 7.5em;
        float:left;
        padding: 0px;
        padding-top: 1em;
        padding-bottom: 1em;
        font-size: 2em;
        text-align: center;
        color:#eee;
        background-color: #084C61;
    }
    p{
        margin: 0.2em;
        margin-top: 0.8em;
        min-height: 2.5em;
    }
    .zoomed p{
        margin: 0.4em;
        margin-bottom: 1em;
    }
    div :global(.icon) {
        font-size: 1.8em;
    }
    @media only screen and (max-width: 800px) {
        .large-text {
            padding-top: 0.1em;
            padding-bottom: 1.9em;
        }
    }
    @media only screen and (min-width: 800px) {
        .card {
            width:25%;
        }
    }
	.zoomed {
        width:100%;
        padding-top: 1em;
        font-size: 3em;
        height: 100%;
        position: fixed;
        transition: padding 0.2s;
    }
    @media only screen and (min-height: 500px) {
        .zoomed {
            padding-top: 3em;
        }
    }
    @media only screen and (min-height: 650px) {
        .zoomed {
            padding-top: 4em;
        }
    }
    @media only screen and (min-width: 500px) and (min-height: 800px) {
        .zoomed {
            padding-top: 8em;
        }
    }
    .red{
        background-color: #DB3A34;
    }
    .green{
        background-color: #177E89;
        color:#222;
    }
    .yellow{
        background-color: #FFC857;
        color:#222;
    }
    .blue{
        background-color: #084C61;
    }
    .brown{
        background-color: #323031;
    }
</style>

<script>
    import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
    import { faThumbsUp } from '@fortawesome/free-solid-svg-icons/faThumbsUp'
    import { faThumbsDown } from '@fortawesome/free-solid-svg-icons/faThumbsDown'
    import { faIcicles } from '@fortawesome/free-solid-svg-icons/faIcicles'
    import { faDeaf } from '@fortawesome/free-solid-svg-icons/faDeaf'
    import { faMicrophoneAltSlash } from '@fortawesome/free-solid-svg-icons/faMicrophoneAltSlash'
    import { faBolt } from '@fortawesome/free-solid-svg-icons/faBolt'
    import { faWifi } from '@fortawesome/free-solid-svg-icons/faWifi'
    import { faPause } from '@fortawesome/free-solid-svg-icons/faPause'
    import { faRedo } from '@fortawesome/free-solid-svg-icons/faRedo'
    import { faForward } from '@fortawesome/free-solid-svg-icons/faForward'
    import { faBackward } from '@fortawesome/free-solid-svg-icons/faBackward'
    import { faVolumeMute } from '@fortawesome/free-solid-svg-icons/faVolumeMute'
    import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'
    import { faHandPointRight } from '@fortawesome/free-solid-svg-icons/faHandPointRight'
    import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
    import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons/faAngleDoubleLeft'
    import Icon from 'fa-svelte'

    export let color;
    export let symbol;
    
    //set color
    let colorClass;
    if(color == "green"){
        colorClass = "green";
    }else if(color == "red"){
        colorClass = "red";
    }else if(color == "yellow"){
        colorClass = "yellow";
    }else if(color == "blue"){
        colorClass = "blue";
    }else if(color == "brown"){
        colorClass = "brown";
    }

    //icon
    //https://fontawesome.com/icons?d=gallery
    let icon = faCircle;
    if(symbol == "thumbUp"){
        icon = faThumbsUp;
    }else if(symbol == "thumbDown"){
        icon = faThumbsDown;
    }else if(symbol == "deaf"){
        icon = faDeaf;
    }else if(symbol == "frozen"){
        icon = faIcicles;
    }else if(symbol == "mute"){
        icon = faMicrophoneAltSlash;
    }else if(symbol == "noise"){
        icon = faBolt
    }else if(symbol == "wifi"){
        icon = faWifi
    }else if(symbol == "pause"){
        icon = faPause
    }else if(symbol == "redo"){
        icon = faRedo
    }else if(symbol == "forward"){
        icon = faForward
    }else if(symbol == "backward"){
        icon = faBackward
    }else if(symbol == "volumeMute"){
        icon = faVolumeMute
    }else if(symbol == "awesome"){
        icon = faHeart
    }else if(symbol == "toPoint"){
        icon = faHandPointRight
    }else if(symbol == "times"){
        icon = faTimes
    }else if(symbol == "back"){
        icon = faAngleDoubleLeft
    }

    //make card zoomable
    let isZoomed = false;
    function zoom() {
        isZoomed = !isZoomed;
    }
</script>

<div class="card {colorClass}" on:click={zoom} class:zoomed={isZoomed}>
    <p><slot></slot></p>
    <Icon class="icon" icon={icon}></Icon>
</div>