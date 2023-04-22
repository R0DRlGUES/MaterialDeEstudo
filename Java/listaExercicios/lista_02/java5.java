package atv2;

import java.util.Scanner;
import java.math.*;

public class java5 {
	public static void main(String[] args) {
		Scanner L = new Scanner(System.in);

		double peso = 0;
		double alut = 0;
		double imc = 0;

		System.out.println("Informe seu peso");
		peso = L.nextDouble();

		System.out.println("Informe seu Altura");
		alut = L.nextDouble();
		imc = peso / (alut * alut);
		System.out.println(imc);

		if (imc <= 18.5) {
			System.out.println("Está abaixo do peso");
		} else if (imc > 18.5 && imc < 24.9) {
			System.out.println("Está normal");
		} else if (imc >= 25 && imc <= 29.9) {
			System.out.println("Sobrepeso");
		}else if(imc >=30&& imc<=39.9) {
			System.out.println("Obesidade");
		}else {
			System.out.println("Obesidade GRAVE!!!!!!!!!!!!");
		}

	}

}
