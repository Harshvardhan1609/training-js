(function(arr,k){
    if(arr.length===0) console.log([])
    if(arr.length===1) console.log(arr)
    for(let i=0; i<k ; i++)
    {
        arr.unshift(arr.pop())
    }
    console.log(arr)
})([10,30,60],1)