// JavaScript Document
function timer() {
            var start = new Date(2018, 10, 10);
            var t = new Date() - start;
            var h = ~~(t / 1000 / 60 / 60 % 24);
            if (h < 10) {
                h = "0" + h;
            }
            var m = ~~(t / 1000 / 60 % 60);
            if (m < 10) {
                m = "0" + m;
            }
            var s = ~~(t / 1000 % 60);
            if (s < 10) {
                s = "0" + s;
            }
            document.getElementById('d').innerHTML = ~~(t / 1000 / 60 / 60 / 24);
            document.getElementById('h').innerHTML = h;
            document.getElementById('m').innerHTML = m;
            document.getElementById('s').innerHTML = s;

}
function change(n){ if(n>2) n=1;  // 一共5张图片，所以循环替换 
document.getElementById("test").setAttribute("src", "myimage/"+n+".jpg"); 
n++;
setTimeout("change("+n+")",1000);
}