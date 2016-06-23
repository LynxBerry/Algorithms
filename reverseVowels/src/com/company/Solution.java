package com.company;

/**
 * Created by stevensh on 6/23/2016.
 */
public class Solution {

    public boolean isVowel(char x) {
        switch(Character.toLowerCase(x)) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':return true;
            default: return false;
        }
    }


    public String reversevowels(String s) {
        if (s == null || s.length() < 1) {
            return ""; // for now.
        }
        char[] text = s.toCharArray();


        int pre = 0; //pointing to the beginning of array.
        int post = text.length - 1; //pointing to the end of array.

        do {
            while(pre < post && !isVowel(text[pre])) {
                pre++;
            } // pause at char that's Vowel

            while(pre < post && !isVowel(text[post])) {
                post--;
            } //pause at char that's Vowel

            if (pre < post) { // If pre is still less than post, then swap, then move forward one char for each.
                char temp = text[pre];
                text[pre] = text[post];
                text[post] = temp;
                pre++;
                post--;

            }

        } while (pre < post);


        return new String(text);


    }

}
