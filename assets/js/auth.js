
const Auth = {
  currentUser(){ const raw = localStorage.getItem('user'); return raw? JSON.parse(raw): null; },
  login({email, phone}){ const user={ id: 'u_'+Date.now(), email, phone }; localStorage.setItem('user', JSON.stringify(user)); return user; },
  logout(){ localStorage.removeItem('user'); }
};
