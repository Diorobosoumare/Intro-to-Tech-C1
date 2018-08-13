
var Day;

switch(new Date().getDay()){
	case:0
		day = 'sunday';
		break;
	case:1
		day = 'Monday';
		break;
	case:2
		day = 'Tuesday';
		break;
	case:3
		day = 'Wednesday';
		break;
	case:4
		day = 'Thursday';
		break;
	case:5
		day = 'friday';
		break;
	case:6
		day = 'saturday';
		break
}
document.getElementById('day').innerHTML = "<h1>Today is " + day +".</h1>";
document.getElementById('day').style.color = "orange";