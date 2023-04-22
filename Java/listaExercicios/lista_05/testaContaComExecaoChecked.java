package java_Pinha;

import java.nio.charset.MalformedInputException;

public class testaContaComExecaoChecked {
	public static void main(String[] args) {
		
		conta c = new conta();
		try{
		c.deposita();
		}catch(MinhaExcecao ex) {
			System.out.println("tratamento  .....");
		}
}	

}
