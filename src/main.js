document.addEventListener("DOMContentLoaded",function(e){
    const buttons = document.querySelectorAll('[data-tab-button]');

    buttons.forEach((btn)=>{
        btn.addEventListener("click",function(e){
            // console.log(e.target.getAttribute('data-tab-button'));
            // console.log(e.target.dataset.tabButton);
            const abaAlvo = e.target.dataset.tabButton;
            escondeAbas();
            document.querySelector(`[data-tab-id=${abaAlvo}]`).classList.add("shows__list--is-active");
            removeBordaBotaoAtivo();
            e.target.classList.add("shows__tabs__button--is-active");
        })
    })
})

function removeBordaBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    buttons.forEach((btn)=>{
        btn.classList.remove("shows__tabs__button--is-active");
    })
}

function escondeAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    tabsContainer.forEach((tab)=>{
        tab.classList.remove("shows__list--is-active")
    })
}