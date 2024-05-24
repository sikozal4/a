'use strict';


const img = ["siroaho.png", "kuroaho.png"];

let count = -1;

picChange(); // 関数を実行
function buttonClick1() {
    alert('ボタンがクリックされました3');
    for (let k = 0; k < 10; k++) {
        for (let i = 0; i < 10; i++) {
            window.open(
                "baka.html",
                "_blank",
                `menubar=0,width=600,height=400,top=${100 + i * 20},left=${100 + i * 20 + k * 20}`
            );
        }
    }
}
function buttonClick2() {
    alert('ボタンがクリックされました3');

    for (let i = 0; i < 10; i++) {
        window.open(
            "baka.html",
            "_blank",
            `menubar=0,width=600,height=400,top=${100 + i * 20},left=${100 + i * 20}`
        );
    }

}


function picChange() {

    count++;

    // カウントが最大になれば配列を初期値に戻すため「0」を指定する
    if (count == img.length) count = 0;

    // 画像選択
    document.getElementById("pic").src = img[count];

    // 1秒ごとに実行
    setTimeout("picChange()", 50);
}
