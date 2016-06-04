//This is a much better solution
//It leverages insert sort.
//needs to further improve it.

class Solution {
public:
    vector<int> countSmaller(vector<int>& nums)
    {
        int length = nums.size();

        //we might need to initilize this vector
        vector<int> counts(length, -1);

        // A list used for sorting numbers from nums
        vector<int> sortedNums;

        //suggest from right to left
        for (int i = length - 1 ; i >= 0; i--)
        {

            //this is for very beginning.
            int l,r;
            //define borders
            if ( i == length - 1)
            {
                //left boundary
                l = 0;
                //right boundary
                r = sortedNums.size() - 1;
                }
            else
            {    //2nd time
                //
                if (nums[i] == nums[i+1])
                {
                    counts[i] = counts[i+1];
                    sortedNums.insert(sortedNums.begin() + counts[i], nums[i]);
                    continue;
                }
                else if (nums[i] > nums[i+1])
                {
                    l = counts[i+1] + 1;
                    r = sortedNums.size() - 1;
                }
                else if (nums[i] < nums[i+1])
                {
                    l = 0;
                    r = counts[i+1] - 1;
                }

             }



            while (true)
            {
                if (l > r)
                {
                    counts[i] = l;
                    sortedNums.insert(sortedNums.begin() + l, nums[i]);
                    break;
                }
                else
                {
                    if (nums[i] <= sortedNums[(l+r)/2])
                    {
                        r = (l+r)/2 - 1;
                    }
                    else
                    {
                        l = (l+r)/2 + 1;

                    }
                }
            }// end of while

        }

        return counts;


    }//end of function countSmaller

};
