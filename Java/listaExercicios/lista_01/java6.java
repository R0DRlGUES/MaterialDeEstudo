package atv;

import java.util.Scanner;

public class java6 {
/*Crie um algoritomo que peça ao usuario que imforme 5 num,
 *armazene-os e aprensete somete o maior*/
	public static void main(String[] args) {
		Scanner L = new Scanner(System.in);
		
		int vet[] = new int [5];
		int maior = 0;
		
		for(int i=0; i<5; i++) {
			vet[i] = L.nextInt();
		}
		for(int i=0; i<5; i++) {
			if (vet[i] >= maior) {
				maior = vet[i];
			}
		}
		System.out.println("Maior Número é: "+maior);
	}

}
