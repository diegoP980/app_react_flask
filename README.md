# ToDo App | React - Flask

### Install the requirements in a python virtual environment:
- Open a new terminal within the Flask project path (`cd back_flask`)
- On the terminal write the next commands:
    * `py -m venv .venv`
    * `.venv/Scripts/activate`
    * `pip install -r requirements.txt`

### Install npm on the React project path:
- Open a new terminal within the React app path (`cd front_react`)
- Write:
    * `npm install`

### To run the proyect:
**Run the back-end server:**
- Open a new terminal within the Flask project path (`cd back_flask`) and write:
    * `flask init-db` (to initalize the sqlite database)
    * `py ./run.py`
- The server will run on the following URL (by default): [*https://localhost:5000*](https://localhost:5000)

**Run the front-end server:**
- Open a new terminal within the React app path (`cd front_react`) and write:
    * `npm run dev`
- The server will run on the following URL (by default): [*https://localhost:5173*](https://localhost:5173)