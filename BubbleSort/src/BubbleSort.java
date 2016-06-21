/**
 * Created by stevensh on 6/21/2016.
 */
public class BubbleSort {
    private static int[] array = { 99, -10, 100123, 18, -978};
    public static void main(String args[]) {
        bubbleSort(array);
        System.out.println(array);

    }
    private static void bubbleSort(int[] array) {

        for (int j = array.length; j > 1; j--) { //from array length to 2;
            for (int i = 0; i < j - 1; i++) {
                if (array[i] > array[i+1]) {
                    int temp = array[i];
                    array[i] = array[i+1];
                    array[i+1] = temp;
                }

            }

        }

    }
}
