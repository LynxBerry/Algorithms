package home.stevenshao;

public class Main {

    public static void main(String[] args) {
	// write your code here
        int[] array = {34, 25, 67, 58, 33};
        LinkedNode list = new LinkedNode(array);
        list.print();
        System.out.println();
        list.printReverse();
    }
}
