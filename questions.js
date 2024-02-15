
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
    if(someString.length%2 ==0){
        middle= someString[(someString.length/2)-1]+someString[(someString.length/2)] ;
        return middle
    }else{
        middle= someString[Math.floor(someString.length/2)]
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
var obj={a: 1,b: {c: 2},d: 3,e: {f: {g: 4}, i:{j:5}}}

// function getDeepestValue(obj) {
//     var deepestValue=[]
//     for(const keys in obj){
//         if (typeof obj[keys]==="object"){
//            var innervalue = (getDeepestValue(obj[keys])) 
// 		   if(innervalue !== undefined){
// 			deepestValue=innervalue
// 		   }
// 		//    console.log(obj[keys])
// 		//    console.log(innervalue)
// 		}else{
// 			// console.log(obj[keys])
// 			deepestValue.push(obj[keys])
// 		}
//     }
// 	return deepestValue
// }

// function getDeepestValue(obj){
// 	var deepestValue=[]
// 	count =0;
// 	for(const keys in obj){
// 		if(typeof obj[keys]==="object"){
// 			var innervalue = getDeepestValue(obj[keys])
// 			if (innervalue !== undefined){
// 				deepestValue=innervalue
// 			}
// 		}else{
// 			deepestValue.push(obj[keys])
// 		}
// 	}
// 	return deepestValue
// }



// sonams code
function getDeepestValue(obj) {
    var keepTrack = []
    var capture = Object.values(obj)
    var canGoDeeper = []
    for (var i =0 ; i<capture.length; i++){
        if( typeof capture[i] === 'object'){
            canGoDeeper.push(capture[i])
        }
    } 
    if(canGoDeeper.length === 0){
        return capture[0]
    }else{
        for (var j = 0; j<canGoDeeper.length; i++){
            getDeepestValue(keepTrack)
        }
    }
}


// remodel

  
console.log(getDeepestValue(obj))

