document.getElementById('toggleBtn').addEventListener('click',function(){
    document.getElementById('sidebar').classList.toggle('active');
})



 document.getElementById('on').addEventListener('click' ,function(){
     document.getElementById('light').src = "./img/pic_bulbon.gif"
 })

 document.getElementById('off').addEventListener('click' ,function(){
     document.getElementById('light').src = "./img/pic_bulboff.gif"
 })



 document.getElementById('eye').addEventListener('click' , function(){


    if(document.getElementById('input').type === 'password'){
        document.getElementById('input').type = 'text';
        document.getElementById('eye').classList.remove('fa-eye-slash');
        document.getElementById('eye').classList.add('fa-eye')
    }else{
        document.getElementById('input').type = 'password'
        document.getElementById('eye').classList.remove('fa-eye');
        document.getElementById('eye').classList.add('fa-eye-slash')
    }
 })


 document.getElementById('password').addEventListener('keyup' ,function () {
    var inputval = document.getElementById('password').value


    if(inputval.length >= 8){
        console.log('strong password')
    }else{
        console.log('week password')
    }
 })





