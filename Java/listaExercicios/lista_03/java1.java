package Atividade_Java_OO;

/*1) Fazer uma classe Ex1Primos para:
• Receber um inteiro N do usuário
• Testar se este inteiro é primo ou não e informar
*/
import java.util.Scanner;
public class java1 {

	//contador global para pegas as classes;
	static int cont =0;
	public static void main(String[] args) {
		
		Scanner L = new Scanner(System.in);
		int numero =0;
		System.out.println("Entre com um numero ");
		numero = L.nextInt();
		if (primo (numero) == true) {
			System.out.println("O Número é primo");
		}else {
			System.out.println("O Númeo não é primo");
		}	
	}
	// nova classe com paremetros
	public static boolean primo (int numero) {
		if(numero <=1) {
			return false;
		}
		for(int i = 1; i<=numero; i++) {
			if (numero %i==0) {
				cont += 1;
			}
			if(cont >2) {
				return false;
			}
		}
		return true;
	}
}


