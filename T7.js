function Myfun (n,m){
    let num1 = 0;
    let divisibleby3= 0;
    for (i=1; i<=n; i++){
        if(i%3==0){
            divisibleby3 += i;
        }
        else{
            num1 += i;
        }


    }
    return num1-divisibleby3
}
console.log(Myfun(10,3));
