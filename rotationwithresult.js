function unique(arr){
    let result=[]
     if(arr.length===0) return []
    if(arr.length===1) return arr 
    arr.forEach(function(val,index){
        if(arr.indexOf(val)===index) result.push(val)
    })
    return result
}

console.log(unique([10,30,70,10]))
