// Created by Jully Fredy
 
/*
*    Author        : Maz                  *
*    Title         : Quiz Factory 2.0     *
*    Extra Credits : Tim G                **/
//alert("Special thanks to Author @MAZ")

window.onload = function () { 
    var button = document.getElementsByTagName("button")[0]; 
    var p = document.getElementsByTagName("p")[0]; 
    var code = document.getElementsByTagName("p")[1]; 
    var input = document.getElementsByTagName("input")[0]; 
    var span = document.getElementsByTagName("span")[0]; 
    var submit = document.getElementsByTagName("button")[1]; 
    var container = document.querySelectorAll(".container")[0]; 
    var animationCorrect = document.getElementById("correct"); 
    var animationWrong = document.getElementById("wrong"); 
    var f = document.getElementsByTagName("footer")[0];
 
    var correct = 0; 
    var wrong = 0; 
    var answer = 0; 
    function condition () { 
        var k = input.value.toLowerCase();
        if (k != answer) { 
            document.getElementsByTagName("div")[0].style.display = "none"; 
            animationWrong.style.display = "block"; 
            var time_one = setTimeout(function () { 
                animationWrong.style.transition = "0.5s all"; 
                animationWrong.style.webkitTransition = "0.5s all"; 
                animationWrong.style.margin = "200px 0 0 0"; 
                setTimeout(function(){ 
                    animationCorrect.style.display = "none"; 
                    animationCorrect.style.margin = "200px 0 0 -2000px"; 
                    animationWrong.style.margin = "200px 0 0 -2000px"; 
                    animationWrong.style.display = "none"; 
                    document.getElementsByTagName("div")[0].style.display = "block"; 
                }, 1000) 
            }, 300) 
        } 
        else { 
            document.getElementsByTagName("div")[0].style.display = "none"; 
            animationCorrect.style.display = "block"; 
            var time_one = setTimeout(function () { 
                animationWrong.style.display = "none"; 
                animationWrong.style.margin = "200px 0 0 -2000px"; 
                animationCorrect.style.transition = "0.5s all"; 
                animationCorrect.style.webkitTransition = "0.5s all"; 
                animationCorrect.style.margin = "200px 0 0 0"; 
                setTimeout(function(){ 
                    animationCorrect.style.margin = "200px 0 0 -2000px"; 
                    animationCorrect.style.display = "none"; 
                    document.getElementsByTagName("div")[0].style.display = "block"; 
                }, 1000) 
            }, 300) 
        } 
 
    } 
 
    function quiz_maker (res, num, quiz, func) { 
 
        condition(); 
 
        answer = res; 
        p.innerHTML ="Запитання №"+num ; 
        code.innerHTML = "" + quiz + ""; 
        input.value = ""; 
        submit.addEventListener("click", func) 
       
 
    } 
 
    button.addEventListener("click", function() { 
 
        this.style.display = "none"; 
 
        submit.style.margin = "30px auto 0 auto"; 
        submit.style.display = "block"; 
        input.style.display = "block"; 
        span.style.display = "block"; 
        container.style.display = "block"; 
        f.style.display = "block";
        p.innerHTML = "Запитання №"+"1"; 
        code.innerHTML = "<br>Що потрібно підключити для виведення рядка на консоль?"; 
         
        answer = "#include<iostream>";
        submit.addEventListener("click", second_quiz) 
 
    }) 
 
    function end_screen(){ 
        document.getElementById("code").style.display = "none"; 
        p.style.display = "none"; 
        submit.style.display = "none"; 
        input.style.display = "none"; 
        f.style.display = "none";
        span.style.display = "none"; 
        this.style.display = "none"; 
        document.getElementsByTagName("div")[1].style.display = "none"; 
        document.querySelectorAll(".container-end")[0].style.display = "block"; 
    }; 

    var second_quiz = function () { quiz_maker("main", "2", "Яку назву має головна функція(тіло) програми?", third_quiz, ); } 
    var third_quiz = function () { quiz_maker("void", "3", " Який тип результату головної функції?<br>   #include &lt;iostream&gt;<br> void main()  <br> {<br>std::cout  &lt; &lt;&ldquo;Hello!&rdquo;;<br>}", fourth_quiz,); } 
    var fourth_quiz = function () { quiz_maker("cout", "4", "Яка функція виводить рядок на консоль?<br> (std::)", fifth_quiz,); } 
    
    function fifth_quiz () { 
        answer = "5"; 
        p.innerHTML = "Запитання №5 <br>Що виведе наступний код?"; 
        code.innerHTML = "#include  &lt;iostream&gt; <br>#include  &lt;string&gt; <br> int main()  <br> {  <br> std::string x=&ldquo;5&rdquo;;<br>std::cout  &lt; &lt;x;<br>} "; 
        input.value = ""; 
        submit.addEventListener("click", end_screen); 
    } 
 
} 
 
