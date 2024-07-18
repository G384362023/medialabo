/////////// 課題3-2 ここからプログラムを書こう

let b = document.querySelector('#print');
b.addEventListener('click',sendRequest);

let div = document.querySelector("div#result");
let p = document.createElement('p');
let h3 = document.createElement('h3');
div.insertAdjacentElement('beforebegin',p);
p.insertAdjacentElement('beforeend',h3);
h3.textContent = 'グルメ情報(検索結果は0件です)';


function sendRequest() {
  // URL を設定
  let v = document.querySelector('input[name="srch"]');
  let genre = v.value;
  code = codeHenkan(genre);
  console.log('検索キー:'+code);
  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/'+code+'.json';
 
  
  // 通信開始
  
  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}

function codeHenkan(name){
  if(name=='居酒屋'){
    return 'G001';
  }
  if(name=='ダイニングバー・バル'){
    return 'G002';
  }
  if(name=='創作料理'){
    return 'G003';
  }
  if(name=='和食'){
    return 'G004';
  }
  if(name=='洋食'){
    return 'G005';
  }
  if(name=='イタリアン'||name=='フレンチ'||name=='イタリアン・フレンチ'){
    return 'G006';
  }
  if(name=='中華'){
    return 'G007';
  }
  if(name=='焼肉'||name=='ホルモン'||name=='焼肉・ホルモン'){
    return 'G008';
  }
  if(name=='アジア'||name=='エスニック料理'||name=='アジア・エスニック料理'){
    return 'G009';
  }
  if(name=='各国料理'||name=='世界料理'){
    return 'G010';
  }
  if(name=='カラオケ'||name=='パーティ'||name=='カラオケ・パーティ'){
    return 'G011';
  }
  if(name=='バー'||name=='カクテル'||name=='バー・カクテル'){
    return 'G012';
  }
  if(name=='ラーメン'){
    return 'G013';
  }
  if(name=='カフェ'||name=='スイーツ'||name=='カフェ・スイーツ'){
    return 'G014';
  }
  if(name=='その他グルメ'){
    return 'G015';
  }
  if(name=='お好み焼き'||name=='もんじゃ'||name=='お好み焼き・もんじゃ'){
    return 'G016';
  }
  if(name=='韓国料理'){
    return 'G017';
  }
}


// 通信が成功した時の処理
function showResult(resp) {
  let kazu=0;
  let kekka = 1;
  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }

  

  let shop = data.results.shop

  div = document.querySelector("div#result");
  
  const node = document.getElementById('result');

  while(node.firstChild){
    node.removeChild(node.firstChild);
  }

  //if(s!=serchID){
    for(let i in shop){
    let li = document.createElement('li');
    li.textContent = '検索結果'+kekka+'件目';
    div.insertAdjacentElement('beforeend',li);
    
    let table = document.createElement("table");
    div.insertAdjacentElement('beforeend',table);
    
    let caption = document.createElement("caption");
    table.insertAdjacentElement('beforeend',caption);
    
    let thead = document.createElement("thead");
    caption.insertAdjacentElement('afterend',thead);

    let tr = document.createElement("tr");
    thead.insertAdjacentElement('beforeend', tr);

    let th = document.createElement('th');
    let th0 = document.createElement('th');
    th.setAttribute('scope','col');
    th0.setAttribute('scope','col');
    tr.insertAdjacentElement('beforeend',th);
    th.insertAdjacentElement("afterend",th0)
    th.textContent = '名前';
    th0.textContent = data.results.shop[i].name;

    let tbody = document.createElement('tbody');
    thead.insertAdjacentElement('afterend', tbody);

    let tr1 = document.createElement('tr');
    let tr2 = document.createElement('tr');
    let tr3 = document.createElement('tr');
    let tr4 = document.createElement('tr');
    tbody.insertAdjacentElement('beforeend', tr1);
    tr1.insertAdjacentElement('afterend',tr2);
    tr2.insertAdjacentElement('afterend',tr3);
    tr3.insertAdjacentElement('afterend',tr4);

    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');
    let th4 = document.createElement('th');
    th1.setAttribute('scope','col');
    th2.setAttribute('scope','col');
    th3.setAttribute('scope','col');
    th4.setAttribute('scope','col');
    th1.textContent = '最寄り駅';
    th2.textContent = '住所';
    th3.textContent = '予算';
    th4.textContent = '営業時間';
    tr1.insertAdjacentElement('beforeend',th1);
    tr2.insertAdjacentElement('beforeend',th2);
    tr3.insertAdjacentElement('beforeend',th3);
    tr4.insertAdjacentElement('beforeend',th4);

    let td1 =  document.createElement('td');
    let td2 =  document.createElement('td');
    let td3 =  document.createElement('td');
    let td4 =  document.createElement('td');
    td1.textContent = data.results.shop[i].station_name;
    td2.textContent = data.results.shop[i].address;
    td3.textContent = data.results.shop[i].budget.name;
    td4.textContent = data.results.shop[i].open;
    th1.insertAdjacentElement('afterend',td1);
    th2.insertAdjacentElement('afterend',td2);
    th3.insertAdjacentElement('afterend',td3);
    th4.insertAdjacentElement('afterend',td4);

    kekka++;
    kazu++;
    }
  //}
  let tp = document.querySelector('h3');
  tp.textContent = 'グルメ情報(検索結果は'+kazu+'件です)';


  // data をコンソールに出力
  console.log(data);
  // data.x を出力
  console.log(data.x);
}



// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}	



// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}