window.addEventListener('load', function(){
  const video1 = document.getElementById("video1");
  const video2 = document.getElementById("video2");
  const video3 = document.getElementById("video3");

  video1.addEventListener("ended", function () {
      video1.style.display = 'none';
      video2.style.display = 'flex';
      video2.play();
  });

  video2.addEventListener("ended", function () {
      video2.style.display = 'none';
      video3.style.display = 'flex';
      video3.play();
  });

  video3.addEventListener("ended", function () {
      video3.style.display = 'none';
      video1.style.display = 'flex';
      video1.play();
  });
})