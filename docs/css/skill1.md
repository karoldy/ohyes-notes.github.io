
# Jquery 导航栏 子元素 选中，滚动到居中位置

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>scroll——bar</title>
</head>
<style>
    * {
        margin: 0;
        padding: 0;
    }

    .sliderbar {
        margin-top: 12px;
        overflow-y: hidden;
        overflow-x: scroll;
    }

    .sliderbar::-webkit-scrollbar {
        display: none;
    }

    .slider_wrap {
        white-space: nowrap;
        position: relative;
        padding-bottom: 2px;
    }

    .slider_wrap .slider_item {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        padding: 0 8px;
        font-size: 12px;
        white-space: nowrap;
    }

    .slider_wrap .slider_item.active {
        color: #f06868;
    }

    .slider_wrap .slider_item.active::after {
        position: absolute;
        content: "";
    }

    .slider_wrap .slider_item:first {
        padding-left: 0;
    }

    .slider_wrap .line {
        position: absolute;
        width: 20px;
        left: 0;
        bottom: 0;
        height: 2px;
        border-radius: 2px;
        background: #f06868;
        transition: all 0.3s;
        transform: translateX(-50%);
    }
</style>

<body>
    <div class="sliderbar">
        <div class="slider_wrap">
            <div class="slider_item active">part_1</div>
            <div class="slider_item">part_2</div>
            <div class="slider_item">part_3</div>
            <div class="slider_item">part_4</div>
            <div class="slider_item">part_5</div>
            <div class="slider_item">part_6</div>
            <div class="slider_item">part_7</div>
            <div class="slider_item">part_8</div>
            <div class="slider_item">part_9</div>
            <div class="line"></div>
        </div>
    </div>
</body>

</html>
<script src="./js/jquery-3.6.0.min.js"></script>
<script>
    scrollbar()
    function scrollbar() {
        //选中的item底下线相对于item宽度的比列
        let lineWidthScale = 0.5
        let activeItem = $('.slider_wrap .slider_item.active')
        // 选中的item宽度
        let activeItemWidth = activeItem.outerWidth()
        // console.log($('.slider_wrap .slider_item.active')).position()
        let line = $('.slider_wrap .line')
        //滚动区域
        let scrollWrap = $('.sliderbar')

        if (activeItem) {
            //初始化line的位置
            line.css({
                width: activeItemWidth * lineWidthScale,
                left: activeItemWidth * 0.5 + (activeItem.position().left)//这里的0.5表示选中的item所处位置为box的二分之一
            })
        }

        $('.slider_item').click(function () {
            // 元素距离父元素的位置
            let left = $(this).position().left
            //当前item的宽度
            let thisOutWidth = $(this).outerWidth()
            //滚动距离
            let scrollDistance = (left + thisOutWidth / 2) - scrollWrap.width() / 2
            scrollWrap.animate({
                scrollLeft: scrollDistance
            }, 400)
            $('.slider_item').removeClass('active')
            $(this).addClass('active')
            line.css({
                width: thisOutWidth * lineWidthScale,
                left: left + thisOutWidth / 2
            })
        })
    }
</script>
```