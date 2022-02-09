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
