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
});
