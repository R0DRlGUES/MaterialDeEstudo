package com.mycompany.ordenacaovetores;

import java.util.Random;
import javax.swing.JOptionPane;
/**
 * @author PEDRO
 * @author RENAN
 */
public class Ordenacao {

    public void orderBySelection() {
        JOptionPane.showMessageDialog(null, "Entrou em Ordenação por Seleção");
        Random gerador = new Random();

        String tamanhoVet = JOptionPane.showInputDialog("Digite o Tamanho do vetor desejado");
        int tamanhoVetAux = Integer.parseInt(tamanhoVet);

        int[] vetor = new int[tamanhoVetAux];

        for (int i = 0; i < vetor.length; i++) {
            vetor[i] = gerador.nextInt(0, 100);
        }

        long inicio = System.currentTimeMillis();

        for (int i = 0; i < vetor.length - 1; i++) {
            int posicaoMenor = i;

            for (int j = i + 1; j < vetor.length; j++) {
                if (vetor[j] < vetor[posicaoMenor]) {
                    posicaoMenor = j;
                }
            }

            if (posicaoMenor != i) {
                int aux = vetor[i];
                vetor[i] = vetor[posicaoMenor];
                vetor[posicaoMenor] = aux;
            }
        }

        long fim = System.currentTimeMillis();
        long tempoExecucao = fim - inicio;

        for (int i = 0; i < vetor.length; i++) {
            System.out.println("posicao [" + i + "] = " + vetor[i]);
        }
        System.out.println("Tempo de execução: " + tempoExecucao);

    }

    public void orderByInsertion() {
        JOptionPane.showMessageDialog(null, "Entrou em Ordenação por Inserção");
        Random gerador = new Random();

        String tamanhoVet = JOptionPane.showInputDialog("Digite o Tamanho do vetor desejado");
        int tamanhoVetAux = Integer.parseInt(tamanhoVet);
        int[] vetor = new int[tamanhoVetAux];
        int chave, j;

        //  adidicionar mostra o vetor antigo
        for (int i = 0; i < vetor.length; i++) {
            vetor[i] = gerador.nextInt(0, 100);
            for (int a = 0; a > vetor.length; a++) {
                System.out.print("[" + vetor[i] + "]");
            }

        }

        System.out.print("\n");
        for (int i = 1; i < vetor.length; i++) {
            chave = vetor[i];

            for (j = i - 1; (j >= 0 && vetor[j] > chave); j--) {
                vetor[j + 1] = vetor[j];
            }
            vetor[j + 1] = chave;
        }
        for (int i = 0; i < vetor.length; i++) {
            System.out.println("Posição[" + i + "] = " + vetor[i]);
        }
        System.out.println("Vetor de Tamanho ja definido ordenado");
    }

    public void bubbleSort() {
        Random gerador = new Random();

        boolean houveTroca = true;

        String tamanhoVet = JOptionPane.showInputDialog("Digite o Tamanho do vetor desejado");
        int tamanhoVetAux = Integer.parseInt(tamanhoVet);
        int[] vetor = new int[tamanhoVetAux];

        for (int i = 0; i < vetor.length; i++) {
            vetor[i] = gerador.nextInt(0, 100);
        }

        while (houveTroca) {
            houveTroca = false;

            for (int i = 0; i < vetor.length - 1; i++) {
                if (vetor[i] > vetor[i + 1]) {
                    int aux = vetor[i];
                    vetor[i] = vetor[i + 1];
                    vetor[i + 1] = aux;
                    houveTroca = true;
                }
            }
        }

        for (int i = 0; i < vetor.length; i++) {
            System.out.println("posicao [" + i + "] = " + vetor[i]);

        }
    }

    public static int pesquisaBinaria(int chave, int[] vet) {
        int esquerda, meio, direita;
        esquerda = 0;
        direita = vet.length - 1;

        while (esquerda <= direita) {
            meio = (esquerda + direita) / 2;
            if (chave == vet[meio]) {
                return meio;
            }
            if (chave > vet[meio]) {
                esquerda = meio + 1;
            } else {
                direita = meio - 1;
            }

        }
        return -1;

    }

    public static int pesquisaLinear(int chave, int[] vet) {

        for (int i = 0; i < vet.length; i++) {
            if (chave == vet[i]) {
                return i;
            }
        }
        return -1;

    }
}
