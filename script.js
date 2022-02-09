function cumSum(arr){
    const creds = arr.reduce((acc, val) => {
        let { sum, res } = acc;
        sum += val;
        res.push(sum);
        return { sum, res };
     }, {
        sum: 0,
        res: []
     });
     return creds.res;
}


const test =[1,2,3,4,5,6,7,8,9,10]

console.log(cumSum(test));