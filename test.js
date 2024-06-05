function recurDeepCopy(target){
  let copy;
  if(Array.isArray(target)){
    copy = [];
    for(const element of target){
      copy.push(recurDeepCopy(element));
    }
  }else{
    copy = target;
  }
  return copy;
}

const targetArr = [1,[2,[3,[4,[5]]]]];
const deepCopy = recurDeepCopy(targetArr);