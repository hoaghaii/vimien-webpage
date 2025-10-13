
const Loyalty = {
  profile(){
    const raw = JSON.parse(localStorage.getItem('loyalty')||'{"points":0,"lifetime":0,"tier":"Base","vouchers":[]}');
    return raw;
  },
  _save(p){ localStorage.setItem('loyalty', JSON.stringify(p)); },
  addPoints(n){
    const p=this.profile();
    p.points += n;
    p.lifetime += n;
    // Tier thresholds (demo): Base 0, Bạc 100, Vàng 300, Bạch Kim 700
    const t = p.lifetime;
    p.tier = t>=700?'Bạch Kim': t>=300?'Vàng': t>=100?'Bạc':'Base';
    this._save(p);
  },
  redeem(vnd){
    // 1 Miên = 1.000đ ; 20.000đ = 1 Miên → points reflect Miên.
    const need = Math.ceil((vnd || 0)/1000);
    const p=this.profile();
    if (need<=0) return { ok:false, msg:'Nhập giá trị > 0' };
    if (p.points < need) return { ok:false, msg:'Điểm không đủ' };
    p.points -= need;
    const code = 'VMV-' + Math.random().toString(36).slice(2,8).toUpperCase();
    p.vouchers = p.vouchers || [];
    p.vouchers.push({ code, value:vnd, created_at: new Date().toISOString() });
    this._save(p);
    return { ok:true, code };
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const info = document.getElementById('loy-info');
  function render(){
    const p=Loyalty.profile();
    info.innerHTML = `
      <div class="d-flex justify-content-between align-items-center">
        <div>Điểm: <b>${p.points}</b> Miên<br>Hạng: <span class="badge bg-dark">${p.tier}</span></div>
        <div class="text-end small text-muted">Tích lũy: ${p.lifetime} Miên</div>
      </div>
      <hr>
      <div><b>Voucher đã nhận</b></div>
      ${(p.vouchers||[]).map(v=>\`<div class="small">\${v.code} — \${(v.value||0).toLocaleString('vi-VN')}đ</div>\`).join('') || '<div class="small text-muted">Chưa có</div>'}
    `;
  }
  render();
  const btn = document.getElementById('btn-redeem');
  btn.onclick = () => {
    const val = parseInt(document.getElementById('redeem-value').value||'0',10);
    const r = Loyalty.redeem(val);
    const box = document.getElementById('redeem-result');
    box.innerHTML = r.ok ? `<div class="alert alert-success">Đã tạo voucher: <b>${r.code}</b></div>` : `<div class="alert alert-warning">${r.msg}</div>`;
    render();
  };
});
