const imagesJquery = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentIndexJquery = 0;
const currentImageJquery = $("#current-image-jquery");
const prevButtonJquery = $("#prev-button-jquery");
const nextButtonJquery = $("#next-button-jquery");

function showImageJquery(index) {
    currentImageJquery.attr("src", imagesJquery[index]);
}

prevButtonJquery.click(function () {
    currentIndexJquery = (currentIndexJquery-1 + imagesJquery.length) % imagesJquery.length;
    showImageJquery(currentIndexJquery);
});

nextButtonJquery.click(function () {
    currentIndexJquery = (currentIndexJquery+1) % imagesJquery.length;
    showImageJquery(currentIndexJquery);
});

showImageJquery(currentIndexJquery);