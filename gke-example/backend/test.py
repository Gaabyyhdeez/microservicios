from flask import Flask, jsonify
from google.cloud import bigquery

app = Flask(__name__)

# Configura tu cliente de BigQuery
client = bigquery.Client()

# Define tu proyecto y dataset
PROJECT_ID = 'serious-ascent-363716'
DATASET_ID = 'example'
TABLE_ID = 'names_2023'

query = f'SELECT * FROM `{PROJECT_ID}.{DATASET_ID}.{TABLE_ID}` LIMIT 10'
query_job = client.query(query)
results = query_job.result()
    
data = []
for row in results:
    data.append(dict(row))
    print(row)
    
return jsonify(data)
