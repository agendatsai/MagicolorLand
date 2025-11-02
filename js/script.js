
function addToCart(){
  const v = document.getElementById('variant').value;
  const q = parseInt(document.getElementById('qty').value||'1',10);
  const hint = document.getElementById('cartHint');
  hint.textContent = `已加入購物車：${v} × ${q}（示意）。請在此串接金流或導向結帳頁。`;
}
