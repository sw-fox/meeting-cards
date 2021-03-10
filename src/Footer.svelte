<style>
    .footer {
       position: fixed;
       right: 0;
       padding: 0.2em;
       bottom: 0;
    }
    .icon{
        color: #333;
    }
</style>


<script>
    import { faCodeBranch } from '@fortawesome/free-solid-svg-icons/faCodeBranch'
    import Icon from 'fa-svelte'

    let icon = faCodeBranch
</script>

<div class="footer">
    <a href="https://github.com/sw-fox/meeting-cards" class="icon"><Icon icon={icon}></Icon></a>
</div>