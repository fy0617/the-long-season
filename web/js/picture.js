// 获取所有带有time-part类名的元素，也就是时间部分元素
const timeParts = document.querySelectorAll('.time-part');
timeParts.forEach((timePart) => {
    timePart.addEventListener('mouseover', function () {
        const imgUrl = this.dataset.imageUrl;
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '70%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.backgroundColor = 'white';
        modal.style.padding = '0px';
        modal.style.border = '1px solid gray';
        modal.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
        modal.style.zIndex = 1000;

        const img = document.createElement('img');
        img.src = imgUrl;
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';

        modal.appendChild(img);
        document.body.appendChild(modal);
    });
    timePart.addEventListener('mouseout', function () {
        const modals = document.querySelectorAll('div[style*="position: fixed"]');
        modals.forEach((modal) => {
            document.body.removeChild(modal);
        });
    });
});