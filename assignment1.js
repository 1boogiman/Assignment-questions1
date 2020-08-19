//????????????   VERY EASY    ?????????????

//question 1
function convert(a) {
  return a * 60;
}
console.log(convert(5))
// convert(3);
// convert(2);


// question 2
function dividesEvenly(a, b) {
  return a % b === 0;
}
console.log(dividesEvenly(98, 7))
//dividesEvenly(85, 4);

//????????????   EASY    ?????????????

// question 1
function charCount(a, b) {
    let count = 0;
    for(i=0;i<b.length;i++)
    {
        if(a===b[i])
        {
          count++;
        }
    }
    return count
  }
  consol.log(charCount("a", "edabit"))
  //charCount("c", "edabit");
  //charCount("b", "edabit");

//question 2
function addUp(a) {
  let sum = 0;
  for (let i = 1; i <= a; i++) {
    sum += i;
  }
  return sum;
}
console.log(addUp(4));
//addUp(13)
//addUp(600)


// question 3
function replaceVowel(a) {
  var b = "";
  var gib = ["a", "e", "i", "o", "u"];
  for (i = 0; i < a.length; i++) {
    if (gib.includes(a[i])) {
      if (a[i] === "a") {
        b += "1";
      } else if (a[i] === "e") {
        b += "2";
      } else if (a[i] === "i") {
        b += "3";
      } else if (a[i] === "o") {
        b += "4";
      } else if (a[i] === "u") {
        b += "5";
      }
    } else {
      b += a[i];
    }
  }
  return b;
}
console.log(replaceVowel("karachi"));
//replaceVowel("chembur")
//replaceVowel("khandbari")

//????????????   MEDIUM   ?????????????

 //question 1 
function specialReverse(a,x)
{
  let res=a.split(" ")
  for(let i = 0;i<res.length;i++)
  {
    
    if(res[i].indexOf(x)===0)
    {
       let b = res[i];
       let c = b.split("");
       c=c.reverse();
       b=c.join("");
       res[i]=b;
    }
  }
  res=res.join(" ");
 return res
}
console.log(specialReverse("word searches are super fun","s"));

// question 2

let z=["t1","t1","t1","t1"];
let y= 0;
function testJackpot(arr,count)
{
  for(let i =0;i<arr.length-1;i++)
  {
    if(arr[i]!==arr[i+1])
    {
      count++;
    }
  }
  if(count===0)
  {
    return true;
  }
  else{
    return false
  }
}
console.log(testJackpot(a,b))

//question 3

let x=["A","b","b","A","1",1,2,1,1,1];
let w=[];

function removeDups(a,b)
{
  b[0]=a[0];
  
  for(let i = 1;i<a.length;i++)
  {
    if(b.includes(a[i]))
    {

    }
    else{
     b= b.concat(a[i]);
    }
  }
  return b;
}
console.log(removeDups(x,w))

//????????????   MEDIUM   ?????????????

//question 1

//question2
