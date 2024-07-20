import sys
import pickle
import numpy as np

# Load the model from the pickle file
with open('model/knn_model.pkl', 'rb') as file:
    knn = pickle.load(file)

# Load the LabelEncoder for Medication
with open('model/label_encoder_medication.pkl', 'rb') as file:
    label_encoder_medication = pickle.load(file)

# Load the LabelEncoder for HealthState
with open('model/label_encoder_healthstate.pkl', 'rb') as file:
    label_encoder_healthstate = pickle.load(file)

# Get input data from command line arguments
age = int(sys.argv[1])
smokes = int(sys.argv[2])
medication = sys.argv[3]
print(age, smokes, medication)

# Encode the medication type
medication_encoded = label_encoder_medication.transform([medication])[0]

# Create the input feature array
input_features = np.array([[age, smokes, medication_encoded]])

# Make the prediction
predicted_class = knn.predict(input_features)[0]

# Decode the predicted class
predicted_health_state = label_encoder_healthstate.inverse_transform([predicted_class])[0]

# Output the prediction
print(predicted_health_state)
