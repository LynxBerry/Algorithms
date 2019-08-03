//
//  main.cpp
//  MiniNumInSpinningArray
//
//  Created by Steven Shao on 09/09/2018.
//  Copyright © 2018 Steven Shao. All rights reserved.
//

#include <iostream>

using namespace::std;

int getMiniNum(const int*, int);

int main(int argc, const char * argv[]) {
    //[3, 4, 5, 1, 2] is a spinning array of [1, 2, 3, 4, 5]
    int aInput[5] = {3, 4, 5, 1, 2}; // as input
    
    cout << "The minimum number is: " << getMiniNum(aInput, 5) << endl;
    
    
    return 0;
    
    
    
    
    
    
}

int getMiniOneByOne(const int* nums, int length)
{
    int mini = nums[0];
    for (int i = 0; i < length; i++) { //compare one by one
        if (nums[i] < mini)
            mini = nums[i];
    }
    
    return mini;
}


int getMiniNum(const int* nums, int length)
{
    int pre = 0;
    int post = length - 1;
    
    // special conditions
    // 1. If the spinning array is not spinning at all.
    //    [1, 2, 3, 4, 5] is a spinning array of itself.
    if (nums[pre] < nums[post]) { // have to be less than, not less equal than
        return nums[pre];
    }
    
    int mid = (pre + post) / 2;
    
    // special conditions
    // 2. if pre == mid == post, then cannot determine the mini by this method
    if ((nums[pre] == nums[mid]) && (nums[mid] == nums[post])) {
        return getMiniOneByOne(nums, length);
    }
    
    while(true) {
        // when to break the loop
        if ((post - pre) == 1) {
            return nums[post];
            
        }
        if (nums[mid] >= nums[pre]) {
            // mid is at the part of big numbers
            // minimum is at the right part which between mid & post
            // move pre to mid position
            pre = mid;
        } else { // nums[mid] < nums[pre]
            // mid is at the part of small numbers
            // minimum is at the left part which is between pre & mid
            // move post to mid position
            post = mid;
        }
        
        mid = (pre + post) / 2;
    }// end of while
    
    
}
