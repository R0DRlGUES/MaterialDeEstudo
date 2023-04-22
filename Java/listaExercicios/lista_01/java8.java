package atv;

public class java8 {
/*Receba um vetor e mostro ele invertido*/
	
	public static void main(String[] args) {
		int vet[]= {1,2,3,4,5,6,7,8,9,10};
		
		for (int i=0;i<10;i++) {
			System.out.print(vet[i]);
		}
		System.out.println();
		for (int i = vet.length -1;i>=0;i--) {
			System.out.print(vet[i]);
		}
		
	}

}
