

document.addEventListener('DOMContentLoaded', function () {
    const wangXiangElement = document.querySelector('.wang-xiang');
    const wangYangElement = document.querySelector('.wang-yang');
    const gongBiaoElement = document.querySelector('.gong-biao');
    const shenMoElement = document.querySelector('.shen-mo');
    const madeShengElement = document.querySelector('.ma-de-sheng');

    wangXiangElement.addEventListener('mouseover', function () {
        document.body.style.backgroundImage = "url('../img/wx_back.png')";
    });
    wangXiangElement.addEventListener('mouseout', function () {
        document.body.style.backgroundImage = "url('../img/poster.jpg')";
    });

    wangYangElement.addEventListener('mouseover', function () {
        document.body.style.backgroundImage = "url('../img/wy_back.jpg')";
    });
    wangYangElement.addEventListener('mouseout', function () {
        document.body.style.backgroundImage = "url('../img/poster.jpg')";
    });

    gongBiaoElement.addEventListener('mouseover', function () {
        document.body.style.backgroundImage = "url('../img/gb_back.jpg')";
    });
    gongBiaoElement.addEventListener('mouseout', function () {
        document.body.style.backgroundImage = "url('../img/poster.jpg')";
    });

    shenMoElement.addEventListener('mouseover', function () {
        document.body.style.backgroundImage = "url('../img/sm_back.png')";
    });
    shenMoElement.addEventListener('mouseout', function () {
        document.body.style.backgroundImage = "url('../img/poster.jpg')";
    });

    madeShengElement.addEventListener('mouseover', function () {
        document.body.style.backgroundImage = "url('../img/mds_back.png')";
    });
    madeShengElement.addEventListener('mouseout', function () {
        document.body.style.backgroundImage = "url('../img/poster.jpg')";
    });
});