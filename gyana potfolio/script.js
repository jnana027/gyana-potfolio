//Header toogle

let MenuBtn = document.getElementById('MenuBtn');

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

//typeing effect

let typed = new Typed('.auto-input',{
    strings:['Data Analyst!'],
    typeSpeed:100,
    backSpeed:200,
    backDelay:2000,
    loop:true,

});

//javascript for tab navigation horizental scrolll buttons

const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".tab-menu");

const IconVisibility = () => {
    let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);
    console.log(scrollLeftValue);
    let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;
    btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
    btnRight.style.display = scrollableWidth > scrollLeftValue ? "block" : "none";
};

btnRight.addEventListener("click",() =>{
    tabMenu.scrollLeft += 150;
    IconVisibility();
});
btnLeft .addEventListener("click",() =>{
    tabMenu.scrollLeft -= 150;
    IconVisibility();
})

window.onload = function(){
    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
    btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
}
window.onresize = function(){
    btnRight.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
    btnLeft.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
    let scrollLeftValue = Math.round(tabMenu.scrollLeft);
    btnLeft.style.display = scrollLeftValue >0 ? "block" : "none";

}

// //javascript to make the the tab navigation draggable
// let activeDrag = false;

// tabMenu.addEventListener("mousemove", (drag) =>{
//     if(!activeDrag) return;
//     tabMenu.scrollLeft -= drag.movementx;
//     IconVisibility();
//     tabMenu.classList.add("dragging");
// });

// document.addEventListener("mouseup", ()=>{
//     activeDrag = false;
// })

// tabMenu.addEventListener("mousedown", () =>{
//     activeDrag = true;
// });

// //Javascript to view tab contents on slick tab buttons
// const tabs = document.querySelectorAll(".tab");
// const tabBtns = document.querySelectorAll(".tab-btn");

// const tab_Nav = function(tabBtnClick){
//     tabBtns[tabBtnClick].classList.add("active");
//     tabs[tabBtnClick].classList.add("active");
// }

// tabBtns.forEach((tabBtn,i) => {
//     tabBtn.addEventListener("click", () =>{
//         tabBtn.addEventListener("click", () =>{
//             tab_Nav(i);
//         })
//     })
// })

