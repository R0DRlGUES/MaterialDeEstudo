package atv2;

public class java9 {

    public static void main(String[] args) {
        int vt[] = {43, 3, 15, 2};
        int aux = 0;

        System.out.println("HAAAAAAAAAA!!!!!!!!!!!!!!!!!!");
        for (int i = 0; i < 4; i++) {
            for (int x = 0; x < 4; x++) {

                if (vt[i] < vt[x]) {

                    aux = vt[i];
                    vt[i] = vt[x];
                    vt[x] = aux;
                }
            }
        }
        System.out.println("Vetor organizado:");
        for (int i = 0; i < 4; i++) {
            System.out.println(" " + vt[i]);
        }

    }
}
