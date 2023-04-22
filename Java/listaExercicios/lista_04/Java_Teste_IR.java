package java1;

public class Java_Teste_IR {
	public static void main(String[] args) {
		
		double salario = 3300.0;
		
		if(salario >= 1900.0 && salario <= 2800.0) {
			System.out.println("O IR é de 7.5%, valor a pagar de R$ 142.");
		} else {
			if(salario >= 2800.01 && salario <= 3751.0) {
				System.out.println("O IR é de 15%, valor a pagar de R$ 350.");
			}else {
				if(salario >= 3751.01 && salario <= 4664.00){
				System.out.println("O IR é de 22.5%, Valor a pagar R$ 636.");
				} else {
					System.out.println("Seu salário está fora da faixa cadrastrada no sistema.");
				}
			}
		}	
	}
}
