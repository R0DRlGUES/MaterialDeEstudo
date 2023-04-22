package atv;

import java.util.Scanner;
public class java3 {
/*Faça um algoritimo que receba 5 num e mostre a soma deles.*/
	public static void main(String[] args) {
		Scanner L = new Scanner(System.in);
		int C = 0;
		int cont = 0;
		while (C < 5) {

			cont += L.nextInt();
			System.out.println(cont);

			C++;
		}

	}

}
