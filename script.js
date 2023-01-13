function changeImage() {


    console.log('test');
    document.getElementById('tashergif').src = '/talking.gif';
    var audio = new Audio('tasherbirthday.mp3');
    var audio2 = new Audio('horn.mp3')
    var confetti = document.createElement('img');
    confetti.setAttribute('src','confetti.gif');
    confetti.position= 'absolute';
   
    audio.play();
    audio2.play();
    setTimeout(() => {document.getElementById('tashergif').src = 'idlebetter.gif'; }, 3520);
}