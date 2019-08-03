//Run on leetcode
//Stupid solution
class Solution {
public:
    vector<int> countSmaller(vector<int>& nums)
    {
        vector<int> counts;

        //get length of nums array
        int length = nums.size();

        // for each number in array from left to right, calculate the number of smaller numbers on the right.
        // The problem is this solution is so slow.
        for (int i = 0; i < length; i++)
        {
            int tmpCount = 0;
            for (int j = i + 1; j < length; j++)
            {
                if (nums[i] > nums[j])
                {
                    tmpCount++;
                }

            }
            counts.push_back(tmpCount);
        }

        return counts;


    }

};

//2nd solution
class Solution {
public:
    vector<int> countSmaller(vector<int>& nums)
    {
        vector<int> counts;

        //get length of nums array
        int length = nums.size();

        // for each number in array from left to right, calculate the number of smaller numbers on the right.
        // The problem is this solution is so slow.
        for (int i = length - 1; i >= 0; i--)
        {
            int tmpCount = 0;

            //first go to left
            if (i == length - 1)
            {
              counts.push_back(counts[i-1]);
            }else{
              for (int j = i + 1; j < length; j++)
              {
                  if (nums[i] > nums[j])
                  {
                    tmpCount++;
                  }

              }//end of inner for

            counts.push_back(tmpCount);

          }//end of else
        }

        return counts;


    }

};

/*

Xi > Xi+1


*/

//3rd solution
