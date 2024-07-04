// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 1;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('#print');
b.addEventListener('click',hantei);


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="yoso0"]');
  let yoso = i.value;
  let ans = document.querySelector('span#answer');
  let kai = document.querySelector('span#kaisu');
  let res = document.querySelector('p#result');
  kai.textContent = kaisu;
  ans.textContent = yoso;

  console.log(kaisu+'回目の予想: '+yoso);
  if(kaisu<4){
    if(kotae==yoso){
        res.textContent='正解です. おめでとう!';
        kaisu += 3;
    }
    else if(kotae!=yoso && kaisu>2){
        res.textContent='まちがい. 残念でした答えは'+kotae+'です.';
        kaisu = kaisu + 1;
    }
    else if(kotae>=yoso){
        res.textContent='まちがい. 答えはもっと大きいですよ.';
        kaisu = kaisu + 1;
    }
    else if(kotae<=yoso){
        res.textContent='まちがい. 答えはもっと小さいですよ.';
        kaisu = kaisu + 1;
    }
  }
  else{
    res.textContent='答えは'+kotae+'でした. すでにゲームは終わってます.';
    kaisu = kaisu + 1;
  }
  
  

}