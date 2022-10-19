# Study Planner
Keep track of your lectures, ECTS and grades.
Create new Semesters, add lectures and edit the grade after you finished the lecture.


## Setup
You need a Docker setup to run this Project.  
The Node image can be found [here](https://github.com/pluswerk/node-dev)
___
### Run the container:  
``` docker-compose up -d ```  
use ``-d`` only if you want to run the container in background

### Enter container:
``docker-compose exec frontend bash``

After starting the container a watch mode of vite with HMR is started.

___
## For Windows only
add this to your vite.config.ts:
```
watch: {
    usePolling: true
}
```
this triggers Docket to check regularly for file changes, otherwise the HMR will not work