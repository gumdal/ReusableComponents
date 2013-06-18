// http://stackoverflow.com/questions/16259554/html-table-data-td-screen-co-ordinates-or-frame-in-uiwebview
// http://www.w3schools.com/jsref/dom_obj_all.asp
function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    var _height = 0;
    var _width = 0;
    _height += el.offsetHeight;
    _width += el.offsetWidth;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ))
    {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x , width: _width, height:_height};
}