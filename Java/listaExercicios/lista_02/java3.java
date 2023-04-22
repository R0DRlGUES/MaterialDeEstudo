package atv2;

import java.util.Scanner;

public class java3 {
	public static void main(String[] args) {
		Scanner L = new Scanner(System.in);
		int idade = 0;
		int Sexo = 0;
		
		   
        System.out.println("Informe sua idade: ");
     	idade = L.nextInt();
     	
     	if (idade == 18) {
     		 System.out.println("Informe seu Sexo: ");
     	     System.out.println("  [1] Masculino\n  [2] feminino");	
     	     Sexo = L.nextInt();
     	     if (Sexo == 1) {
     	    	 System.out.println("Vai pa guerra");
     	     }else {
     	    	 System.out.println("Relaxa não vai");
     	     }
     	}else if(idade <= 17) {
     		System.out.println("Ainda tem tempo");
     	}else {
     		System.out.println("Já compriu seu papel");
     	}
        	
     		
        
	}
}
