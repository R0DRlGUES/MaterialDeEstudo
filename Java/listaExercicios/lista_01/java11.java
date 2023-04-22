package atv;

import java.util.Scanner;

public class java11 {
	public static void main(String[] args) {
		Scanner L = new Scanner(System.in);
		
		int[] vetor = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
			int numImformado=0;
			
			System.out.println("informe um númeor positivo de 1 a 10");
			numImformado = L.nextInt();
			for(int i=0;i<10;i++) {
				if(vetor[i] %numImformado  == 0) {
					System.out.println("Seus Multipos são "+vetor[i]);
					
				}
			}
	}

}
