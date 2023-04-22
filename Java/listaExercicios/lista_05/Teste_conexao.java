package java_Pinha;

public class Teste_conexao {
	public static void main(String[] args) {
	
		//Novo Codigo
		try(Conexao com = new Conexao()){
			com.leDados();
		}catch(IllegalStateException ex) {
			System.out.println("Erro de Conexão..");

		}
		
		
	//Codigo legado
//		Conexao con = null;
//		try {
//			con = new Conexao();
//			con.leDados();
//	//sempre executado independente de erro ou não
//		}catch(IllegalStateException ex){
//			System.out.println("Erro de Conexão..");
//		}
//			finally {
//			if(con != null) {
//				con.close();
//			}
//		}
	}
}
