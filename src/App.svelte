<script>
	import Cardbox from './Cardbox.svelte';
	import Card from './Card.svelte';
	import Footer from './Footer.svelte';
	import I18n from './i18n/I18n.svelte';
</script>


<Cardbox>
	<Card color={"blue"} symbol={"frozen"}><I18n key="cards.frozen"/></Card>
	<Card color={"yellow"} symbol={"wifi"}><I18n key="cards.bad_connection"/></Card>
	<Card color={"brown"} symbol={"deaf"}><I18n key="cards.cant_hear_you"/></Card>
	<Card color={"red"} symbol={"thumbDown"}><I18n key="cards.no"/></Card>
	<Card color={"green"} symbol={"thumbUp"}><I18n key="cards.yes"/></Card>
	<Card color={"blue"} symbol={"mute"}><I18n key="cards.please_mute"/></Card>
	<Card color={"yellow"} symbol={"noise"}><I18n key="cards.background_noise"/></Card>
	<Card color={"brown"} symbol={"pause"}><I18n key="cards.brb"/></Card>
	<Card color={"red"} symbol={"redo"}><I18n key="cards.please_repeat"/></Card>
	<Card color={"green"} symbol={"backward"}><I18n key="cards.slow_down"/></Card>
	<Card color={"blue"} symbol={"awesome"}><I18n key="cards.awesome"/></Card>
	<Card color={"yellow"} symbol={"volumeMute"}><I18n key="cards.you_are_mute"/></Card>	
	<Card color={"brown"} symbol={"toPoint"}><I18n key="cards.get_to_point"/></Card>
	<Card color={"red"} symbol={"times"}><I18n key="cards.red_card"/></Card>
	<Card color={"green"} symbol={"back"}><I18n key="cards.back_to_topic"/></Card>
	<Card color={"blue"} symbol={"forward"}><I18n key="cards.speed_up"/></Card>


</Cardbox>

<Footer/>