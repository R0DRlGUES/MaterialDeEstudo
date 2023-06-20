package com.mycompany.ordenacaovetores;

import javax.swing.JOptionPane;

/**
 * @author PEDRO
 * @author RENAN
 */
public class InicializarMenu extends Ordenacao {

    public static void main(String[] args) {
        Ordenacao ordena = new Ordenacao();

        int opcao = -1;
        while (opcao != 0) {
            opcao = Integer.parseInt(JOptionPane.showInputDialog(
                    "1 - Ordenação por Inserção \n"
                    + "2 - Ordenação por Seleção \n"
                    + "3 - Ordenação Bolha \n"
                    + "4 - Pesquisar Números \n"
                    + "0 - Sair"));

            switch (opcao) {
                case 1: //  Ordenação por Inserção
                    ordena.orderByInsertion();
                    break;
                case 2: //  Ordenação por Seleção
                    ordena.orderBySelection();
                    break;
                case 3://  Ordenação por método Bolha
                    ordena.bubbleSort();
                    break;
                case 4://  Pesquisa Linear e Binaria
                    opcao = Integer.parseInt(JOptionPane.showInputDialog(
                            "1 -  Pesquisa Binaria \n"
                            + "2 - Pesquisa Linear \n"));
                    if (opcao == 1) {//  Pesquisa Linear
                        int[] vetor = {10, 20, 30, 40, 50, 60, 70, 80, 90};

                        int chave = Integer.parseInt(
                                JOptionPane.showInputDialog(
                                        "Informe o número a ser pesquisado"));

                        int posicao = pesquisaLinear(chave, vetor);
                        long inicio = System.currentTimeMillis();

                        if (posicao >= 0) {
                            System.out.println("O Elemento " + chave + " está localizado na "
                                    + "posição: " + posicao);
                            long fim = System.currentTimeMillis();
                            long tempoExecucao = fim - inicio;
                            System.out.println("Tempo de execução: " + tempoExecucao);
                        } else {
                            System.out.println(
                                    "O Elemento " + chave + " não foi localizado na lista");
                            long fim = System.currentTimeMillis();
                            long tempoExecucao = fim - inicio;
                            System.out.println("Tempo de execução: " + tempoExecucao);
                        }

                    } else if (opcao == 2) {//  Pesquisa Binaria
                        int[] vetor = {10, 20, 30, 40, 50, 60, 70, 80, 90};
                        long inicio = System.currentTimeMillis();

                        int chave = Integer.parseInt(
                                JOptionPane.showInputDialog(
                                        "Informe o número a ser pesquisado"));

                        int posicao = pesquisaBinaria(chave, vetor);

                        if (posicao >= 0) {

                            System.out.println("O Elemento " + chave + " está localizado na "
                                    + "posição: " + posicao);
                            long fim = System.currentTimeMillis();
                            long tempoExecucao = fim - inicio;
                            System.out.println("Tempo de execução: " + tempoExecucao);
                        } else {

                            System.out.println(
                                    "O Elemento " + chave + " não foi localizado na lista");
                            long fim = System.currentTimeMillis();
                            long tempoExecucao = fim - inicio;
                            System.out.println("Tempo de execução: " + tempoExecucao);
                        }
                    }

                    break;

                default:
                    break;
            }
        }
    }
}
