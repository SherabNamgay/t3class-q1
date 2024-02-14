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
addBinary(a,b)

addBinary(a, b) === [1, 0, 0, 0, 1, 0, 1]

const a = [1, 0, 1, 1, 0, 1]
const b = [0, 1, 1, 0, 1, 0]
//  010101
function subtractBinary(binA,binB){
    var diff=[]
    for (var i=binA.length-1; i>=0; i--){
        diff[i]=binA[i]-binB[i]
    }
    for (var i=diff.length-1; i>=0; i--){
        if (diff[i]<0){
            diff[i]=diff[i]+2 
            diff[i-1]-=1
        }
    }
    console.log(diff);
}
subtractBinary(a,b);

function numToBin(num){
    
}