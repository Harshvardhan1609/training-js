let a = [1, 2, 3, 4];
function binarySearch(a,key){
    let low=0;
    let rear=a.length-1;
    while (low<rear) {
        let mid = Math.floor((low+rear)/2);
        if(key===a[mid]){
            console.log("Element is present")
            return mid;
        }
        else if(key<a[mid]){
            rear=mid-1;
        }
        else
        {
            low = mid+1;
        }
    }
    return false;
}

console.log(binarySearch(a,2))