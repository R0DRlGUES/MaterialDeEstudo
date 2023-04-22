package Atividade_Java_OO;
/*
Fazer um programa para receber dois números do tipo int do usuário e
determinar se um número é permutação do outro ou não. Ex: 431 é permutação
de 143, 42 é permutação de 204, 1211 é permutação de 1112, etc.
*/

import java.util.Scanner;

import java.util.Arrays;

public class java3 {
	static int PrimeiroNumero =0, SegundoNumero = 0;
	
	
	public static void main(String[] args) {
		Scanner S = new Scanner(System.in);
		System.out.print("Informe o Primeiro Número: ");
		PrimeiroNumero = S.nextInt();
		System.out.print("Informe o Segundo Número: ");
		SegundoNumero = S.nextInt();
	
		if(permucao (PrimeiroNumero, SegundoNumero)) {
			System.out.println("É Permutação");
		}else {
			System.out.println("NÃO É Permutação");
		}
	}
	private static boolean permucao(int PrimeiroNumero, int SegundoNumero) {
		int[]v1 = numeros(PrimeiroNumero);
		int[]v2 = numeros(SegundoNumero);
		return  Arrays.equals(v1,v2);
	}
	private static int[] numeros(int PrimeiroNumero) {
		int[] v =new int[10];
		for(int i=0;i<10;i++) {
			v[i]=0;
		}
		while(PrimeiroNumero<0) {
			v[PrimeiroNumero%10]++;
			PrimeiroNumero=PrimeiroNumero/10;
			
		}
		return v;
		
	}
}
	
