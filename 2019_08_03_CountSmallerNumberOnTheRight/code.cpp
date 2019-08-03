class Solution {
public:
    vector<int> countSmaller(vector<int>& nums)
    {
        vector<int> counts;
        vector<int> largestSmallerNum;

        //get length of nums array
        int length = nums.size();

        // for each number in array from left to right, calculate the number of smaller numbers on the right.
        // The problem is this solution is so slow.
        for (int i = length - 1; i >= 0; i--)
        {
            int flag = -1;

            counts[i] = 0;
            //start from right
            if (i == length - 1)
            {
              counts[i] = 0;

              //position of largestSmallerNum
              largestSmallerNum[i] = -1;

            }else
            {
              for(int j = 1; i + j < length; j++ )
              {
                if(largestSmallerNum[i+j] >= 0)
                {


                  if(largestSmallerNum[i+j] < nums[i] && nums[i] =< nums[i+j])
                  {
                       counts[i] += count[i+j];

                      if(largestSmallerNum[i] < largestSmallerNum[i+j])
                      {
                          largestSmallerNum[i] = largestSmallerNum[i+j];
                      }

                       break;
                  }
                  else if(largestSmallerNum[i+j] == nums[i])
                  {
                  counts[i] += count[i+j] - 1;

                  if(largestSmallerNum[i] < largestSmallerNum[i+j])
                  {
                      largestSmallerNum[i] = largestSmallerNum;
                  }

                  break;
                  }
                  else if(nums[i] < largestSmallerNum[i+j])
                  {
                  //pass

                  }
                  else if(nums[i] > nums[i+j])
                  {

                  counts[i]++;
                  //pass
                  if( largestSmallerNum[i] < nums[i+j] )
                  {
                    largestSmallerNum[i] = nums[i+j];
                  }




                  }

            }
          
        




        


    }
return counts;
};