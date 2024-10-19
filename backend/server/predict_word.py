import tensorflow as tf
import numpy as np
import json
from PIL import Image

# load model
model = tf.keras.models.load_model('handwriting-recog-model90.keras')

# load .json file of all tags
with open('label_mapping.json', 'r') as f:
    label_mapping = json.load(f)
    inverse_label_mapping = {v: k for k, v in label_mapping.items()}


def get_word(file):
    file = Image.open(file).convert('L')  # Convert to grayscale
    file = file.resize((128, 64))  # Resize to 128x64 (width x height)
    file = np.array(file) / 255.0  # Normalize pixel values to [0, 1]
    file = np.expand_dims(file, axis=-1)  # Add a channel dimension (for grayscale)
    file = np.expand_dims(file, axis=0)

    prediction = model.predict(file)
    predicted_index = np.argmax(prediction)
    predicted_word = inverse_label_mapping[predicted_index]

    return predicted_word


print(get_word('IMG_3127 3 copy.png'))

# # process image to be grayscale and properly sized
# def preprocess_image(image_path):
#     image = Image.open(image_path).convert('L')  # Convert to grayscale
#     image = image.resize((128, 64))  # Resize to 128x64 (width x height)
#     image = np.array(image) / 255.0  # Normalize pixel values to [0, 1]
#     image = np.expand_dims(image, axis=-1)  # Add a channel dimension (for grayscale)
#     image = np.expand_dims(image, axis=0)  # Add a batch dimension
#     return image

# # Function to predict the word from an image
# def predict_word(image_path):
#     # Preprocess the input image
#     processed_image = preprocess_image(image_path)
#
#     # Make a prediction
#     prediction = model.predict(processed_image)
#
#     # Get the index of the class with the highest probability
#     predicted_index = np.argmax(prediction)
#
#     # Get the corresponding word from the label mapping
#     predicted_word = inverse_label_mapping[predicted_index]
#
#     return predicted_word


# # Test the function with an example image
# image_path = 'IMG_3127 3 copy.png'  # Replace with your image file path
# predicted_word = predict_word(image_path)
# print(f"The model predicts the word is: {predicted_word}")
