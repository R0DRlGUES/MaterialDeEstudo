package atv;

import java.util.Scanner;

public class java7 {
/*Leia 5 numeros mostre a soma de todos, sua media
 *quantidade par e impar*/
	public static void main(String[] args) {
		Scanner L = new Scanner(System.in);
		
		int vet[] = new int[5];
		int soma =0 ;
		int media =0 ;
		
		for (int i=0;i<5;i++) {
			vet[i] = L.nextInt();	
			}
	
		for (int i=0;i<5;i++) {
			soma += vet[i];
			media = soma/vet.length;
		}
		System.out.println("======================================");
		System.out.println(soma+ " Soma total");
		System.out.println("======================================");
		System.out.println(media+" media");
		
		
		System.out.println("======================================");
		for (int i=0;i<5;i++) {
			if(vet[i] %2==0) {
				System.out.println(vet[i]+" Número par");
			}else {
				System.out.println(vet[i]+" Número Impar");
			}
		}
		
	}
	  	
		

}
