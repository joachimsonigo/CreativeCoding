import turtle
import random
from webcolors import rgb_to_name
from scipy.spatial import KDTree
from webcolors import (
    css3_hex_to_names,
    hex_to_rgb,
)

def convert_rgb_to_names(rgb_tuple):
    
    # a dictionary of all the hex and their respective names in css3
    css3_db = css3_hex_to_names
    names = []
    rgb_values = []
    for color_hex, color_name in css3_db.items():
        names.append(color_name)
        rgb_values.append(hex_to_rgb(color_hex))
    
    kdt_db = KDTree(rgb_values)
    distance, index = kdt_db.query(rgb_tuple)
    return names[index]

def main():
    # Create a turtle object
    t = turtle.Turtle()
    # Draw a square
    for i in range(4):
        r = random.randint(0, 255)
        g = random.randint(0, 255)
        b = random.randint(0, 255)
        named_color = convert_rgb_to_names((r,g,b))
        t.pencolor(named_color)
        t.forward(100)
        t.left(90)
    # Terminate the program
    turtle.done()

main() # Call the main function
