<script>
	import Cardbox from './Cardbox.svelte';
	import Card from './Card.svelte';
</script>


<Cardbox>
	<Card color={"green"} symbol={"frozen"} text={"You're Frozen"}/>
	<Card color={"red"} symbol={"wifi"} text={"Bad connection"}/>
	<Card color={"yellow"} symbol={"deaf"} text={"Can't hear you"}/>
	<Card color={"green"} symbol={"thumbUp"} text={"Yes"}/>
	<Card color={"red"} symbol={"thumbDown"} text={"No"}/>
	<Card color={"yellow"} symbol={"mute"} text={"Please MUTE"}/>
	<Card color={"green"} symbol={"noise"} text={"someone has background noise"}/>
	<Card color={"red"} symbol={"pause"} text={"Be right back"}/>
	<Card color={"yellow"} symbol={"redo"} text={"please repeat"}/>
	<Card color={"green"} symbol={"backward"} text={"slow down"}/>
	<Card color={"red"} symbol={"forward"} text={"speed up"}/>
	<Card color={"yellow"} symbol={"volumeMute"} text={"You're on MUTE"}/>


</Cardbox>