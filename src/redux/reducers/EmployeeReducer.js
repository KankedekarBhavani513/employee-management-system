const initialState = [
    {
          id:0,
          name:"Raman",
          number:1234567898,
          email : "ra@gmail.com"   
          },
          {

            id:1,
            name:"Rama",
            number:1234556789,
            email : "rm@gmail.com"   
          }];



export const employeeReducer = (state = initialState,action) => {
         switch(action.type){
           case "ADD_EMPLOYEE":
             state = [...state,action.payload];
             return state;
             default: return state;

             case "DELETE_EMPLOYEE":
      const employeeFilter = state.filter((employee) =>
        employee.id === action.payload ? null : employee
      );
      state = employeeFilter;
      return state;

    case "UPDATE_EMPLOYEE":
      const employeeUpdate = state.filter((employee) =>
        employee.id === action.payload.id
          ? Object.assign(employee, action.payload)
          : employee
      );
      state = employeeUpdate;
      return state;

    case "RESET_EMPLOYEE":
      state = [{ name: null, email: null, phone: null }];
      return state;
      
  }
};
        