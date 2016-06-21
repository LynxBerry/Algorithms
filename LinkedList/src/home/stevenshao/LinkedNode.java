package home.stevenshao;

/**
 * Created by stevensh on 6/21/2016.
 */
public class LinkedNode {
    private LinkedNode next = null;
    private int value = 0;
    public LinkedNode(int[] s) { //create a linked list
        LinkedNode pointer = this;
        this.value = s[0];
        for(int i = 1; i < s.length; i++) {
            pointer.next = new LinkedNode(s[i]);
            pointer = pointer.next;
        }

    }

    public LinkedNode(int value) {
        this.value = value;
    }

    public int getItem() {
        return this.value;
    }

    public String toString() {
        return "[" + this.value +"]";

    }

    public void print() {
        LinkedNode pointer = this;
        while(pointer.next != null) {
            System.out.print(pointer + "->");
            pointer = pointer.next;
        }

        System.out.print(pointer);


    }

    public void printReverse() {
        LinkedNode pointer = this;
        if(pointer.next == null) {
            System.out.print(pointer);
            return;
        }

        pointer.next.printReverse();
        System.out.print("->" + pointer);

    }

}
