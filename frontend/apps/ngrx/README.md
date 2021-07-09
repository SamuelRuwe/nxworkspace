## Concepts
1. Entire state is in a single state tree
2. State flows from tree to application
3. Events get captured and dispatched via action objects into a reducer

## Reducers
1. Methods inside a reducer perform immutable operations

Similar to input output. When events happen, emit an 'output' (action)

Effects handle asynchronous effects
Relating things together (users & widgets) selectors


## Steps in NgRx
1. Define the shape of state (interface)
Ex:
   
export interface ProjectsState { 
projects: Project[],
selectedProjectId: string | null;
}

By using an id instead of a project, state is stored in only one place.
If a project is used instead of a reference then state would be stored in two places.

2. Define the initial state
The initial state must conform to the defined shape of state.
   
3. Build the simplest reducer possible
