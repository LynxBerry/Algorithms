<Query Kind="Program" />

void Main()
{
	Node node = new Node(5);
	Console.WriteLine(node);
}

// Define other methods and classes here

public class Node
{
	public int value;
	public string stringValue;
	public Node left = null;
	public Node right;
	public Node(int value)
	{
		this.value = value;
	}
}