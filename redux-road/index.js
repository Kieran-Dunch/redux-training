// Redux road: beginnings in Redux

const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0
};

const wagonReducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case "gather":
      return {
        ...state,
        supplies: state.supplies + 15,
        days: state.days + 1
      };
    case 'travel':
      if (state.supplies < 20) {
        return state;
      }
      return {
        ...state,
        supplies: state.supplies - (20 * action.payload),
        distance: state.distance + (10 * action.payload),
        days: state.days + action.payload
      };
    case 'tippedWagon':
      return {
        ...state,
        supplies: state.supplies - 30,
        days: state.days + 1
      };
    default:
      return state;
  }
};


// time to play!
let wagon = wagonReducer(undefined, {});
console.log(wagon); // { supplies: 100, distance: 0, days: 0 }
wagon = wagonReducer(wagon, { type: 'travel', payload: 1 });
console.log(wagon); // { supplies: 80, distance: 10, days: 1 }
wagon = wagonReducer(wagon, { type: 'gather' });
console.log(wagon); // { supplies: 95, distance: 10, days: 2 }
wagon = wagonReducer(wagon, { type: 'tippedWagon' });
console.log(wagon); // { supplies: 65, distance: 10, days: 3 }
wagon = wagonReducer(wagon, { type: 'travel', payload: 3 });
console.log(wagon); // { supplies: 5, distance: 40, days: 6 }
