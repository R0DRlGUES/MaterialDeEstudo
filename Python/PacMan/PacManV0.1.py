import pygame

amarelo = (255,255,0)
preto = (0,0,0)
velocidade = 1
pygame.init()

tela = pygame.display.set_mode((640, 480), 0)
x = 10
y = 10
raio = 30
vel_x = velocidade
vel_y = velocidade
while True:
    # Calculo Regras
    x += vel_x
    y += vel_y

    if x + raio > 640:
        vel_x -= velocidade
    if x - raio < 0:
        vel_x = velocidade

    if y + raio > 480:
        vel_y -= velocidade
    if y - raio  < 0:
        vel_y = velocidade


    # Pinta/Tela
    tela.fill((preto))

    pygame.draw.circle(tela, amarelo, (x, y), 30,5)
    pygame.display.update()

    for e in pygame.event.get():
        if e.type == pygame.QUIT:
            exit()
