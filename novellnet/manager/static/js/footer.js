
// function它指带返回值的子例程或语句。
// 所有函数的开头必须加上“function()” 给函数命名：最好的命名方法是，函数拥有的名称和它所表现的功能相一致
$(document).ready(function() {
    $(".dt_txt").on('click', function () {
        // $(this).next().slideToggle("slow");
        // $(this).toggleClass("active")
        // $(this).attr('id', 'open').next().siblings('dd').slideUp();
         $(this).attr('id', 'open').next().slideDown().siblings('dd').slideUp();
        $(this).siblings("dt").removeAttr("id");
        // (remove删除id属性^ attr 属性（不会自动删除）^ next下拉 ^  slideDown是让隐藏的元素显示^  siblings收起
        // …slideUp打开下拉列表)

        // if ($(this).attr("id") != "open") {
        //
        // }

        $(this).toggle(
            $(this).next().slideUp()
        )

    });

});