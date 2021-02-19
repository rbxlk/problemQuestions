let climbStairs = function(n) {
    let countingFunc = function(stairsRemaining, savedResults) {
      if (stairsRemaining < 0) {
        return 0;
      }

      if (stairsRemaining === 0) {
        return 1;
      }

      if (savedResults[stairsRemaining]) {
        return savedResults[stairsRemaining];
      }

      savedResults[stairsRemaining] = countingFunc(stairsRemaining - 1, savedResults) + countingFunc(stairsRemaining - 2, savedResults);

      return savedResults[stairsRemaining];
    };

    return countingFunc(n, {});
};

/** BINARY TREE MEMOIZATION - https://www.youtube.com/watch?v=UyDyc6yV1iQ&feature=youtu.be
 * n = 3 
 * 
 *  Is the path we've taken invalid? (less than 0): No
 *  Is the path we have taken completed? (steps remaining equals 0)  No
 *  Have the total possible paths for the current steps remanining been seen before (check the map with the key corresponding to steps remaining)? No
 * 
 *  In our Map, under the a new key for the current steps remaining (3) calculate the number of possible paths for 3 steps.
 *  We can start our path in only two ways, taking 1 step or 2.
 * 
 *  Taking 1 Step:
 *  n = 3 - 1 (2 steps remaining)
 * 
 *  Is the path we've taken invalid? (less than 0): No
 *  Is the path we have taken completed? (steps remaining equals 0)  No
 *  Have the total possible paths for the current steps remanining been seen before (check the map with the key corresponding to steps remaining)? No
 * 
 *  In our Map, under the a new key for the current steps remaining (2) calculate the number of possible paths for 2 steps.
 *  We can start our path in only two ways, taking 1 step or 2.
 * 
 *  Taking 1 Step:
 *  n = 2 - 1 (1 step remaining)
 * 
 *  Is the path we've taken invalid? (less than 0): No
 *  Is the path we have taken completed? (steps remaining equals 0)  No
 *  Have the total possible paths for the current steps remanining been seen before (check the map with the key corresponding to steps remaining)? No
 * 
 *  In our Map, under the a new key for the current steps remaining (1) calculate the number of possible paths for 1 step.
 *  We can start our path in only two ways, taking 1 step or 2.
 * 
 *  Taking 1 Step:
 *  n = 1 - 1 (0 steps remaining)
 *  Is the path we've taken invalid? (less than 0): No
 *  Is the path we have taken completed? (steps remaining equals 0) Yes!
 * 
 *  We now return the value 1, which corresponds to the fact we have completed one unique path starting step.
 *  
 *  However, we can also start a path by taking 2 steps. Therefore we again need to recursively go through this process where we calculate n - 2.
 *  We find at the end of this recursion, that we get a value of -1 (the base case you cannot take 2 steps with only 1 step). Therefore with 1 step remaining,
 *  there is only 1 total path. This value gets stored in our map as 1:1 (key being the steps remaining, value being how many paths are possible).
 * 
 *  We continue to recurisvely complete the function and store values of unique paths in our map. This builds up a map of all the unique paths for n steps remaining.
 *  At the end of this, we can safely return the steps remaining (n) from our map which contains the total value of possible paths.
 *  
 * 
 *  
 *      
 * 
 * 
 */