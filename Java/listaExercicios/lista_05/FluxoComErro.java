package java_Pinha;
public class FluxoComErro {
    public static void main(String[] args) {
        System.out.println("Ini do main");
        try {
        metodo1();
        } catch(ArithmeticException | NullPointerException ex) {
            String msg = ex.getMessage();
            System.out.println("Exception " + msg);
            ex.printStackTrace();
        }
        System.out.println("Fim do main");
    }

    private static void metodo1() throws MinhaExcecao{
        System.out.println("Ini do metodo1");
        try {
        metodo2();
        }catch(MinhaExcecao ex){
        	
        }
        System.out.println("Fim do metodo1");
    }

    private static void metodo2() throws MinhaExcecao {
    	System.out.println("Chamando metodo2");
    	
    	throw new MinhaExcecao("deu ruim");
    //	System.out.println("fim metodo2");
    }        
    
}