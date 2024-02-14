function addBinary(binA, binB) {
    var ans =[]   
    for (var i=binA.length-1; i>=0; i--){
        ans[i]=binA[i]+binB[i]
    }
    ans.unshift(0)
    for (var i=ans.length-1; i>=0; i--){
        if (ans[i]>=2){
            ans[i]=ans[i]-2
            ans[i-1]+=1
        }
    }
    console.log(ans)
}

const a = [1, 0, 1, 1, 0, 1]
const b = [0, 1, 1, 0, 0, 0]
// addBinary(a,b)

// addBinary(a, b) === [1, 0, 0, 0, 1, 0, 1]
function subtractBinary(binA,binB){
    var ans=[]
    for (var i=binA.length-1; i>=0; i--){
        ans[i]=binA[i]-binB[i]
    }
    console.log(ans)
    for (var i=ans.length-1; i>=0; i--){
        if (ans[i]<0){
            ans[i]=1
            ans[i-1]-=1
        }
    }
}

subtractBinary(a,b)