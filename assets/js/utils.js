
function formatVND(n){ return (n||0).toLocaleString('vi-VN',{style:'currency',currency:'VND'}); }
function toast(msg){
  const el = document.createElement('div');
  el.className='position-fixed top-0 start-50 translate-middle-x p-3';
  el.style.zIndex=1080;
  el.innerHTML=`<div class="toast show align-items-center text-bg-dark border-0"><div class="d-flex"><div class="toast-body">${msg}</div><button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button></div></div>`;
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),3000);
}
function updateNavCartCount(){ 
  const c = JSON.parse(localStorage.getItem('cart')||'[]').reduce((s,i)=>s+i.qty,0); 
  const el = document.getElementById('nav-cart-count'); if(el) el.innerText=c;
}
function updateNavUser(){
  const u = Auth.currentUser();
  const label = document.getElementById('nav-user-label'); if(!label) return;
  label.textContent = u ? (u.email || 'Tài khoản') : 'Tài khoản';
}
document.addEventListener('DOMContentLoaded', ()=>{ updateNavCartCount(); updateNavUser();
  const logout = document.getElementById('btn-logout');
  if (logout) logout.onclick = () => { Auth.logout(); updateNavUser(); toast('Đã đăng xuất'); };
});
