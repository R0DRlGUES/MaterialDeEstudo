package Atividade_Java_OO;
/*
  Fazer uma classe ExecString que:
• Recebe duas strings do usuário (usar TextConsole.getString())
• Conta e informa quantas vezes a segunda string ocorre dentro da primeira
• Informa uma estatística dos caracteres contidos nas 2 strings.
*/
import java.util.Scanner;
public class java5 {
	public static void main(String[] args) {
		Scanner S = new Scanner(System.in);
		
		System.out.println("Informe uma Frase");
		String frase1 = S.next();
		System.out.println("Informe mais uma Frase");
		String frase2 = S.next();
		
		
		
		System.out.println("= Relatório =");
		if (frase1==frase2) {
			System.out.println("Tipo é igual: true");
		}else
			System.out.println("Tipo é igual: false");
		if (frase1.equals(frase2)) {
			System.out.println("Conteúdo é igual: true");
		}else
			System.out.println("Conteúdo é igual: false");
		if (frase1.equalsIgnoreCase(frase2)) {
			System.out.println("Diferença no tamanho da letra: true");
		}
		System.out.println("Tamanho das String é igual: "+frase1.compareTo(frase2));
	}

}

