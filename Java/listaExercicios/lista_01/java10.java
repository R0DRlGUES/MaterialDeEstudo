package atv;

public class java10 {
	/*
	 * informe 10 num, apresente a multiplicaçãod dos pares e a soma dos impar
	 */
	public static void main(String[] args) {
		int[] vetor = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
		
		int soma=0;
		int mult=1;
		
		for (int i=0;i<10;i++) {
			if (vetor[i] % 2 ==0) {
				System.out.println("Pares "+vetor[i]);
				mult = mult*vetor[i];
			}else {
				System.out.println("Impares "+vetor[i]);
				soma += vetor[i];
			}
		}
		System.out.println("Soma :"+soma+"\nMultipicação :"+mult);

	}
}
