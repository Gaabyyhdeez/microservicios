# main.py
from flask import Flask, jsonify
from google.cloud import bigquery

app = Flask(__name__)

# Configura tu cliente de BigQuery
client = bigquery.Client()

# Define tu proyecto y dataset
PROJECT_ID = 'serious-ascent-363716'
DATASET_ID = 'example'
TABLE_ID = 'names_2023'

@app.route('/data')
def get_data():
    query = f'SELECT * FROM `{PROJECT_ID}.{DATASET_ID}.{TABLE_ID}` LIMIT 10'
    query_job = client.query(query)
    results = query_job.result()
    
    data = []
    for row in results:
        data.append(dict(row))
        print(row)
    
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
