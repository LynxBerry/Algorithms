//This is a much better solution
//It leverages insert sort.

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
            //left boundary
            int l = 0;
            //right boundary
            int r = sortedNums.size() - 1;

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
