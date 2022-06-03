const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$ ('.tab-item');
const panes = $$ ('.tab-pane');

const line = $ ('.line');
const tabActive = $ ('.tab-item.active')
requestIdleCallback(()=> {
    line.style.left = tabActive.offsetLeft + 'px';
    line.style.width = tabActive.offsetWidth + 'px';
});

tabs.forEach((tab, index) => {
    const pan = panes[index];
    tab.onclick = function (){
        $ ('.tab-item.active').classList.remove('active');
        $ ('.tab-pane.active').classList.remove('active');
        this.classList.add('active');
        pan.classList.add('active');
        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';
    }
});