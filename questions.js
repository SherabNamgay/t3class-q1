
	// Split Binary Chunks

	// For a given string of binary, return an array of strings where each string length is equal to the passed chunk size.

	// Input:
	// - "11010111011101110001101010110100"
	// - 4

	// Output:
	// ["1101", "0111", "0111", "0111", "0001", "1010", "1011", "0100"]

	// If the string is not divisible by the chunk integer, simply chunk the remainder together.

	// Input:
	// - "10101010"
	// - 6
	
	// Output:
	// ["101010", "10"]
    function chunks(chunkSize,binary){
        binary=""+binary
        var myarray=[];
        for (var i=0; i<binary.length; i+=chunkSize){
                myarray.push(binary.slice(i,i+chunkSize))
        }
        return myarray
    }
    // console.log(chunks(4, 11010101010100010101))


/*
	Get Middle Characters
	For a given string, return the middlemost character (or characters if the string has an even length).

	Input:
	- "hello"

	Output:
	"l"

	Input:
	- "Kuzuzangpo"

	Output:
	"za"

*/

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

function getDeepestValue(someObject) {
    var i=0
    while (i<)
}