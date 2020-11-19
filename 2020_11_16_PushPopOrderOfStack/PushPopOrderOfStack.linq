<Query Kind="Program" />

void Main()
{
	
	
}

// Define other methods and classes here
class PushPopOrderOfStack
{
	public static bool IsPopOrderCorrect(List<int> pushSequence, List<int> popSequence)
	{
		Stack<int> pushStack = new Stack<int>();
		
		int indexOfPopSeq = 0;
		int indexOfPushSeq = 0;
		
		
		while(indexOfPopSeq < popSequence.Count)
		{
			if (pushStack.Count == 0 || pushStack.Peek() != popSequence[indexOfPopSeq])
			{
				if (indexOfPushSeq < pushSequence.Count)
				{
					pushStack.Push(pushSequence[indexOfPushSeq]);
					indexOfPushSeq++;
				}
				else
				{
					break;
				}
			}
			else
			{
				pushStack.Pop();
				indexOfPopSeq++;
			}
			
		}
		
		return pushStack.Count == 0 ? true : false;
		
		
		
	}
}