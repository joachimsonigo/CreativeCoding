import os
import glob

# Replace 'path_to_images_folder' with the actual path to your image folder
images_folder = 'Lab_2\Homework2\images'

# Get a list of all JPG files in the folder
jpg_files = glob.glob(os.path.join(images_folder, '*.jpg'))

# Define a list of letters from 'a' to 'z'
letters = [chr(i) for i in range(ord('a'), ord('z') + 1)]

# Iterate through the images and rename them with sequential letters
for i, jpg_file in enumerate(jpg_files):
    if i < len(letters):
        new_filename = f"{letters[i]}.jpg"
        new_path = os.path.join(images_folder, new_filename)

        # Check if the new filename already exists before renaming
        if not os.path.exists(new_path):
            os.rename(jpg_file, new_path)
            print(f'Renamed {os.path.basename(jpg_file)} to {new_filename}')

print('All images renamed successfully.')
