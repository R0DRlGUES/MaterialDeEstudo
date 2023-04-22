package atv;

import java.util.Scanner;

public class java5 {
/*Faça um algorito que lia as notas obtidas 
 *pelos alunos e mostre somente as acima da media*/
	public static void main(String[] args) {
		Scanner L = new Scanner(System.in);
		
		int vet[] = new int[5];
		
		for (int i=0;i<5;i++) {
			vet[i] = L.nextInt();
	
		}
		for (int i=0;i<5;i++) {
			if(vet[i] >= 7) {
				System.out.println("Notas Acima da meida:");
				System.out.print(vet[i]+", ");
			}
		}
	}

}
