var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.getElementById('player1');
	video.autoplay = false;
	video.loop = false;
	video.load();
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	var volume = document.getElementById("slider").value;
	document.getElementById("volume").innerHTML = volume + '%';
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.1;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.1;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if((video.currentTime + 10) < video.duration){
		video.currentTime += 10;
	}
	else{
		video.currentTime = 0;
	}

	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == false){
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
	else{
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("input", function(e) {
	video.volume = e.currentTarget.value / 100;
	var volume = document.getElementById("slider").value;
	document.getElementById("volume").innerHTML = volume + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});