function question1() //question1
{
    var firstName = prompt("Enter your first name please?");
    var lastName = prompt("Enter your last name please?");
    var fullName = firstName+" "+ lastName;
    alert("Hello "+fullName+"!");
}

function question2() //question2
{
 var favPhone = prompt("Which one is your favourite phone");
 document.write("My favourite phone is "+favPhone);
 document.write("<br/>Length of string : "+favPhone.length); 
}

function question3() //question3
{
 var country = "Pakistani";
 var index = country.indexOf("n");
  document.write("String : "+country);
 document.write("<br/>Index of 'n' is : "+index); 
}

function question4() //question4
{
 var world = "Hello World";
 var index = world.lastIndexOf("l");
  document.write("String : "+world);
 document.write("<br/>Last Index of 'l' is : "+index); 
}

function question5() //question5
{
 var country = "Pakistani";
 var index = country.charAt(3);
  document.write("String : "+country);
 document.write("<br/>Character at index 3 is : "+index); 
}

function question6() //question6
{
    var firstName = prompt("Enter your first name please?");
    var lastName = prompt("Enter your last name please?");
    firstName= firstName.concat(" ");
    var fullName = firstName.concat(lastName);
    alert("Hello "+fullName+"!");
}

function question7() //question7
{
 var city = "Hyderabad";
 var city1=city.replace("Hyderabad","Islamabad");
 document.write("City : "+city);
 document.write("<br/>After replacement : "+city1);
}

function question8() //question8
{
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMsg=message.replace(/and/gi,"&");
 document.write("Message : "+message);
 document.write("<br/>After replacement : "+newMsg);

}

function question9() //question9
{
    var num = "472";
     document.write("Value : "+num);
    document.write("<br/>Type : "+typeof(num));
    num = parseInt(num);
    document.write("<br/>Value : "+num);
    document.write("<br/>Type : "+typeof(num));
}

function question10() //question10
{
    var url =prompt("Enter url? eg.www.google.com");
    var domain = url.slice(4);
     document.write("URL : "+url);
    document.write("<br/>Domain : "+domain);

}


function question11() //question11
{
    var input = prompt("Give any value?");
    document.write("User Input : "+input);
    document.write("<br/>Upper Case : "+input.toUpperCase());
}


function question12() //question12
{
    var input = prompt("Give any value?");
    document.write("User Input : "+input);
    document.write("<br/>Lower Case : "+input.toLowerCase());
}

function question13() //question13
{
    var input = prompt("Give any value?");
    document.write("User Input : "+input);
    var firstChar = input.charAt(0).toUpperCase();
    var restChar = input.slice(1,input.length).toLowerCase();
    input = firstChar+restChar;
    document.write("<br/>Title Case : "+input);
} 

function question14() //question14
{
    var num = 35.36;
    var numString = num.toString();
    var numString= numString.slice(0,2) + numString.slice(3,5);
    document.write("Number : "+num);
    document.write("<br/>Result : "+numString);
}

function question15() //question15
{
 var a= "3";
 var b = "3";
 var x = a+b;
 document.write("a is "+a);
 document.write("<br/>b is "+b);
 document.write("<br/>a+b is "+x);
}

function question16()
{
 var a= "3";
 var b = "3";
 var x = a-b;
 document.write("a is "+a);
 document.write("<br/>b is "+b);
 document.write("<br/>a-b is "+x);
}

function question17() //question17
{
 var userName = prompt("Enter username please?");
 var flag = false;
 for(var i=0;i<userName.length;i++)
 {
     if((userName.charAt(i) === "!")||(userName.charAt(i) === ",")||(userName.charAt(i) === ".")||(userName.charAt(i) === "@"))
     {
         flag=true;
         prompt(userName.charAt(i)+" is not allowed in username.Please Enter a Valid Username...");
         break;
     }
 }
 if(flag == false)
 {
     alert("The username is correct!!");
 }
}

function question18() //question18
{
    var fruits = ["cake", "apple pie", "cookie", "chips", "patties"];
    var search = prompt("Which bakery product you want to search?");
    var searchLower = search.toLowerCase();
    var flag = false;
    for(var i=0;i<fruits.length;i++)
    {
        if(searchLower == fruits[i])
        {
            flag=true;
            document.write(search+" is available at index "+i+" at our bakery.");
            break;
        }
    }
    if(flag== false)
    {
        document.write("We are sorry."+search+" is not available in our bakery");
    }
}

function question19() //question19
{
    var string1 = prompt("Enter String 1?");
    var string2 = prompt("Enter String 2?");
    document.write("String 1: "+string1);
    document.write("<br/>String 2: "+string2);
    if(string1.length>string2.length)
    {
        document.write("<br/>The length of string 1 is greater.");
    }
     if(string1.length<string2.length){
        document.write("<br/>The length of string 2 is greater.");
    }
    if(string1.length==string2.length){
        document.write("<br/>The length of both strings are equal.");
    }
}

function question20() //question20
{
    var password = prompt("Enter Password?");
    var nums=0, alpha=0;
    if(password.length < 6)
        {
            alert("The length of password should be greater than or equal to 6");
        }
    else if ( (password.charCodeAt(0) >=48)&&(password.charCodeAt(0) <=57) )
        {
            alert("The password should not start with a number");
        }
    else
    {
    for(var i=0 ; i<password.length;i++)
    {
        if((password.charCodeAt(i) >=48)&&(password.charCodeAt(i) <=57))
        {
            nums++;
        }
        if((password.charCodeAt(i) >=65)&&(password.charCodeAt(i) <=90))
        {
            alpha++;
        }
        if((password.charCodeAt(i) >=97)&&(password.charCodeAt(i) <=122))
        {
            alpha++;
        }
    }
    document.write("Password correct : "+password);
    document.write("<br/>Alphabets : "+alpha);
    document.write("<br/>Numbers : "+nums);
    }
}

function question21() //question21
{
    var university = "University of Karachi";
    var splitted = university.split("");
    for(var i=0;i<splitted.length;i++)
    {
        document.write(splitted[i]+"<br/>");
    }
}

function question22() //question22
{
    var input = "Pakistan";
    var lastChar = input.charAt((input.length)-1);
    document.write("User Input : "+input);
    document.write("<br/>Last Character of Input : "+lastChar);
}

function question23() //question23
{
var message ="The quick brown fox jumps over the lazy dog";
var count = (message.match(/the/gi) || []).length;
document.write("Text : "+message);
document.write("<br/>There are "+count+" occurances of the word 'the'.");
}

function question24() //question24
{
    var str = "Pakistan";
    var vowels =0 , consonants=0;
    for(var i=0;i<str.length;i++)
    {
        if((str.charAt(i)=="a")||(str.charAt(i)=="e")||(str.charAt(i)=="i")||(str.charAt(i)=="o")||(str.charAt(i)=="u"))
        {
            vowels++;
        }
        else{
            consonants++;
        }
    }
    document.write("String : "+str);
    document.write("<br/>Vowels : "+vowels);
    document.write("<br/>Consonants : "+consonants); 
}