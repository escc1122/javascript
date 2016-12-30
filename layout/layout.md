http://www.codeceo.com/article/why-javascript-dom-slow.html

http://gent.ilcore.com/2011/03/how-not-to-trigger-layout-in-webkit.html


如下的操作會打破常規，並觸發瀏覽器執行layout：

    通過js獲取需要計算的DOM屬性
    添加或刪除DOM元素
    resize瀏覽器窗口大小
    改變字體
    css偽類的激活，比如:hover
    通過js修改DOM元素樣式且該樣式涉及到尺寸的改變


