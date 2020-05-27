describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([4, 5, 6, 7])).toEqual([[4, 5],[6, 7]])
  });
  it('is able to split an array into two halves and if uneven the right array will have the extra element', function() {
    // your code here
    expect(split([4, 5, 6, 7, 8])).toEqual([[4, 5],[6, 7, 8]])
  });

});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge([3, 9],[2, 7, 8])).toEqual( [2, 3, 7, 8, 9] );
  });
});



describe('Merge Sort function', function(){
  it('is able to an array', function(){
    // test the merging algorithm
    expect(mergeSort([11111,1111,111,11,1,0])).toEqual( [0,1,11,111,1111,11111] );
  });
});
