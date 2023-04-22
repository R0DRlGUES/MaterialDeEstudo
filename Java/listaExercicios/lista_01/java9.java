package atv;

import java.util.Scanner;
import java.util.ArrayList;

public class java9 {
/*Reajuste de salario
 *menos de 2.000 + 250 de 2.000 a 3500 + 100*/
		public static void main(String[] args) {
			Scanner L = new Scanner(System.in);
			ArrayList <String> E = new  ArrayList<String>();
			
			String nomes[] = {"Pedro henrique", "Astolfo neto"};
			int salario[]= {1500, 2400};
			
			for(int i=1;i<2;i++) {
				if (salario[i] < 2000) {
					salario[i] += 250;
				}else {
					salario[i] +=100;
				}
			}
			for(int i=1;i<2;i++) {
				System.out.println("Nome: "+nomes[0]+" Salario atualizado R$"+salario[0]);
				System.out.println("Nome: "+nomes[1]+" Salario atualizado R$"+salario[1]);
			}
			
			
		}
}
