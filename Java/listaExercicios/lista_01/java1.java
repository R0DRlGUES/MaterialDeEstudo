package atv;

import java.util.Scanner;
public class java1 {
/*Crie um algoritimo que peça ao usáriop que informe 10 num int
 *armazeno-os e aprensete a soma.*/
	public static void main(String[] args) {
		
		Scanner L = new Scanner(System.in);
		
		int cont = 0;
		
		for (int i=1;i<=10;i++) {
		
			cont += L.nextInt();
			
			System.out.println("-"+cont+"-");
		}
		
	}

}
