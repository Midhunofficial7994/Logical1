// Array 


const nums=[2,1,3]
arr1=[];
arr2=[];
arr1.push(nums[0]);
arr2.push(nums[1]);

    for(i= 2;i<nums.length;i++) if(arr1[arr1.length-1]>arr2[arr2.length-1]){
        arr1.push(nums[i]);
        
       }else(arr2.push(nums[i]))
       let result =[...arr1,arr2].flat()
       console.log(result);