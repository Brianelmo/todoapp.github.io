import React ,{createContext} from 'react' 

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  return (
    <TaskContext.Provider>
      {props.children}
    </TaskContext.Provider>
  )
}


