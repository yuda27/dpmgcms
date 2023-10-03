/** Javascript Custom Template */ 

/** by : Heri Mahyuda - Staf Subbag. Program, Informasi dan Humas DPMG Aceh **/ 
/** Inspeksi Elemen */ 
//** elemen **//
/*$(document).bind("contextmenu",function(e) {
 e.preventDefault();
}); */
//** kontrol F12 **//
/* $(document).keydown(function(e){
    if(e.which === 123){
       return false;
    }
}); */
//** Ctr+Shift+i dan Ctr+Shift+j dan Ctr+U **//
/* window.oncontextmenu = function () {
    return false;
}
$(document).keydown(function (event) {
    if (event.keyCode == 123) {
        return false;
    }
    else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74) || (event.ctrlKey && event.keyCode == 85)) {
        return false;
    }
}); */
//** elemen **//
/* !function t(){try{!function t(n){1===(""+n/n).length&&0!==n||function(){}.constructor("debugger")(),t(++n)}(0)}catch(n){setTimeout(t,5e3)}}(); */

/** setelan banner kiri-kanan **/
$('*[name="widget_home_kiri_bawah"]').prependTo('main > .container');
$('*[name="widget_home_kanan_bawah"]').prependTo('main > .container');

/** setelah menu Tab pada halaman **/
$(document).on('click','.tablinks', function(){
   /* Reset Aktif*/
   $('.tablinks').removeClass('active');
   $('.tabcontent1').css('display','none');
   /* Aktifkan yang diklik saja */
   $(this).addClass('active');
   $('#'+$(this).data('tab')).css('display','block');
});

/** utk GPR Covid Kominfo **/


/** Widget GPR Aceh **/
CMS.Loaded(function(){
const jqueryScript = document.createElement('script')
jqueryScript.src = '//gpr.acehprov.go.id/gpr-aceh.js'
document.head.append(jqueryScript)
})

/** Widget GPR Open Data **/
CMS.Loaded(function(){
const jqueryScript = document.createElement('script')
jqueryScript.src = '//gpr.acehprov.go.id/opendata-widget.js'
document.head.append(jqueryScript)
})

