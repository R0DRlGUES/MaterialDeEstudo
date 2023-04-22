package atv2;

import java.util.Scanner;
import java.util.Random;

public class java8 {
	public static void main(String[] args) {
		Scanner L = new Scanner(System.in);

		int vet[] = vet(10);
		int maior = 0;
		int menor = 999999999;

		System.out.println("num");

		for (int i = 0; i < vet.length; i++) {

			if (vet[i] < menor) {
				menor = vet[i];
			} else {
				maior = vet[i];
			}
		}

		System.out.println("Maior: " + maior);
		System.out.println("Menor: " + menor);

	}

	private static int[] vet(int i) {
		Random R = new Random();
		int[] vet = new int[i];

		for (int i1 = 0; i1 < vet.length; i1++) {
			vet[i1] = R.nextInt(999);
		}

		return vet;
	}

}
