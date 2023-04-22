package atv2;
import java.util.Scanner;
public class java4 {
	public static void main(String[] args) {
		Scanner L = new Scanner(System.in);
		
		double temperatura = 0;
		int seletor = 0;
	;
		
		System.out.println("Informe a temperatura");
		temperatura=L.nextInt();
		System.out.println("Quer saber em:");
		System.out.println("  [1] F\n  [2] K");
		seletor = L.nextInt();
		if(seletor == 1) {
			temperatura = temperatura * 1.8 + 32;
			System.out.println("F°"+temperatura);
		}else {
			temperatura += 273;
			System.out.println("K°"+temperatura);
		}
	}
}
