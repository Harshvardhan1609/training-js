// include is the function in the javascript 
let b=[20,40,50]
let flag;
// console.log(b.includes(30)) 
// inbuilt function in the javascript
for(let i=0; i<b.length;i++)
{
    if(b[i]==30)
    {
        flag=true;
        break;
    }
}

if(flag==true)
{
    console.log("Element is Present")
}