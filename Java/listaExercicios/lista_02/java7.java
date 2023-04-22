
package atv2;
import java.util.Scanner;
public class java7 {
	public static void main(String[] args) {
		Scanner L = new Scanner(System.in);
		
		int numero=0;
		
		
		System.out.println("informe um Número");
		numero=L.nextInt();
		PosiNega(numero);
	}
	public static int PosiNega(int numero) {
		
		if(numero < 0) {
			System.out.println("Negativo ["+numero+"]");
		}else {
			System.out.println("Positivo ["+numero+"]");
		}
		return numero;
		
		
	}
	
}
