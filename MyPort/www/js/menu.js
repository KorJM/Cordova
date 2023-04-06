document.addEventListener('DOMContentLoaded', function(){
    document.querySelector(".mobile-menu").addEventListener("click", function(e){
        if ( document.querySelector('.menuwrap').classList.contains('on') ){
            //메뉴닫힘
            document.querySelector('.menuwrap').classList.remove('on');
            console.log(0);
        } else {
            //메뉴펼처짐
            document.querySelector('.menuwrap').classList.add('on');
            console.log(1);
        }
    });
});

document.addEventListener('click', function(e) {
    if (!e.target.closest('.mobile-menu') && document.querySelector('.menuwrap.on')) {
        document.querySelector('.menuwrap').classList.remove('on');
    }
});

function closeMenuAndNavigate(pageId) {
    document.querySelector('.menuwrap').classList.remove('on');    
    console.log(2);
    $.mobile.changePage(pageId, { changeHash: false });
};



document.addEventListener('DOMContentLoaded', function() {
    const myDiv = document.querySelector('#gitdiv');

    myDiv.addEventListener('click', function() {
        window.location.href = "https://github.com/KorJM";
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const myDiv = document.querySelector('#googlediv');

    myDiv.addEventListener('click', function() {
        window.location.href = "https://www.google.co.kr/?hl=ko";
    });
});