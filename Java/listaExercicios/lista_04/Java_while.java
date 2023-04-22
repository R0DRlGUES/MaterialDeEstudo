package java1;
import java.util.Scanner; 
public class Java_while {
	Scanner ler = new Scanner(System.in);
	public static void main(String[] args) {
		
		int contador = 0;
		
		while(contador <= 10) {
			System.out.println(contador);
			//contador = contador + 1;
			//contador += 1;
			contador++;
		}
		System.out.println(contador);
	}

}
