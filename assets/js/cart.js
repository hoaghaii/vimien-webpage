
const CartApi = {
  getItems(){ return JSON.parse(localStorage.getItem('cart')||'[]'); },
  setItems(v){ localStorage.setItem('cart', JSON.stringify(v)); },
  addItem(item){
    const list=this.getItems();
    const idx=list.findIndex(i=>i.id===item.id&&i.name===item.name);
    if(idx>-1){ list[idx].qty+=item.qty; } else { list.push(item); }
    this.setItems(list);
  },
  updateQty(idx, diff){
    const list=this.getItems(); if(!list[idx]) return;
    list[idx].qty=Math.max(1, list[idx].qty+diff);
    this.setItems(list);
  },
  remove(idx){ const list=this.getItems(); list.splice(idx,1); this.setItems(list); },
  clear(){ this.setItems([]); }
};
