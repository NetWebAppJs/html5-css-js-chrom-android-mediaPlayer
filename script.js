let video_player = document.getElementById("video_player");
let links = video_player.getElementsByTagName('a');
for(var i=0; i<links.length; i++){
  links[i].onclick = handler;
}

function handler(e){
  
 e.preventDefault();
  
let videotarget = this.getAttribute("href");
let filename = videotarget.substr(0,videotarget.lastIndexOf('.'))||videotarget;
let video = document.querySelector("#video_player video");
  
video.removeAttribute('poster');
video.load();
video.play();
  
let source = document.querySelectorAll("#video_player video source");
   source[0].src = filename + ".mp4";
   source[1].src = filename + ".m3u8";
  
 /* video.buffer();*/
}
handler();
