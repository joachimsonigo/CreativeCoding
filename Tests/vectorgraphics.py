import pygame
from pygame.locals import *
import random
import math

pygame.init()

# Constants
WINDOW_WIDTH, WINDOW_HEIGHT = 2736, 1824  # 2K resolution
SCALING_FACTOR = 2 # Increase the scaling factor to zoom in
SCALED_WIDTH = WINDOW_WIDTH // SCALING_FACTOR
SCALED_HEIGHT = WINDOW_HEIGHT // SCALING_FACTOR
WHITE = (255, 255, 255)
ORIGIN = (SCALED_WIDTH // 2, SCALED_HEIGHT // 2)  # Centered origin
VECTOR_INCREMENT = 3  # Adjust the increment as needed
SMOOTHING_FACTOR = 0.9  # Adjust the smoothing factor as needed

# Initialize Pygame window
screen = pygame.display.set_mode((WINDOW_WIDTH, WINDOW_HEIGHT))
pygame.display.set_caption("Keyboard Vectors")

# Initialize vectors for each letter
letter_vectors = {}
letter_colors = {}

for letter in 'abcdefghijklmnopqrstuvwxyz':
    # Generate a random 3D direction vector
    theta = random.uniform(0, 2 * math.pi)
    phi = random.uniform(0, math.pi)
    x = math.sin(phi) * math.cos(theta)
    y = math.sin(phi) * math.sin(theta)
    z = math.cos(phi)
    direction = pygame.Vector3(x, y, z).normalize()

    letter_vectors[letter] = pygame.Vector3(0, 0, 0)
    letter_colors[letter] = (random.randint(0, 255), random.randint(0, 255), random.randint(0, 255))

# Game loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == QUIT:
            running = False

    # Clear the screen
    screen.fill(WHITE)

    # Update vector lengths based on key presses
    for event in pygame.event.get():
        if event.type == KEYDOWN:
            letter = pygame.key.name(event.key).lower()
            if letter in letter_vectors:
                # Increase vector length when key is held down
                letter_vectors[letter] += direction * VECTOR_INCREMENT  # Adjust the increment as needed
        elif event.type == KEYUP:
            letter = pygame.key.name(event.key).lower()
            if letter in letter_vectors:
                # Gradually reduce vector length when key is released
                letter_vectors[letter] *= SMOOTHING_FACTOR  # Adjust the smoothing factor as needed

    # Draw vectors
    for letter, vector in letter_vectors.items():
        scaled_endpoint = (
            ORIGIN[0] + vector.x * SCALING_FACTOR,
            ORIGIN[1] + vector.y * SCALING_FACTOR
        )
        pygame.draw.line(screen, letter_colors[letter], ORIGIN[:2], scaled_endpoint, 2)

    pygame.display.update()

pygame.quit()
