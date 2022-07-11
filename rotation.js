let rotation=(a,num)=>{
    for(i=1;i<=num;i++)
    {
        b = a[0]
        c = a[1]
        a.shift()
        a.shift()
        a.push(b)
        a.push(c)
    }
}
a = [10,30,60]
alert(a)
k = prompt("Please enter the value of k")
rotation(a,k)
alert(a);