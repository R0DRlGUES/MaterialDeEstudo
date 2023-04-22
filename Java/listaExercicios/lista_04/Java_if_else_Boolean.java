package java1;

public class Java_if_else_Boolean {

	public static void main(String[] args){

		System.out.println("Testando condicional");
		int idade = 68;
	    int quantidade = 3;
		boolean acompanhado = quantidade >= 2;
		
		if (idade >= 65 && acompanhado) {
	  //if (idade >= 18 || acompanhado == true) {
			System.out.println("Pode entrar. Seja Bem vindo.");

			} else {
			System.out.println("Infelizmente não pode entar.");
			}
		}
	}


