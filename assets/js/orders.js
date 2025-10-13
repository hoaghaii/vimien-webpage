
const Orders = {
  _all(){ return JSON.parse(localStorage.getItem('orders')||'[]'); },
  _save(list){ localStorage.setItem('orders', JSON.stringify(list)); },
  createFromCart({payment, contact}){
    const cart = CartApi.getItems();
    const amount = cart.reduce((s,i)=>s+i.price*i.qty,0);
    const id = 'VM' + Math.floor(100000 + Math.random()*900000);
    const order = { id, items: cart, amount, payment_method: payment, status: payment==='QR'?'pending_payment':'pending', contact, created_at: new Date().toISOString() };
    const list=this._all(); list.unshift(order); this._save(list);
    // Loyalty earn: 20,000đ = 1 điểm
    const points = Math.floor(amount/20000);
    Loyalty.addPoints(points);
    return order;
  },
  markPaid(id){
    const list=this._all();
    const o=list.find(x=>x.id===id); if(!o) return;
    o.status='paid (demo)'; this._save(list);
  },
  last(){ return this._all()[0] || null; },
  search({phone, email}){
    const list=this._all();
    return list.filter(o => (phone && o.contact.phone && o.contact.phone.includes(phone)) || (email && o.contact.email && o.contact.email.includes(email)));
  }
};
