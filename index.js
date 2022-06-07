function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (action = 'go to the office'){
    return `This Monday, I will ${action}.`
}

let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }