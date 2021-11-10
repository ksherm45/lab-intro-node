class SortedList {
  constructor() {

  this.items = []
  this.length = this.items.length 
  }

  add(item) {
    this.items.push(item);
    this.length ++ 
    this.items.sort((a,b) => {

      if( a < b){
        return -1;
      }
      else if ( a > b){
        return 1;
      }
      else{
        return 0;
      }
 }) 

 return this.items
    }

  get(pos) {

    if(this.length < pos){
      throw new Error('OutOfBounds'); 
    }
    else{
    return this.items[pos]
    }
  }

  max() {
    if(this.length == 0){
      throw new Error('EmptySortedList');
    }
    else{
      return this.items.slice(-1)
    }
  }

  min() {
    if(this.length == 0){
      throw new Error('EmptySortedList');
    }
    else{
      return this.items.slice(0,1)
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
