package atv;

import java.util.Scanner;
import java.util.ArrayList;

public class java4 {
	/*
	 * Crie um algoritmo que armazene 5 nomes em um vetor e os apresente
	 */
	public static void main(String[] args) {
		Scanner L = new Scanner(System.in);
		ArrayList<String> E = new ArrayList<String>();

		String vet[] = new String[5];

		for (int i = 0; i < 5; i++) {
			vet[i] = L.next();
			E.add(vet[i]);

		}
		for (int i = 0; i < 5; i++) {
			System.out.print(vet[i] + "\n");
		}

	}
}
