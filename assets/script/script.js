	function ounceweightConvert(value) {
	document.getElementById("Pounds").innerHTML=(value/16).toFixed(2);
	document.getElementById("Grams").innerHTML=(value*28.35).toFixed(2);
	document.getElementById("KiloGrams").innerHTML=(value/35.274).toFixed(2);
	document.getElementById("ppo").innerHTML=(value*1.87).toFixed(2);
	}

