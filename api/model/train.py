import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import classification_report, accuracy_score
import pickle

# Load the dataset
data = pd.read_csv("model/health_dataset.csv")

# Preprocess the data
# Convert categorical data to numerical
label_encoder = LabelEncoder()

data['Medication'] = label_encoder.fit_transform(data['Medication'])
with open('label_encoder_medication.pkl', 'wb') as file:
    pickle.dump(label_encoder, file)

data['HealthState'] = label_encoder.fit_transform(data['HealthState'])
with open('label_encoder_healthstate.pkl', 'wb') as file:
    pickle.dump(label_encoder, file)

# Define features and target
X = data[['Age', 'Smokes', 'Medication']]
y = data['HealthState']

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train the KNN model
knn = KNeighborsClassifier(n_neighbors=5)
knn.fit(X_train, y_train)

# Make predictions
y_pred = knn.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
report = classification_report(y_test, y_pred, target_names=label_encoder.classes_)

print(f"Accuracy: {accuracy:.2f}")
print("Classification Report:")
print(report)

# Save the model to a pickle file
with open('knn_model.pkl', 'wb') as file:
    pickle.dump(knn, file)

print("Model saved to knn_model.pkl")