export default {
  getUser: () => {
    return {displayName: 'Nate'}
  },
  getConfig: () => {
    return {
      workingPomodoro: 25,
      shortBreak: 5,
      longBreak: 10,
      pomodorosTillLongBreak: 3
    }
  },
  getDisplayName: () => {
    return 'Nate'
  },
  getWorkouts: () => {
    return []
  },
  getTotalPomodoros: () => {
    return 10
  },
  isAuthenticated: () => {
    return false
  }
}