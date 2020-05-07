function DOBCal()
{
	var d,m,y,mm,s,h;
	var birth=document.getElementById('dob').value;
	var cd=new Date();
	birth=new Date(birth);
	var dd=(cd-birth)/1000;
	document.getElementById('res').innerHTML=dd;
	d=Math.floor(dd/(24*60*60));
	m=Math.floor(d/30);
	y=Math.floor(d/365.25);
	mm=Math.floor(dd/60);
	h=Math.floor(dd/(60*60));
	document.getElementById('res').innerHTML="Year:		"+y+"	Month:		"+m+"	Days:		"+d+"	Hours:		"+h+"	Minutes:		"+mm+"	Seconds:		"+dd+"	MiliSeconds:		"+(dd*1000);
}