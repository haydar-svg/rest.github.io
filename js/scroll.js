function left_s() {
    document.getElementById('c_right').style.opacity = 1;
    document.getElementById('c_right').style.cursor = 'pointer';
    old_st = document.getElementById('sc').scrollLeft
    document.getElementById('sc').scrollLeft = document.getElementById('sc').scrollLeft + 290;
    if (document.getElementById('sc').scrollLeft == old_st) {
        document.getElementById('c_left').style.opacity = 0.3;
        document.getElementById('c_left').style.cursor = 'default';
    }
}

function right_s() {
    document.getElementById('c_left').style.opacity = 1;
    document.getElementById('c_left').style.cursor = 'pointer';
    document.getElementById('sc').scrollLeft = document.getElementById('sc').scrollLeft - 290;
    if (document.getElementById('sc').scrollLeft == 0) {
        document.getElementById('c_right').style.opacity = 0.3;
        document.getElementById('c_right').style.cursor = 'default';
    }
}