const card_ui = document.querySelector('#body-ui');
const card_ux = document.querySelector('#body-ux');
const card_coding = document.querySelector('#body-coding');
const card_design = document.querySelector('#body-design');
const img_ui = document.querySelector('.ui-img');
const img_ux = document.querySelector('.ux-img');
const img_coding = document.querySelector('.coding-img');
const img_design = document.querySelector('.design-img');

card_ui.addEventListener('mouseenter', function(){
    img_ui.setAttribute('src', '/images/icon-ui-hover.svg')
});

card_ui.addEventListener('mouseleave', function(){
    img_ui.setAttribute('src', '/images/icon-ui-no-hover.svg')
});

card_ux.addEventListener('mouseenter', function(){
    img_ux.setAttribute('src', '/images/icon-ux-hover.svg')
});

card_ux.addEventListener('mouseleave', function(){
    img_ux.setAttribute('src', '/images/icon-ux-no-hover.svg')
});

card_coding.addEventListener('mouseenter', function(){
    img_coding.setAttribute('src', '/images/icon-coding-hover.svg')
});

card_coding.addEventListener('mouseleave', function(){
    img_coding.setAttribute('src', '/images/icon-coding-no-hover.svg')
});

card_design.addEventListener('mouseenter', function(){
    img_design.setAttribute('src', '/images/icon-design-hover.svg')
});

card_design.addEventListener('mouseleave', function(){
    img_design.setAttribute('src', '/images/icon-design-no-hover.svg')
});
