package java1;

public class Java_if_else_elseIf {

	public static void main(String[] args) {
		System.out.println("Testando condicional");
		int idade = 10;
		int quantidade = 3;
		if (idade >= 18) {
			System.out.println("Pode entrar. Seja Bem vindo.");
			
		} else {
			if(quantidade > 1) {
				System.out.println("Você é menor, mas está acompanhado"+
			"pode entrar.");
				
			} else {
			System.out.println("Infelizmente não pode entar.");
			}
		}
	}	
}
