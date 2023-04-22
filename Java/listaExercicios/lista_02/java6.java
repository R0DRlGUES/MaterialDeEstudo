package atv2;
import java.util.Scanner;
public class java6 {
	public static void main(String[] args) {
		Scanner L = new Scanner(System.in);
		
		int numero=0;
		String a = "";
		
		System.out.println("informe um Número");
		numero=L.nextInt();
		ImpOuPar(numero);
	}
	public static int ImpOuPar(int numero) {
		
		if(numero % 2 == 0) {
		
			System.out.println("Número par");
		}else {
		
			System.out.println("Número impar");
		}
		return numero;
		
		
	}
	
}
