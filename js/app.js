var postTwitter = document.querySelector('textarea');

postTwitter.addEventListener('keydown', autosize);
postTwitter.addEventListener('keydown', myBtn);
postTwitter.addEventListener('keypress', myBtn);
postTwitter.addEventListener('keyup', myBtn);

/* AUTO RECIZE */
function autosize(){
  var size = this;
  setTimeout(function(){
    size.style = 'height:auto; padding:0';
    size.style = 'height:' + size.scrollHeight + 'px';
  },0);
}

/* RESSETA TEXTAREA */
function resset() {
    document.getElementsByClassName('form-twitter').reset();
}

/* EXIBE TEXT TWITTED */
var submit = document.querySelector('input[type=submit]');
var now = (new Date().getHours() + ':' + new Date().getMinutes());

submit.onclick = function(event) {
  var container = document.getElementsByClassName('post-twitted')[0];

  var novaDiv = document.createElement('div');
  var dateNow = document.createElement('small');

  novaDiv.textContent = postTwitter.value;
  dateNow.textContent = now;

  novaDiv.className = 'twitted';
  dateNow.className = 'date';

  container.prepend(novaDiv);
  novaDiv.appendChild(dateNow);
  container.appendChild(novaDiv);

  container.style.visibility = 'visible';
  submit.disabled = true;
  submit.style.cursor = 'no-drop';
  submit.style.opacity = '0.3';
  submit.addEventListener('click', resset);

  event.preventDefault();
}

/* CONTADOR */
function counter(campo){
  var countChar = 140;
  var rest = document.getElementById('count-char').innerText = countChar-campo.value.length;
  if(rest >= 120 && rest < 140) {
    document.getElementById('count-char').style.color = '#1BCCE0';
  }else if(rest >= 130 && rest < 140) {
    document.getElementById('count-char').style.color = '#1BB2E0';
  }else if(rest < 0) {
    document.getElementById('count-char').style.color = 'red';
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
