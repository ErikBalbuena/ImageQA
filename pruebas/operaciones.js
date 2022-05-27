const objImage={
    "0": 254,
    "1": 254,
    "2": 125,
    "3": 255,
    "4": 254,
    "5": 254,
    "6": 125,
    "7": 255,
    "8": 254,
    "9": 254,
    "10": 125,
    "11": 255,
    "12": 254,
    "13": 254,
    "14": 125,
    "15": 255,
    "16": 254,
    "17": 254,
    "18": 125,
    "19": 255,
    "20": 254,
    "21": 254,
    "22": 125,
    "23": 255,
    "24": 254,
    "25": 254,
    "26": 125,
    "27": 255,
    "28": 254,
    "29": 254,
    "30": 125,
    "31": 255,
    "32": 254,
    "33": 254,
    "34": 125,
    "35": 255,
    "36": 254,
    "37": 254,
    "38": 125,
    "39": 255,
    "40": 254,
    "41": 254,
    "42": 128,
    "43": 255,
    "44": 254,
    "45": 254,
    "46": 125,
    "47": 255,
    "48": 254,
    "49": 254,
    "50": 125,
    "51": 255,
    "52": 254,
    "53": 254,
    "54": 125,
    "55": 255,
    "56": 254,
    "57": 254,
    "58": 125,
    "59": 255,
    "60": 254,
    }

let arrayImage=Object.values(objImage);
let index=[]
let siguiente=[];
let alto;
let ancho;

function arraySimple() {
    for (let i=2;i<arrayImage.length;i=i+4){
        siguiente.push(arrayImage[i]);
        index.push(i);
    } 
    return siguiente,index
}
arraySimple()

    let mean;
    function standardDeviation(arr){
        mean = arr.reduce((acc, curr)=>{
        return acc + curr
    }, 0) / arr.length;
        
    arr = arr.map((item)=>{
        return (item - mean) ** 2 
    })
    
    let total = arr.reduce((acc, curr)=> acc + curr, 0);
    
    return Math.sqrt(total / arr.length)
    }
    
    console.log("desvStd=",standardDeviation(siguiente),"   media=",mean)

        let copiaArray=[]
        let matrizImage=[];
    function matriz(arr,ancho){
        copiaArray=arr.slice(0,arr.length)
        console.log("matriz.length=",copiaArray.length)
        console.log("copiaArray=",copiaArray)
        let i=0
        while (i<=copiaArray.length+1){
            let filas=[];
            filas=copiaArray.splice(0,ancho);
            // console.log(filas)
            matrizImage.push(filas)
            i++
        }
        console.log("matrizImage=",matrizImage)
    }
     matriz(siguiente,3)



        
   


