document.addEventListener('DOMContentLoaded',function(){
  var t=document.getElementById('menuToggle'),n=document.getElementById('navLinks');
  if(t&&n)t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o);});
  var heads=document.querySelectorAll('.acc-head');
  heads.forEach(function(b){b.addEventListener('click',function(){
    var wasOpen=b.getAttribute('aria-expanded')==='true';
    heads.forEach(function(x){x.setAttribute('aria-expanded','false');x.nextElementSibling.hidden=true;x.querySelector('.acc-btn').textContent='+';});
    if(!wasOpen){b.setAttribute('aria-expanded','true');b.nextElementSibling.hidden=false;b.querySelector('.acc-btn').textContent='−';}
  });});
  var tpl=document.getElementById('tplText'),c=document.getElementById('copyTpl'),m=document.getElementById('openMail');
  if(c&&tpl)c.addEventListener('click',function(){
    var done=function(){c.textContent='Copied ✓';setTimeout(function(){c.textContent='Copy template';},1800);};
    if(navigator.clipboard)navigator.clipboard.writeText(tpl.innerText).then(done,done);else done();
  });
  if(m&&tpl){
    var body=tpl.innerText.split('\n').slice(3).join('\n').trim();
    m.href='mailto:thedigitalgirlsinitiativepk@gmail.com?subject='+encodeURIComponent('[DGIP Certificate] <Track> - <Your Full Name>')+'&body='+encodeURIComponent(body);
  }

  var copyEp=document.getElementById('copyEp');
  var epNumber=document.getElementById('epNumber');
  if(copyEp&&epNumber){
    copyEp.addEventListener('click',function(){
      var n=epNumber.textContent.trim();
      var done=function(){copyEp.textContent='Copied ✓';setTimeout(function(){copyEp.textContent='Copy';},1600);};
      if(navigator.clipboard)navigator.clipboard.writeText(n).then(done,done);else done();
    });
  }

  var payForm=document.getElementById('paymentForm');
  var paySuccess=document.getElementById('paySuccess');
  var paySubmit=document.getElementById('paySubmit');
  if(payForm&&paySuccess){
    payForm.addEventListener('submit',function(e){
      e.preventDefault();
      if(paySubmit){paySubmit.disabled=true;paySubmit.textContent='Sending…';}
      var data=new FormData(payForm);
      fetch(payForm.action,{method:'POST',body:data,headers:{'Accept':'application/json'}})
        .then(function(res){
          if(!res.ok)throw new Error('submit failed');
          payForm.hidden=true;
          paySuccess.hidden=false;
          paySuccess.scrollIntoView({behavior:'smooth',block:'center'});
        })
        .catch(function(){
          alert('Could not send the form. Please email your payment screenshot to thedigitalgirlsinitiativepk@gmail.com with your name and track.');
          if(paySubmit){paySubmit.disabled=false;paySubmit.textContent='Submit payment proof →';}
        });
    });
  }
});
