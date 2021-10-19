# BioInformaticJS
A JavaScript library for Bioinformatics


use the following script for the plot to work:
<script src='https://cdn.plot.ly/plotly-latest.min.js'></script>

Functions:

1- Upper(seq): Converts the input array to upper case letters.

2- Validate(seq): Validates the character components of the input array.

3- CountN(seq): Returns a JSON containing the number of each nucleotide.

4- Transcript(seq): Returning the transcript of the input array.

5- RC(seq): Returns the reverse complement sequence of the input.

6- Codons(seq): Returns an array of three possible codons.

7- Codons2(seq): Returns an array of six possible codons (including the reverses).

8- Translate(seq): Returns three possible (excluding reverses) translation of the input array.

9- Translate2(seq): Returns six possible (including reverses) translation of the input array.

10- chartcg(seq): plots the amount of each nucleotide in the input seq.

11- GivePrimers(seq): produces forward and reverse primers from a sequence.

12- sbsqcCnfrm(seq1,seq2): confirms whether a sub-sequence with size K exists in a given sequence with size N (N > K) then logs if it is true.

13- myalgor(seq1,seq2): same as above, a better algorithm.
