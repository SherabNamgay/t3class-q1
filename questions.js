
	// get binary in chunks
    function chunks(chunkSize,binary){
        binary=""+binary
        var myarray=[];
        for (var i=0; i<binary.length; i+=chunkSize){
                myarray.push(binary.slice(i,i+chunkSize))
        }
        return myarray
    }

	// to get the middle character of a string
function getMiddleCharacters(someString) {
    var middle=""
	var half=someString.length/2
    if(someString.length%2 ==0){
		middle=someString.split(half-1,half+1)
        // middle= someString[(someString.length/2)-1]+someString[(someString.length/2)] ;
        return middle
    }else{
		middle=someString.split(Math.floor(half),Math.ceil(half))
        // middle= someString[Math.floor(someString.length/2)]
        return middle
    }
}
// console.log(getMiddleCharacters("hello"))

/*
	Get Deepest Value.

	For any given object, return the deepest value in that object:

	Input:
		{
			a: 1,
			b: {
				c: 2
			},
			d: 3,
			e: {
				f: {
					g: 4
				}
			}
		}

	Output:
	4

	In the above example, the correct answer is 4, because it is nested 3 levels deep.
	e.f.g

	If there are more than one possible deepest value, return either.

*/
var obj={a: 1,b: {c: 2},d: 3,e: {f: {g: { k: 8 }}, i:{j:5}}}

function getDeepestValue(obj, depth = 0) {
    if (typeof obj !== 'object') {
		return {
			val: potentialObject,
			depth: depth
		}
	}else{
		for(const key in obj){
			if (typeof obj[key]==="object"){
			   var innervalue = (getDeepestValue(obj[key], depth+1)) 
			   if(innervalue !== undefined){
				deepestValue=innervalue
			   }
			//    console.log(obj[key])
			//    console.log(innervalue)
			}else{
				// console.log(obj[key])
				deepestValue.push(obj[key])
			}
		}
		return deepestValue
	}
	}

function doTheWork(potentialObject, depth = 0) {

	if (typeof potentialObject !== 'object') {
		return {
			val: potentialObject,
			depth: depth
		}
	} else {
		const children = Object.values(potentialObject)
		var deepValues = []
		for (var i = 0; i < children.length; i++) {
			deepValues = deepValues.concat(doTheWork(children[i], depth + 1))
		}

		var deepestDepth = deepValues[0].depth
		var deepestValue = deepValues[0].val
		for (var i = 0; i < deepValues.length; i++) {
			if (deepValues[i].depth > deepestDepth) {
				var deepestDepth = deepValues[i].depth
				var deepestValue = deepValues[i].val
			}
		}
		return { val: deepestValue, depth: deepestDepth }
	}
}

function getDeepestValue(potentialObject) {
	const result = doTheWork(potentialObject)
	return result.val
}


const testObj = {
	a: 1,
	b: {
		c: 2
	},
	d: 3,
	e: {
		f: {
			g: 4
		},
		h: {
			i: 5
		}
	}
}


const result = getDeepestValue(testObj)

console.log(result)


