package java_Pinha;

public class Conexao implements AutoCloseable{

	//constutrutor
	    public Conexao() {
	        System.out.println("Abrindo conexao");
            throw new IllegalStateException();
	    }
	//Metodo    
	    public void leDados() {
	        System.out.println("Recebendo dados");
	            throw new IllegalStateException();
	    }
		@Override
		public void close(){
			System.out.println("Fechando conexao");
			
		}
	}


