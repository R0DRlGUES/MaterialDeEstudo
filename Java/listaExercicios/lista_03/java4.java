package Atividade_Java_OO;
/*
 Fazer um programa para medir os reflexos do usuário. O programa deve:
• Mostrar a palavra “Agora!” após um tempo aleatório e um número,
  também aleatório
• Contar o tempo até que o usuário digite o número pedido e mostrar esse
  tempo.
 */
import java.util.Scanner;


public class java4 {
	public static void main(String[] args) throws InterruptedException {
		Scanner S = new Scanner(System.in);
		System.out.println("Digite um Número em");
		
		Thread.currentThread().sleep(1000);
		System.out.println("3");
		
		Thread.currentThread().sleep(1000);
		System.out.println("2");
		
		Thread.currentThread().sleep(1000);
		System.out.println("1");
		
		double inicio = System.nanoTime();
		System.out.println("	!AGORA!");
		
		S.nextInt();
		double fim = System.nanoTime();
		System.out.print(fim-inicio+" m/s");
		
			
		
		}
    }

		
	
