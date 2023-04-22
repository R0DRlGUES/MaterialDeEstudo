package Atividade_Java_OO;

//Fazer uma classe Ex2Sorteio para:
import java.util.Random;
import java.util.Scanner;


public class java2 {
	
	static int numeroSorteado=0;
	static int cont;
	
	public static void main(String[] args) {
		Scanner S=new Scanner(System.in);
		int chute = 1;
		Sortea(numeroSorteado);
		while(chute != 0) {
			System.out.println("Chuta um Número ou desista com [0]");
			chute = S.nextInt();
			
		
			cont++;
			if(numeroSorteado > chute) {
				System.out.println("maior");
			}else if(numeroSorteado < chute) {
				System.out.println("menor");
			}else if (numeroSorteado==chute) {
				System.out.println("Acertou!");
			 break;
			}
		}
		System.out.println("Obrigado pelo seu tempo!");
		System.out.println("Foram ["+cont+"] tentaivas");
	}
	private static int Sortea(int numeroSorteado2) {
		Random R=new Random();
		numeroSorteado = R.nextInt(1,1000);
		
		return numeroSorteado;
	}
}
