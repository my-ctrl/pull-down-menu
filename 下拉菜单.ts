// 1.获取元素
var nav = document.querySelector(".nav");
var lis = nav.children;
console.log(nav);
console.log(lis); //得到4个小Li  儿子
// 循环注册事件
for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mouseenter', function () {
        this.children[1].style.display = "block";
        console.log(1);
    })
    lis[i].addEventListener('mouseleave', function () {
        this.children[1].style.display = "none";
        console.log(1);
    })
    // lis[i]
//   lis[i].onmouseover = function () {
//     this.children[1].style.display = "block";
//     console.log(1);
//   };
//   lis[i].onmouseout = function () {
//     this.children[1].style.display = "none";
//   };
}
