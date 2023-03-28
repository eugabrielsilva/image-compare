document.querySelectorAll('.image-compare').forEach(el => {
    // Wrap image elements
    el.querySelectorAll('img').forEach(elem => {
        let div = document.createElement('div');
        div.classList.add('image-compare-wrapper');
        elem.classList.add('image-compare-image');
        elem.parentElement.insertBefore(div, elem);
        div.appendChild(elem);
    });

    // Vars
    el.beforeImg = el.querySelector('div:first-of-type');
    el.afterImg = el.querySelector('div:last-of-type');
    el.isDragging = false;

    // Get zoom property
    el.zoomProp = document.querySelector('body').style.zoom;
    if(!el.zoomProp || el.zoomProp === 'unset') el.zoomProp = 1;

    // Set initial size
    el.beforeImg.querySelector('img').style.width = el.clientWidth + 'px';

    // Create handle
    el.handle = document.createElement('a');
    el.handle.className = 'image-compare-handle';
    el.appendChild(el.handle);

    // Create before/after labels
    el.beforeLabel = document.createElement('span');
    el.afterLabel = document.createElement('span');
    el.beforeLabel.classList.add('image-compare-label');
    el.afterLabel.classList.add('image-compare-label');
    el.beforeLabel.innerHTML = 'Antes';
    el.afterLabel.innerHTML = 'Depois';
    el.beforeImg.appendChild(el.beforeLabel);
    el.afterImg.appendChild(el.afterLabel);

    // Add handle mousedown event
    el.handle.addEventListener('mousedown', () => {
        el.isDragging = true;
    });

    // Add wrapper mousemove event
    el.addEventListener('mousemove', e => {
        if(el.isDragging) {
            let rect = el.getBoundingClientRect();
            let x = e.clientX - (rect.left * el.zoomProp);
            x = x / el.zoomProp;
            if(x >= 0 && x <= el.clientWidth) {
                el.handle.style.left = x + 'px';
                el.beforeImg.style.width = x + 'px';
            }
        }
    });

    // Add window mouseup event
    window.addEventListener('mouseup', () => {
        el.isDragging = false;
    });

    // Add wrapper resize event
    window.addEventListener('resize', () => {
        // Get zoom property again
        el.zoomProp = document.querySelector('body').style.zoom;
        if(!el.zoomProp || el.zoomProp === 'unset') el.zoomProp = 1;

        // Parse initial size again
        el.beforeImg.querySelector('img').style.width = el.clientWidth + 'px';

        // Reset handle position
        el.handle.style.left = '50%';
        el.beforeImg.style.width = '50%';
    });
})