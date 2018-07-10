var postTwitter = document.querySelector('textarea');
var form = document.querySelector('.form-twitter');

postTwitter.addEventListener('keydown', autoSize);
postTwitter.addEventListener('keydown', myBtn);
postTwitter.addEventListener('keypress', myBtn);
postTwitter.addEventListener('keyup', myBtn);

/* AUTO RECIZE */
function autoSize(){
  var size = this;
  setTimeout(function(){
    size.style = 'min-height: 60px, height: auto; padding: 0';
    size.style = 'height:' + size.scrollHeight + 'px';
  },0);
}

/* EXIBE TEXT TWITTED */
var submit = document.querySelector('input[type=submit]');
var now = (new Date().getHours() + ':' + new Date().getMinutes());

submit.onclick = function(event) {
  var container = document.getElementsByClassName('box-twitted')[0];

  var section = document.createElement('div');
  var dateNow = document.createElement('small');
  var post = document.createElement('p');

  dateNow.textContent = now;
  post.textContent = postTwitter.value;

  section.className = 'twitted';
  dateNow.className = 'date';
  post.className = 'text';

  container.prepend(section);
  container.appendChild(section);
  section.appendChild(dateNow);
  section.appendChild(post);

  container.style.visibility = 'visible';
  submit.disabled = true;
  submit.style.cursor = 'no-drop';
  submit.style.opacity = '0.3';
  form.reset();

  event.preventDefault();
}

/* CONTADOR */
function counter(campo){
  var countChar = 140;
  var rest = document.getElementById('count-char').innerText = countChar-campo.value.length;
  if(rest >= 130 && rest < 140) {
    document.getElementById('count-char').style.color = '#1B5FE0';
  }else if(rest >= 120 && rest < 130) {
    document.getElementById('count-char').style.color = '#FFFF00';
  }else if(rest < 120 && rest >= 0) {
    document.getElementById('count-char').style.color = '#FF8C00';
  }else if(rest < 0) {
    document.getElementById('count-char').style.color = '#FF0000';
  }else {
    document.getElementById('count-char').style.color = '#1B5FE0';
  }
}

/* HABILITA DESABILITA BUTTON */
function myBtn() {
  if (postTwitter.value ==="" || postTwitter.value.length > 140 || !postTwitter.value.trim()) {
    submit.disabled = true;
    submit.style.opacity = "0.3";
    submit.style.cursor = "no-drop";
  } else {
    submit.disabled = false;
    submit.style.opacity = "1";
    submit.style.cursor = "auto";
  }
}
