import pandas as pd
import numpy as np

# Seed for reproducibility
np.random.seed(42)

# Define the number of samples
num_samples = 100000

# Generate random ages
ages = np.random.randint(18, 91, num_samples)

# Generate random smoking status
smokes = np.random.randint(0, 2, num_samples)

# Define possible medication types
medication_types = ["none", "Blood Pressure", "Diabetes", "Cholesterol", "Asthma", "Heart Disease"]
medications = np.random.choice(medication_types, num_samples)

# Define possible states of health
health_states = ["Healthy", "At Risk", "Unhealthy"]

# Function to determine health state based on inputs
def determine_health_state(age, smokes, medication):
    if medication == "none":
        if smokes == 1 or age > 50:
            return "At Risk"
        else:
            return "Healthy"
    else:
        if smokes == 1 or age > 60:
            return "Unhealthy"
        else:
            return "At Risk"

# Generate health states
health = [determine_health_state(age, smoke, med) for age, smoke, med in zip(ages, smokes, medications)]

# Create a DataFrame
data = pd.DataFrame({
    "Age": ages,
    "Smokes": smokes,
    "Medication": medications,
    "HealthState": health
})

# Save to a CSV file
data.to_csv("health_dataset.csv", index=False)

print("Dataset created successfully.")
