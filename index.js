const pageTop = document.getElementById('page_top');

// どれくらいスクロールしたら表示するかの値
const scroll = 200;

// スクロールイベントリスナーを追加
window.addEventListener('scroll', () => {
    // 一定量スクロールしたらクラスを付与
    if (window.scrollY > scroll) {
        pageTop.classList.add('is_active'); 
    } else {
        pageTop.classList.remove('is_active'); 
    }
});