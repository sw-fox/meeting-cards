<script>
	import { language } from './language.js';
	import * as en from "./en.json";
	import * as de from "./de.json";

	let language_value;
    language.subscribe(value => {
		language_value = value;
	});

	export let key;

	function translate(language_param,key) {
		if(language_param == "de"){
			let value = goDeep(de,key);
			if(value){
				return value
			}else{
				return translate("en",key);
			}
		}else{
			let value = goDeep(en,key);
			if(value){
				return value
			}else{
				return key;
			}
		}
	}

	function goDeep(obj, path) {
		var parts = path.split('.'),
			rv,
			index;
		for (rv = obj, index = 0; rv && index < parts.length; ++index) {
			rv = rv[parts[index]];
		}
		return rv;
	}
</script>

{translate(language_value,key)}