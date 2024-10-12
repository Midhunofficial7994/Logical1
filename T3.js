
// Second Largest


// const arr = [1,2,3,444,5];
// let large = 0;
// let second = 0;

// for (num of arr){
//     if (num>large){
//         second = large;
//         large = num
        
//     }
//     else if(num>second && num<large){
//         second = num
//     }
// }
// console.log(second);


// Anagram


// let str1= "silent";
// let str2 = "listen";

// function Anagram (){
//     function check (str){
//         return str
//         .toLowerCase()
//          .split('')
//          .sort()
//          .join('')
          
          
        
        
//     }
//     return check(str1)===check(str2)
// }
// console.log(Anagram("Hello",'World'))



// Remove Duplicates from Array 


const arr= [1,1,1,2,3,3,4,5,5,6,6];

let result = arr.filter ((element,index,self)=> self.indexOf(element)===index);
console.log(result);


//  Merging 2 Sorted Arrays


class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  
  function mergeTwoLists(list1, list2) {
   
    let dummy = new ListNode();
    let current = dummy;
  
  
    while (list1 !== null && list2 !== null) {
      if (list1.val <= list2.val) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next; 
    }
  
    
    current.next = list1 !== null ? list1 : list2;
  
   
    return dummy.next;
  }
  
  
  function arrayToList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let num of arr) {
      current.next = new ListNode(num);
      current = current.next;
    }
    return dummy.next;
  }
  
  
  function listToArray(list) {
    let result = [];
    while (list !== null) {
      result.push(list.val);
      list = list.next;
    }
    return result;
  }
  
  
  const list1 = arrayToList([1, 2, 4]);
  const list2 = arrayToList([1, 3, 4]);
  
  const mergedList = mergeTwoLists(list1, list2);
  console.log(listToArray(mergedList)); 
  


















 



















