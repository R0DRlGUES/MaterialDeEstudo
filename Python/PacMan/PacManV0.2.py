import pygame

pygame.init()

screen = pygame.display.set_mode((800,600), 0)
amarelo = (255, 255, 0)
preto = (0, 0, 0)
azul = (0, 0, 255)
VELOCIDADE = 1

class Cenario:
    def __init__(self, tamanho):
        self.tamanho = tamanho
        self.matriz = [
            [2,2,2,2,2],
            [2,0,2,0,2],
            [2,0,2,0,2],
            [2,0,2,0,2],
            [2,0,2,0,2],
            [2,2,2,2,2]
        ]
    def pintar_coluna(self, tela, numero_linha, linha):
        for numero_coluna in enumarate(linha):
            x = numero_coluna * self.tamanho
            y = numero_linha * self.tamanho
            pygame.draw.rect(tela, azul, (x, y, self.tamanho, self.tamanho), 0)

    def pintar(self, tela):
        for numero_linha, linha in enumerate(self.matriz):
            self.pintar_coluna(numero_lina, liha)

class PacMan:
    def __init__(self):
        self.coluna = 1
        self.linha = 1
        self.centro_x = 400
        self.centro_y = 300
        self.tamanho = 800 // 30
        self.vel_x = 0
        self.vel_y = 0
        self.raio = self.tamanho // 2

    def calcular_regra(self):
        self.coluna = self.coluna + self.vel_x
        self.linha = self.linha + self.vel_y
        self.centro_x = int(self.coluna * self.tamanho + self.raio)
        self.centro_y = int(self.linha * self.tamanho + self.raio)

           


    def pintar(self, tela):
        #Corpo PacMan
        pygame.draw.circle(tela, amarelo, (self.centro_x, self.centro_y), self.raio, 0)

        #Desenho Boca
        canto_boca = (self.centro_x, self.centro_y)
        parte_superior = (self.centro_x + self.raio, self.centro_y - self.raio)
        parte_inferior = (self.centro_x + self.raio, self.centro_y)
        pontos = [canto_boca, parte_inferior, parte_superior]
        pygame.draw.polygon(tela, preto, pontos, 0)

        #Olho
        olho_x = int(self.centro_x + self.raio / 3)
        olho_y = int(self.centro_y - self.raio * 0.75)
        olho_raio = int(self.raio / 10)
        pygame.draw.circle(tela, preto, (olho_x, olho_y), olho_raio, 0)

    def processar_eventos(self, eventos):
        for e in eventos:
            if e.type == pygame.KEYDOWN:
                if e.key == pygame.K_RIGHT:
                    self.vel_x = VELOCIDADE
                elif e.key == pygame.K_LEFT:
                    self.vel_x = -VELOCIDADE
                elif e.key == pygame.K_UP:
                    self.vel_y = -VELOCIDADE
                elif e.key == pygame.K_DOWN:
                    self.vel_y = VELOCIDADE
            elif e.type == pygame.KEYUP:
                if e.key == pygame.K_RIGHT:
                    self.vel_x = 0
                elif e.key == pygame.K_LEFT:
                    self.vel_x = 0
                elif e.key == pygame.K_UP:
                    self.vel_y = 0
                elif e.key == pygame.K_DOWN:
                    self.vel_y = 0
    def processar_eventos_mouse(self, eventos):

        delay = 100
        for e in eventos:
            if e.type == pygame.MOUSEMOTTION:
                mouse_x, mouse_y = e.pos
                self.coluna = mouse_x - self.centro_x / delay
                self.linha = mouse_y - self.centro_y / delay
                    
if __name__ == "__main__":
    PacMan = PacMan()
    Cenario = Cenario(600 // 30)

    while True:
        #Regra
        PacMan.calcular_regra()

        #pintar
        screen.fill(preto)
        Cenario.pintar(screen)
        PacMan.pintar(screen)
        pygame.display.update()
        pygame.time.delay(100)

        #Calcula Eventos

        eventos = pygame.event.get()
        for e in eventos:
            if e.type == pygame.QUIT:
                exit()
            PacMan.processar_eventos_mouse(eventos)
        