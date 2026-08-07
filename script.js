document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.faq-item').forEach(function(item){
    var q = item.querySelector('.faq-q');
    var sym = item.querySelector('.faq-sym');
    q.addEventListener('click', function(){
      item.classList.toggle('open');
      sym.textContent = item.classList.contains('open') ? '−' : '+';
    });
  });

  var form = document.querySelector('form.contact');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var success = document.getElementById('form-success');
      if(success){ success.classList.add('show'); }
      form.reset();
    });
  }
});
