function CurrentDateUK(){
		//from https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
		var today = new Date();
		return formatDateUK(today);
		
}

function formatDateUK(today){
	var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();

		if(dd<10) {
			dd = '0'+dd
		} 

		if(mm<10) {
			mm = '0'+mm
		} 

		today = dd + '/' + mm + '/' + yyyy;
		return today;
}

function TomorrowDateUK(){
	var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
	return formatDateUK(tomorrow);
}